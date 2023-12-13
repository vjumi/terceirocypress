//ações de interação com a página
const el = require ('./elements').ELEMENTS

class IncluirAntimicrobiano{

    acessarIncluirReceitaAntimicrobiano(){
      cy.get(el.BtnPrescricao).click()
      cy.get(el.BtnReceitaAntimicrobiana).click()
      cy.get(el.btnNovaReceitaAntimicrobiana).click()
    }

    salvarNovaReceita(){
        cy.get(el.IncluirNomedoMedicamento).type('dipirona').type('{downarrow}{enter}')
        cy.get(el.incluirPodologia).type('Duas gotas').type('{downarrow}{enter}')
        cy.get(el.DuracaoMedicamento).type('Dez dias').type('{downarrow}{enter}')
        cy.get(el.IncluirDosagem).type('6 ml').type('{downarrow}{enter}')
        cy.get(el.btnSalvarNovaReceita).click()
        cy.get(el.campoMedicamento).contains('Duas gotas, 6 ml por Dez dias')
    }    

    AcessarNovoPaciente(){
      cy.get(el.BtnPrescricao).click()
      cy.get(el.BtnReceitaAntimicrobiana).click()
      cy.get(el.btnNovaReceitaAntimicrobiana).click()
      cy.get(el.IncluirNovoPaciente).click()
      cy.get(el.CampoPaciente).contains('Dados do paciente') 
    }

    AdcionarLocaldeAtendimento(){ 
      cy.get(el.BtnPrescricao).click()
      cy.get(el.BtnReceitaAntimicrobiana).click()
      cy.get(el.btnNovaReceitaAntimicrobiana).click()
      cy.get(el.IncluirNomeLocal).type('HRAN{downarrow}{enter}')
      cy.get(el.BtnNovoLocal).click()
      cy.get(el.campoCadastro).contains('Cadastrar Local de atendimento')
    }

    adcionarMedicamento(){
      
      cy.get(el.IncluirNomedoMedicamento).type('dipirona').type('{downarrow}{enter}')
      cy.get(el.incluirPodologia).type('Duas gotas').type('{downarrow}{enter}')
      cy.get(el.DuracaoMedicamento).type('Dez dias').type('{downarrow}{enter}')
      cy.get(el.IncluirDosagem).type('6 ml').type('{downarrow}{enter}')
      cy.get(el.btnSalvarNovaReceita).click()
      cy.get(el.BtnMaisMedicamentos).click()
      cy.get(el.IncluirNomedoMedicamento).type('dipirona').type('{downarrow}{enter}')
      cy.get(el.incluirPodologia).type('Duas gotas').type('{downarrow}{enter}')
      cy.get(el.incluirOutraDuracao).type('Cinco dias').type('{downarrow}{enter}')
      cy.get(el.OutraDosagem).type('6 ml').type('{downarrow}{enter}')
      cy.get(el.BtnSalvarMaisMedicamentos).click()

    }

    visualizarNovaReceita(){

      cy.get(el.IncluirNomePaciente).type('Tony Stark').type('{downarrow}{enter}')
      cy.get(el.IncluirNomedoMedicamento).type('dipirona').type('{downarrow}{enter}')
      cy.get(el.incluirPodologia).type('Duas gotas').type('{downarrow}{enter}')
      cy.get(el.DuracaoMedicamento).type('Dez dias').type('{downarrow}{enter}')
      cy.get(el.IncluirDosagem).type('6 ml').type('{downarrow}{enter}')
      cy.get(el.btnSalvarNovaReceita).click()
      cy.get(el.IncluirNomeLocal).type('HRAN{downarrow}{enter}')
      cy.get(el.visualizarNovaReceita).click()
      cy.request(el.validarVisuallizar).then((response) => {
        expect(response.status).to.eq(200)
    })  
    }
    
  

}

export default new IncluirAntimicrobiano ();