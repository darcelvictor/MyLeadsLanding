import React from "react"
import CookieConsent from "react-cookie-consent"
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

const CookieBanne = () => {
  return (
    <CookieConsent
      debug={true}
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-tagmanager"
      style={{ background: "green" }}
      onAccept={() => initializeAndTrack(useLocation)}
      enableDeclineButton
      onDecline={() => {
        alert("nay!")
      }}
    >
      This site uses cookies ... super Cooki
    </CookieConsent>
  )
}

export default CookieBanne
