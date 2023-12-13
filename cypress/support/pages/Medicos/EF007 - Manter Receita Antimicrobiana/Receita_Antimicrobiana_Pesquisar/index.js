//ações de interação com a página
const el = require ('./elements').ELEMENTS

class ReceitaAntimicrobianaPesquisar{


    acessarAntimicrobiano(){
      cy.get(el.BtnPrescricao).click()
      cy.get(el.BtnReceitaAntimicrobiana).click()
    }

    PesquisarporData(){
      cy.get(el.CalendarioInicio).type('31082021')
      cy.get(el.CalendarioFinal).type('20092021')
      cy.get(el.CampoPrescricao).contains("14/09/2021")
      cy.get(el.CalendarioInicio).clear()
      cy.get(el.CalendarioFinal).clear()
      
    }

    PesquisarporNome(){
      cy.get(el.AreaCPF).type('Ian Kevin Gonçalves').type('{downarrow}{enter}')
      cy.get(el.CampoPrescricao).contains('Ian Kevin Gonçalves')
      cy.get(el.AreaCPF).clear()
    }

    PesquisarporLocaldeAtendimento(){
      cy.get(el.ArealocalAtendimento).type('Hospital').type('{downarrow}{enter}')
      cy.get(el.ArealocalAtendimento).clear()
    }

    PesquisarporSituação(){
      cy.get(el.AreadeSituacao).select('Não Assinado')
      cy.get(el.CampoPrescricao).contains('Não Assinado')
    }


}

export default new ReceitaAntimicrobianaPesquisar ();