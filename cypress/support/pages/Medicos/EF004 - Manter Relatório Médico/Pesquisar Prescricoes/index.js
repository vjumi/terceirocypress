//ações de interação com a página
const el = require ('./elements').ELEMENTS
class PrescricaoConsultar{

    acessarPrescricoes(){

        cy.get(el.botaoAcessarPrescricao).click()     

    }

    pesquisarPrescricoes(){

        //Pesquisa por Não assinado
        cy.get(el.cpf).type("Guilherme Cancado")
        //cy.get(el.localAtendimentoPesquisar).type("Santa Marta") 
        cy.get(el.situacao).select("Não Assinado")

        //Validar a pesquisa na GRID não assinada
        cy.get(el.colunaCPF).contains("Guilherme Cancado")
        //cy.get(el.colunaLocalAtendimento).contains("Santa Marta")
        cy.get(el.colunaSituacao).contains("Não Assinado")
     
              

    }

    
    pesquisarPrescricoesMassaDeletar(){

        //Pesquisa por Não assinado
        cy.visit('https://prescricao-dev.cfm.org.br/consulta-documento')
        cy.get(el.cpf).type("51289813043")
        cy.get(el.colunaSituacao).contains("Não Assinado")
     
              

    }


    

}

export default new PrescricaoConsultar ();