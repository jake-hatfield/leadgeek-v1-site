import React from "react"

// packages
import axios from "axios"

// components
import Popup from "@components/utils/Popup"

interface WaitlistPopupProps {
  showWaitlistPopup: boolean
  setShowWaitlistPopup: React.Dispatch<boolean>
  selectedPlan: "Bundle" | "Pro" | "Grow"
}

const WaitlistPopup: React.FC<WaitlistPopupProps> = ({
  showWaitlistPopup,
  setShowWaitlistPopup,
  selectedPlan,
}) => {
  const addToWaitlist = async (name: string, email: string, plan: string) => {
    const body = JSON.stringify({
      name,
      email,
      plan,
    })

    await axios.post("/.netlify/functions/create-waitlist-user", body)

    return
  }
  return (
    <Popup
      show={showWaitlistPopup}
      setShow={setShowWaitlistPopup}
      details={{
        id: "waitlistPopup",
        headers: [
          <>Join the {selectedPlan} plan waitlist</>,
          <>Gotcha, you're in!</>,
        ],
        subheaders: [
          <>
            We're at capacity right now on the {selectedPlan} plan. But put your
            contact details down and we'll add you to our waitlist.{" "}
            <span role="img" aria-label="Laptop emoji" className="font-normal">
              💻
            </span>
          </>,
          <>
            You should receive an email confirmation shortly, and we'll email
            you again once some space frees up.
          </>,
        ],
        additionalInfo: null,
        cta: `Join the ${selectedPlan} plan waitlist`,
        tags: [{ name: `${selectedPlan} Plan Waitlist`, status: "active" }],
      }}
      sendToAPI={{ fn: addToWaitlist, var: selectedPlan.toLowerCase() }}
    />
  )
}

export default WaitlistPopup
