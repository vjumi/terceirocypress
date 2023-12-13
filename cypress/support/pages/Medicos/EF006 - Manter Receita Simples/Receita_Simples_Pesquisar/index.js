//ações de interação com a página
const el = require ('./elements').ELEMENTS
class PesquisarReceitaSimples{

    acessarReceitaSimples(){

        cy.get(el.acessarMenuMinhasPrescricoes).click()
        cy.get(el.acessarAbaReceitaSimples).click()

    }
    
    
    
    pesquisarReceitaSimples(){


        cy.get(el.cpf).type('Davi Olavio')
        cy.get(el.localAtendimento).type('CFM - Conselho Federal de Medicinaal Regional de Taguatingatinga')
        cy.get(el.situacao).select('Não Assinado')

        // Validar na GRID a pesquisa

        cy.get('tr.ng-star-inserted > :nth-child(2)').contains('Davi Olavio')
        cy.get('tr.ng-star-inserted > :nth-child(3)').contains('CFM - Conselho Federal de Medicinaal Regional de Taguatingatinga')
        cy.get('#field_inSituacao').contains('Não Assinado')

    }

    pesquisarReceitaSimplesMassaExclusao(){

        cy.visit('https://prescricao-dev.cfm.org.br/consulta-documento?page=1&size=10&sort=consulta.dtConsulta,desc')
        cy.get(el.cpf).type('AutomacaoDeletar')
   

    }



}

export default new PesquisarReceitaSimples ();