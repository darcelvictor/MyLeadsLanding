import CookieConsent from "react-cookie-consent"
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

;<CookieConsent
  location="bottom"
  buttonText="Accept"
  declineButtonText="Decline"
  cookieName="gatsby-gdpr-google-analytics"
  onAccept={() => initializeAndTrack(useLocation)}
>
  This site uses cookies ...
</CookieConsent>
