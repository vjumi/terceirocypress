//ações de interação com a página
const el = require ('./elements').ELEMENTS
class PrescricaoEditar{



  editarRelatorioMedico(){




    cy.get(el.botaoAcessarPrescricao).click()
    cy.get(el.cpf).type('05604179183')
    cy.get(el.botaoEditar).click()
  
    cy.get(el.descricao).type('Relatorio alterado com automacao')
    cy.get(el.botaoSalvarRelatorioMedico).click()
    cy.get('.alert').contains('Registro salvo com sucesso!')

      
  }


}

export default new PrescricaoEditar ();