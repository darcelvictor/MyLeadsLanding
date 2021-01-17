import React from "react"
import styled from "styled-components"
import { pxToRem, layout, media } from "../../../theme/helpers"

const Footer3 = ({ className }) => {
  return (
    <div className={className}>
      <p>
        Les informations recueillies sur ce formulaire sont enregistrées dans un
        fichier informatisé par MyLeads Agency pour le traitement de votre
        demande. Elles sont conservées pendant la durée légale et sont destinées
        à répondre à votre demande et vous informer des nouveautés qui
        pourraient vous intéresser, offres privilège, opportunités. Conformément
        à la loi « informatique et libertés », vous pouvez exercer votre droit
        d’accès aux données vous concernant et les faire rectifier en contactant
        :{" "}
        <a href="mailto:contact@mon-eco-habitat.fr">
          contact@mon-eco-habitat.fr
        </a>{" "}
        ou par courrier au 50 quai du parc - 94100 SAINT MAUR DES FOSSES. Nous
        vous informons de l’existence de la liste d’opposition au démarchage
        téléphonique « Bloctel », sur laquelle vous pouvez vous inscrire ici :
        <br />
        <a href="https://conso.bloctel.fr/">https://conso.bloctel.fr/</a>
      </p>
      <p>
        Propulsé par <a href="https://myleads-agency.com/">MyLeads Agency</a>
      </p>
    </div>
  )
}

export default styled(Footer3)`
  ${layout}
  width: 100%;
  padding: ${pxToRem(13)} ${pxToRem(27)};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${pxToRem(10)};
  p,
  a {
    margin: ${pxToRem(10)};
    text-decoration: none;
    font-family: Roboto;
    font-size: ${pxToRem(10)};
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    color: #bcbcbc;
  }
  ${media.small`
  font-size: ${pxToRem(14)};
  `}
  ${media.small`
  font-size: ${pxToRem(17)};
  `}
`
