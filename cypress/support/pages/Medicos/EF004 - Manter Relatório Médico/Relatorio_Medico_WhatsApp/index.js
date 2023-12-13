//ações de interação com a página

const el = require ('./elements').ELEMENTS
class PrescricaoWhatsApp{



    PrescricaoWhatsApp(){

    cy.wait(1000)
    cy.get(el.botaoWhatsAPP).click({ force: true })

/*
    cy.request(el.validarRequisicao200).then((response) => {
      expect(response.status).to.eq(200)
  
      })  */
 

      
  }


}

export default new PrescricaoWhatsApp ();