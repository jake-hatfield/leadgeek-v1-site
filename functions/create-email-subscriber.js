const mailchimp = require("@mailchimp/mailchimp_marketing")

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

    async function createSubscriber() {
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
      console.log(res)
      if (res.id) {
        return { statusCode, headers, body: "Contact was added successfully." }
      } else {
        return { statusCode: 500, headers, body: "Contact could not be added." }
      }
    }

    createSubscriber()
  } catch (error) {
    console.log(error)
  }
}
