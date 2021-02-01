import CookieConsent from "react-cookie-consent"
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

const CookieBanne = () => {
  return (
    <CookieConsent
      location="top"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-tagmanager"
      onAccept={() => initializeAndTrack(useLocation)}
      style={{ background: "green" }}
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
