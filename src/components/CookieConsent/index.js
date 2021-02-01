import React from "react"
import CookieConsent from "react-cookie-consent"
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

const CookieBanne = () => {
  const location = useLocation()

  return (
    <CookieConsent
      debug={true}
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-tagmanager"
      style={{ background: "green" }}
      onAccept={() => initializeAndTrack(location)}
      enableDeclineButton
      onDecline={() => {
        alert("cookies non acceptés!")
      }}
    >
      This site uses cookies ...
    </CookieConsent>
  )
}

export default CookieBanne
