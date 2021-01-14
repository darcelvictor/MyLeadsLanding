import React from "react"
import { navigate } from "gatsby-link"
import { Accent } from "../../theme/helpers"

import {
  FormContainer,
  Form,
  FormHeader,
  FormPresentation,
  FormTitle,
  FormSeparator,
  Label,
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
    <FormContainer>
      <FormHeader>
        Vérifiez votre éligibilité aux aides de l’état en 1 minute !
      </FormHeader>
      <FormPresentation>
        Pour obtenir une réponse parfaitement adaptée à votre situation,
        veuillez renseigner l’ensemble des champs suivants :
      </FormPresentation>
      <FormTitle>Votre Logement</FormTitle>
      <FormSeparator>
        <div></div>
      </FormSeparator>
      <Form
        name="contact"
        method="post"
        action="/thanks/"
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
        <Label>
          Type de bien concerné :<Accent>*</Accent>
          <br />
          <div>
            <div>
              <p>Maison</p>
              <input
                type="radio"
                name="houseType"
                value="Maison"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p>Appartement</p>
              <input
                type="radio"
                name="houseType"
                value="Appartement"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </Label>
        <Label>
          Dans ce logement, vous êtes :<Accent>*</Accent>
          <br />
          <div>
            <div>
              <p>Propriétaire</p>
              <input
                type="radio"
                name="proprity"
                value="owner"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p>Locataire</p>
              <input
                type="radio"
                name="proprity"
                value="tenant"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </Label>
        <p>
          <Label>
            Votre type de chauffage actuel :<Accent>*</Accent>
            <br />
            <select id="pet-select" required>
              <option value="">--Sélectionner un type de chauffage--</option>
              <option value="Gaz">Gaz</option>
              <option value="electrique">Électrique</option>
              <option value="Bois">Bois</option>
              <option value="Fioul">Fioul</option>
              <option value="Charbon">Charbon</option>
            </select>
          </Label>
        </p>
        <p>
          <Label>
            Surface habitable de votre logement :<Accent>*</Accent>
            <br />
            <select id="pet-select" required>
              <option value="">--Sélectionner votre surface--</option>
              <option value="50/100">entre 50 et 100m2</option>
              <option value="100/150">entre 100 et 150m2</option>
              <option value="150/200">entre 150 et 200m2</option>
              <option value="+200">plus de 200m2</option>
            </select>
          </Label>
        </p>
        <Label>
          Civilté :<Accent>*</Accent>
          <br />
          <div>
            <div>
              <p>Monsieur</p>
              <input
                type="radio"
                name="gender"
                value="Monsieur"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p>Madame</p>
              <input
                type="radio"
                name="gender"
                value="madame"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </Label>
        <p>
          <Label>
            Nom :
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </Label>
        </p>
        <p>
          <Label>
            téléphone :
            <br />
            <input type="phone" name="phone" onChange={handleChange} />
          </Label>
        </p>
        <p>
          <Label>
            Votre adresse e-mail :
            <br />
            <input type="email" name="email" onChange={handleChange} />
          </Label>
        </p>
        <button type="submit">Validé ma demande &#10003;</button>
      </Form>
    </FormContainer>
  )
}
export default MyForm
