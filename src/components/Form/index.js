import React from "react"
import { navigate } from "gatsby-link"
import { Accent } from "../../theme/helpers"

import {
  FormContainer,
  Form,
  FormHeader,
  FormPresentation,
  FormTitle,
  Label,
  SemiContainer,
  Semi,
  SemiContainerMed,
  SemiMed,
  BoldGreenText,
  LegalText,
} from "./FormElements"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const MyForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  // const handleBlur = e => {
  //   setState({ ...state, [e.target.name]: e.target.value })
  // }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <FormContainer id="form">
      <FormHeader>
        Vérifiez votre éligibilité
        <br />
        aux aides de l’état
        <br />
        en 1 minute !
      </FormHeader>
      <FormPresentation>
        Pour obtenir une réponse parfaitement adaptée à votre situation,
        veuillez renseigner l’ensemble des champs suivants :
      </FormPresentation>
      <Form
        name="contact"
        method="post"
        action="/merci/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <Label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </Label>
        </p>
        <FormTitle>Votre Logement</FormTitle>
        <SemiContainerMed>
          <SemiMed>
            <p>
              <Label>
                Type de bien concerné :<Accent>*</Accent>
                <br />
                <select
                  id="type-de-bien"
                  name="typeDhabitat"
                  onBlur={handleChange}
                  required
                >
                  <option value="">--Sélectionner une option--</option>
                  <option value="Appartement">Appartement</option>
                  <option value="Maison">Maison</option>
                  <option value="Bureaux">Bureaux</option>
                </select>
              </Label>
            </p>
          </SemiMed>
          <SemiMed>
            <p>
              <Label>
                Dans ce logement, vous êtes :<Accent>*</Accent>
                <br />
                <select
                  id="Propriétaire"
                  name="Situation"
                  onBlur={handleChange}
                  required
                >
                  <option value="">--Sélectionner une option--</option>
                  <option value="Propiétaire">Propiétaire</option>
                  <option value="Locataire">Locataire</option>
                </select>
              </Label>
            </p>
          </SemiMed>
        </SemiContainerMed>
        <SemiContainerMed>
          <SemiMed>
            <p>
              <Label>
                Votre type de chauffage actuel :<Accent>*</Accent>
                <br />
                <select
                  id="chauffage"
                  name="typeChauffage"
                  onBlur={handleChange}
                  required
                >
                  <option value="">--Sélectionner une option--</option>
                  <option value="Gaz">Gaz</option>
                  <option value="electrique">Électrique</option>
                  <option value="Bois">Bois</option>
                  <option value="Fioul">Fioul</option>
                  <option value="Charbon">Charbon</option>
                </select>
              </Label>
            </p>
          </SemiMed>
          <SemiMed>
            <p>
              <Label>
                Surface habitable de votre logement :<Accent>*</Accent>
                <br />
                <select
                  id="surface"
                  name="Surface"
                  onBlur={handleChange}
                  required
                >
                  <option value="">--Sélectionner une option--</option>
                  <option value="50/100">entre 50 et 100m2</option>
                  <option value="100/150">entre 100 et 150m2</option>
                  <option value="150/200">entre 150 et 200m2</option>
                  <option value="+200">plus de 200m2</option>
                </select>
              </Label>
            </p>
          </SemiMed>
        </SemiContainerMed>
        <p>
          <Label>
            Montant de votre facture mensuelle de chauffage :<Accent>*</Accent>
            <br />
            <input
              type="number"
              name="MontantFacture"
              onChange={handleChange}
              required
            />
          </Label>
        </p>
        <SemiContainer>
          <Semi>
            <p>
              <Label>
                Ville / Village :<Accent>*</Accent>
                <br />
                <input
                  type="text"
                  name="ville"
                  onChange={handleChange}
                  required
                />
              </Label>
            </p>
          </Semi>
          <Semi>
            <p>
              <Label>
                Code postal :<Accent>*</Accent>
                <br />
                <input
                  type="number"
                  name="codePostal"
                  onChange={handleChange}
                  required
                />
              </Label>
            </p>
          </Semi>
        </SemiContainer>
        <FormTitle>Vos informations de contact</FormTitle>
        <div className="checkBox">
          <p>
            Civilité :<Accent>*</Accent>
          </p>
          <div>
            <Label>
              <input
                type="radio"
                name="civilité"
                value="Mme"
                onChange={handleChange}
                required
              />
              <p>Madame</p>
            </Label>
            <Label>
              <input
                type="radio"
                name="civilité"
                value="M"
                onChange={handleChange}
                required
              />
              <p>Monsieur</p>
            </Label>
          </div>
        </div>
        <SemiContainer>
          <Semi>
            <p>
              <Label>
                Nom :<Accent>*</Accent>
                <br />
                <input
                  type="text"
                  name="prenom"
                  onChange={handleChange}
                  required
                />
              </Label>
            </p>
          </Semi>
          <Semi>
            <p>
              <Label>
                Prénom :<Accent>*</Accent>
                <br />
                <input
                  type="text"
                  name="nom"
                  onChange={handleChange}
                  required
                />
              </Label>
            </p>
          </Semi>
        </SemiContainer>
        <SemiContainer>
          <Semi>
            <p>
              <Label>
                Votre numéro de téléphone :<Accent>*</Accent>
                <br />
                <input
                  type="tel"
                  name="telephone"
                  onChange={handleChange}
                  required
                />
              </Label>
            </p>
          </Semi>
          <Semi>
            <p>
              <Label>
                Votre adresse e-mail :<Accent>*</Accent>
                <br />
                <input
                  type="eMail"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </Label>
            </p>
          </Semi>
        </SemiContainer>
        <Label className="rgpd">
          <input type="checkbox" name="rgpd" onChange={handleChange} required />
          <p>
            <span>Accord RGPD : </span>J’autorise le site de mon-eco-habitat à
            conserver et utiliser mes données personnelles pour le traitement de
            ma demande. Ces données peuvent êtres supprimées à ma demande.
          </p>
        </Label>
        <button type="submit">Valider ma demande &#10003;</button>
        <BoldGreenText>Gratuit et sans engagement</BoldGreenText>
        <LegalText>
          Vos informations sont strictement confidentielles et peuvent être
          supprimées à tout moment. En validant le formulaire, vous acceptez
          d’être contacté pour obtenir des conseils personnalisés. Pour plus
          d’informations consultez notre politique de confidentialité.
        </LegalText>
      </Form>
    </FormContainer>
  )
}
export default MyForm
