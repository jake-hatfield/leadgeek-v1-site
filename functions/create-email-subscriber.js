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

const createSubscriber = async data => {
  const { email, FNAME, LNAME, PLAN, LEAD, tags } = data

  // check if subscriber already exists
  const checkEmail = await mailchimp.searchMembers.search(email)
  //   if they exist, update their tag
  if (checkEmail.exact_matches.total_items > 0) {
    const subscriberHash = md5(email)
    await mailchimp.lists.updateListMemberTags(listId, subscriberHash, {
      tags: [
        {
          name: tags[0],
          status: "active",
        },
      ],
    })
    return {
      statusCode,
      headers,
      body: JSON.stringify({
        status: "success",
        message: "Contact was updated.",
      }),
    }
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
      console.log(message)
      const addToAutomation = await mailchimp.customerJourneys.trigger(
        2472,
        39572,
        {
          email_address: email,
        }
      )
      if (addToAutomation === null) {
        return {
          statusCode,
          headers,
          body: JSON.stringify({ status: "success", message }),
        }
      } else {
        message = "Contact could not be added."
        console.log(message)
        console.log(res)
        return {
          statusCode,
          headers,
          body: JSON.stringify({ status: "failed", message }),
        }
      }
    } else {
      message = "Contact could not be added."
      return {
        statusCode,
        headers,
        body: JSON.stringify({ status: "failed", message }),
      }
    }
  }
}

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
  const data = JSON.parse(event.body)

  try {
    await createSubscriber(data)

    return {
      statusCode,
      headers,
      body: JSON.stringify({
        status: "success",
        message: "Contact was added successfully.",
      }),
    }
  } catch (error) {
    console.log(error)
  }
}
