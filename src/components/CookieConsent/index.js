import React from "react"
import CookieConsent from "react-cookie-consent"
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import styled from "styled-components"
import { colors, layout, pxToRem } from "../../theme/helpers"

const CookieBanne = ({ className }) => {
  const location = useLocation()

  return (
    <CookieConsent
      debug={true}
      containerClasses={className}
      disableStyles={true}
      buttonWrapperClasses="CCbuttons"
      declineButtonId="DeclineButton"
      buttonText="Accepter"
      declineButtonText="Refuser"
      cookieName="gatsby-gdpr-google-tagmanager"
      onAccept={() => initializeAndTrack(location)}
      enableDeclineButton
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ut quas
      tempore numquam eaque deserunt pariatur autem placeat velit cum iste. Quod
      esse harum corrupti saepe repellat eum quo nihil a dolorum ipsam
      voluptates est animi distinctio beatae ducimus, eaque aliquam illo
      consequatur, temporibus delectus tempora! Impedit, assumenda. Amet error
      reiciendis nobis eos commodi labore, praesentium ex illo quidem quo
      expedita voluptatum dignissimos voluptates placeat, pariatur delectus
      ipsum iste cupiditate molestias quae minus cumque accusamus dolorum
      voluptate. Laborum, facere? Eius, expedita deserunt. Suscipit, animi.
      Ipsum nam obcaecati, mollitia rem reprehenderit, cumque aliquid numquam
      repudiandae maxime odit assumenda dolores fugiat optio?
    </CookieConsent>
  )
}

export default styled(CookieBanne)`
  padding: ${pxToRem(15)};
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${colors.blue};
  color: white;
  border-radius: ${pxToRem(15)} ${pxToRem(15)} 0 0;
  .CCbuttons {
    ${layout()}
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: ${pxToRem(15)};
    #DeclineButton {
      background-color: transparent;
      border: none;
      :hover {
        color: ${colors.lightGrey};
      }
    }
  }
`
