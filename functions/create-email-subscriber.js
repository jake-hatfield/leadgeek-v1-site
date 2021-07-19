const mailchimp = require("@mailchimp/mailchimp_marketing")
const md5 = require("md5")

const apiKey = process.env.GATSBY_MC_API_KEY
const server = process.env.GATSBY_MC_SERVER
const listId = process.env.GATSBY_MC_AUDIENCE_ID

const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

mailchimp.setConfig({
  apiKey,
  server,
})

exports.handler = async function (event, context, callback) {
  try {
    const { email, FNAME, LNAME, PLAN, LEAD, tags } = JSON.parse(event.body)
    const subscriberHash = md5(email)
    async function createSubscriber() {
      // check if subscriber already exists
      const checkEmail = await mailchimp.searchMembers.search(email)
      //   if they exist, update their tag
      if (checkEmail.exact_matches.total_items > 0) {
        await mailchimp.lists.updateListMemberTags(listId, subscriberHash, {
          tags: [
            {
              name: tags[0],
              status: "active",
            },
          ],
        })
        return { statusCode, headers, body: "Contact was updated." }
      } else {
        //   create a new subscriber w/ tags
        const res = await mailchimp.lists.addListMember(listId, {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME,
            LNAME,
            PLAN,
            LEAD,
          },
          tags,
        })
        let message
        if (res.id) {
          message = "Contact was added successfully."
          return {
            statusCode,
            headers,
            body: message,
          }
        } else {
          message = "Contact could not be added."
          return {
            statusCode: 400,
            headers,
            body: message,
          }
        }
      }
    }

    createSubscriber()
  } catch (error) {
    console.log(error)
  }
}
