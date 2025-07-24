import { ContactSection } from "../home/contact-section"
import { NossaHistoria } from "./nossahistoria"
import { NossaMissao } from "./nossamissao"
import { NossaVisao } from "./nossavisao"
import { QuemSomosHeader } from "./quemsomos"
import { ServicosQuemsomos } from "./servicos-quemsomos"
import { Valores } from "./valores"

export const QuemSomos = () => {
  return (
    <>
        <QuemSomosHeader/>
        <Valores/>
        <NossaVisao/>
        <NossaMissao/>
        <NossaHistoria/>
        <ServicosQuemsomos/>
        <ContactSection/>
    </>
  )
}
