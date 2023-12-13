//ações de interação com a página

const el = require ('./elements').ELEMENTS
class PrescricaoExcluirRelatorioMedico{



    PrescricaoExcluirRelatorioMedico(){

    cy.get(el.botaoExcluir).click()
    cy.get(el.botaoConfirmarExclusao).click()
    cy.get(el.mensagemConfirmacao).contains('Exclusão realizada com sucesso!')

      
  }


}

export default new PrescricaoExcluirRelatorioMedico ();