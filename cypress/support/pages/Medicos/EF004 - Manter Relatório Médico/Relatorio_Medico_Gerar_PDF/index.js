//ações de interação com a página

const el = require ('./elements').ELEMENTS
class PrescricaoGerarRelatorioMedicoPDF{



  PrescricaoGerarRelatorioMedicoPDF(){

    cy.get(el.botaoGerarPDF).click()


    cy.request(el.validarRequisicao200).then((response) => {
    expect(response.status).to.eq(200)

    })  

    

      
  }


}

export default new PrescricaoGerarRelatorioMedicoPDF ();