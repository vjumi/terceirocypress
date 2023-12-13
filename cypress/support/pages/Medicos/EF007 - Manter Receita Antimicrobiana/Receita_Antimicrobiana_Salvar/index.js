//ações de interação com a página
const el = require ('./elements').ELEMENTS

class SalvarrAntimicrobiano{

    acessarSalvarReceitaAntimicrobiano(){
      cy.get(el.BtnPrescricao).click()
      cy.get(el.BtnReceitaAntimicrobiana).click()
    }
    salvarReceitaCompleta(){
        cy.get(el.btnNovaReceitaAntimicrobiana).click()
        cy.get(el.IncluirNomePaciente).type('Tony Stark').type('{downarrow}{enter}')
        cy.get(el.IncluirNomedoMedicamento).type('dipirona').type('{downarrow}{enter}')
        cy.get(el.incluirPodologia).type('Duas gotas').type('{downarrow}{enter}')
        cy.get(el.DuracaoMedicamento).type('Dez dias').type('{downarrow}{enter}')
        cy.get(el.IncluirDosagem).type('6 ml').type('{downarrow}{enter}')
        cy.get(el.btnSalvarNovaReceita).click()
        cy.get(el.IncluirNomeLocal).type('HRAN{downarrow}{enter}')
        cy.get(el.btnSalvarReceita).click()
        cy.get(el.validacaoSalvar).contains('Registro salvo com sucesso!')
    } 
 

}

export default new SalvarrAntimicrobiano ();