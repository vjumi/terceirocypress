//ações de interação com a página
const el = require ('./elements').ELEMENTS

class ExcluirReceitaAntimicrobiana{

    AcessarExcluirReceitaAtimicrobiana(){

        cy.get(el.BtnPrescricao).click()
        cy.get(el.BtnReceitaAntimicrobiana).click()
        cy.get(el.btnNovaReceitaAntimicrobiana).click()

    }

    ExcluirReceitaAntimicrobiana(){
        cy.get(el.IncluirNomedoMedicamento).type('dipirona').type('{downarrow}{enter}')
        cy.get(el.incluirPodologia).type('Duas gotas').type('{downarrow}{enter}')
        cy.get(el.DuracaoMedicamento).type('Dez dias').type('{downarrow}{enter}')
        cy.get(el.IncluirDosagem).type('6 ml').type('{downarrow}{enter}')
        cy.get(el.btnSalvarNovaReceita).click()
        cy.get(el.btnExcluirMedicamento).click({force:true})
    }

    CancelarReceitaAntmicrobiana(){
        cy.get(el.IncluirNomedoMedicamento).type('dipirona').type('{downarrow}{enter}')
        cy.get(el.incluirPodologia).type('Duas gotas').type('{downarrow}{enter}')
        cy.get(el.DuracaoMedicamento).type('Dez dias').type('{downarrow}{enter}')
        cy.get(el.IncluirDosagem).type('6 ml').type('{downarrow}{enter}')
        cy.get(el.btnSalvarNovaReceita).click()
        cy.get(el.btnCancelarMerdicamentos).click()
        cy.get(el.btnConfirmarCancelamento).click()

    }

    }

export default new ExcluirReceitaAntimicrobiana ();