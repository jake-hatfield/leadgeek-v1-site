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

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode,
      headers,
      body: JSON.stringify({
        status: "failed",
        message: "This was not a POST request",
      }),
    }
  }

  try {
    const { email, FNAME, LNAME, PLAN, LEAD, tags } = JSON.parse(event.body)

    if (!email) {
      const message = "Required information is missing."
      console.log(message)
      return {
        statusCode,
        headers,
        body: JSON.stringify({
          status: "failed",
          message,
        }),
      }
    }
    // see if the subscriber already exists
    const checkEmail = await mailchimp.searchMembers.search(email)
    // if they do, update the tags
    if (checkEmail.exact_matches.total_items > 0) {
      console.log("Email found...")
      const subscriberHash = await md5(email)
      await mailchimp.lists.updateListMemberTags(listId, subscriberHash, {
        tags,
      })
      return {
        statusCode,
        headers,
        body: JSON.stringify({
          status: "success",
          message: "Contact was updated.",
        }),
      }
    }

    // addListMember requires the tags to be in an array of strings rather than an array of objects :)
    const tagsToString = tags.map(tag => tag.name)
    console.log("Creating a new subscriber...")
    // create a new subscriber w/ tags
    const { id } = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME,
        LNAME,
        PLAN,
        LEAD,
      },
      tags: tagsToString,
    })
    let message
    if (id) {
      message = "Contact was added successfully."
      console.log(message)
      return {
        statusCode,
        headers,
        body: JSON.stringify({
          status: "success",
          message,
        }),
      }
    } else {
      message = "Contact could not be added."
      return {
        statusCode,
        headers,
        body: JSON.stringify({ status: "failed", message }),
      }
    }
  } catch (error) {
    console.log(error.response)
  }
}
