import { Armazenamento } from "./armazenamento"
import { CargasPerigosas } from "./cargas_perigosas"
import { CargasSensiveis } from "./cargas_sensiveis"
import { Coletas } from "./coletas"
import { EntregaDis } from "./entregaDis"
import { ServicesSection } from "./service_section"
import { Services } from "./services"

export const Servicos = () => {
  return (
    <>
        <ServicesSection/>
        <Services/>
        <EntregaDis/>
        <Coletas/>
        <CargasSensiveis/>
        <CargasPerigosas/>
        <Armazenamento/>
    </>
  )
}