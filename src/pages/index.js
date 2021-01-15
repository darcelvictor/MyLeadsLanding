import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/Banner"
import { Container } from "../components/Container/ContainerElements"
import CheckList from "../components/CheckList"
import Separator from "../components/Separator"
import MyForm from "../components/Form"
import { FirstSection } from "../components/Sections"
import { Footer1, Footer2 } from "../components/Sections/Footers"
import { colors } from "../theme/helpers"

import data from "../theme/data"
import CTA from "../components/CTA"
import ListNumber from "../components/ListNumber"
import ListNumberUnderLine from "../components/ListNumberUnderLine"
import MyH2 from "../components/MyH2"

// IMAGES
import MaPrimRenov from "../images/svg/maPrimRenov.inline.svg"
import MaPrimRenov2 from "../images/svg/maPrimeRenov2.inline.svg"
import Depanneur from "../images/svg/depanneur.inline.svg"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* ----------1ERE PARTIE ----------*/}
    <Container
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #4a74ff, rgba(69, 151, 186, 0.75) 51%, rgba(24, 145, 184, 0.51) 88%, rgba(255, 255, 255, 0.51))",
      }}
    >
      <Banner>
        Vous êtes propriétaire d’une maison chauffée au gaz, au fioul ou au
        charbon ?
      </Banner>
      <Separator />
      <h1>
        Bénéficiez de 20000€ d’aides pour l’installation de votre pompe à
        chaleur
      </h1>
      <CheckList data={data.firstCheckList} color="white" />
      <MyForm />
    </Container>
    {/* ----------2EME PARTIE ----------*/}
    <Container>
      <FirstSection />
      {/* ----------3EME PARTIE ----------*/}
      <CTA fontSize={23}>je test mon éligibilité</CTA>
      <MyH2>Comment fonctionne une pompe à chaleur ?</MyH2>
      <Depanneur />
      <CheckList
        data={data.secondCheckList}
        color={colors.blue}
        TitleColor={colors.grey}
      />

      <CTA fontSize={27}>TEST D’éligibilité &#8593;</CTA>
    </Container>
    <div style={{ maxWidth: `600px`, margin: `1.45rem 0` }}>
      <Image />
    </div>
    {/* ----------4EME PARTIE ----------*/}
    <Container>
      <MyH2>Comment fonctionne une pompe à chaleur ?</MyH2>
      <p>
        Les pompes à chaleur réversibles répondent au double objectif de
        chauffer votre habitat en hiver et d’obtenir une fraicheur agréable en
        été. Pour fonctionner, la PAC utilise uniquement l’air ambiant et
        l’électricité afin de s’alimenter. Elle se décompose en deux modules :
        un à l’intérieur du logement et un autre à l’extérieur qui va capter
        l’air.
      </p>
      <ListNumber />
      <CTA fontSize={27}>Vérifier mon éligibilité</CTA>
    </Container>
    {/* ----------5EME PARTIE ----------*/}
    <Container>
      <MyH2>votre pompe à chaleur en 3 étapes</MyH2>
      <ListNumberUnderLine />
    </Container>
    {/* ----------6EME PARTIE ----------*/}
    <Container
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(101, 194, 229, 0.23) 19%, rgba(101, 194, 229, 0.47) 85%, rgba(255, 255, 255, 0.51))",
      }}
    >
      <MyH2>Qu’est-ce que MaPrimeRenov’ ? </MyH2>
      <MaPrimRenov2 />
      <h3>
        MaPrimeRénov’ est la principale aide de l’Etat pour la rénovation
        énergétique.{" "}
      </h3>
      <p>
        Cette aide existe depuis le 1er janvier 2020, mais à compter du 1er
        janvier 2021, tous les propriétaires occupants modestes ou aisés,
        propriétaires bailleurs et copropriétés peuvent en bénéficier.
      </p>
      <p>
        L’ensemble des travaux qui feront l’objet d’un devis signé après le 1er
        octobre 2020 sont éligibles à MaPrimeRénov’.
      </p>
      <p>
        Les propriétaires occupants et les copropriétaires pourront déposer leur
        demande d’aide dès le 1er janvier 2021, les propriétaires bailleurs
        pourront le faire dès le 1er juillet 2021.
      </p>
      <p>
        Cette aide a pour but d’améliorer la qualité de service en accélérant et
        en simplifiant les démarches. Désormais, un simple dossier en ligne vous
        permettra de bénéficier d’une aide versée rapidement après la fin des
        travaux sans attendre une réduction fiscale l’année suivante comme
        auparavant.
      </p>
      <p>
        MaPrimeRénov’ permet aussi de cibler davantage les travaux permettant le
        plus d’économies d’énergie. Elle peut financer une grande variété de
        travaux d’isolation, de ventilation, de changement de mode de chauffage,
        ou de rénovation globale. Les travaux les plus performants sont mieux
        financés et le montant de la prime est progressif afin de soutenir plus
        fortement les ménages qui en ont le plus besoin.
      </p>
      <a className="link" href="https://www.maprimerenov.gouv.fr">
        source : www.maprimerenov.gouv.fr
      </a>
      <CTA>Je souhaite tester mon éligibilité &#8594;</CTA>
    </Container>
    {/* ----------7EME PARTIE ----------*/}
    <Container>
      <MaPrimRenov style={{ margin: "70 auto" }} />
    </Container>
    <footer>
      <Footer1 />
      <Footer2 />
    </footer>
  </Layout>
)

export default IndexPage
