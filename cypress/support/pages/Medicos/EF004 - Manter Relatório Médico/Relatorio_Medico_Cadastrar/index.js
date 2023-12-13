//ações de interação com a página
const el = require ('./elements').ELEMENTS
class PrescricaoCadastrar{


    cadastrarRelatorioMedico(){

        cy.get(el.botaoAcessarPrescricao).click()
        cy.get(el.abaAcessarRelatorioMedico).click()  
        cy.get(el.botaoNovoRelatorioMedico).click()  

        cy.get(el.cpfPaciente).type('316.068.660-44 - Davi Olavio').type('{downarrow}{enter}')
        cy.get(el.descricao).type('Teste automatizado cadastro relatorio medico' )
        cy.get(el.localAtendimento).type('Santa Marta').type('{downarrow}{enter}')
        cy.get(el.botaoSalvarRelatorioMedico)
 


    }

    cadastrarRelatorioMedicoMassaParaDeletar(){

        cy.get(el.botaoAcessarPrescricao).click()
        cy.get(el.abaAcessarRelatorioMedico).click()  
        cy.get(el.botaoNovoRelatorioMedico).click()  

        cy.wait(1000)
        cy.get(el.cpfPaciente).type('512.898.130-43').type('{downarrow}{enter}')
        cy.get(el.descricao).type('Teste automatizado cadastro relatorio medico' )
        cy.get(el.localAtendimento).type('Santa Marta').type('{downarrow}{enter}')
        cy.get(el.botaoSalvarRelatorioMedico)
 


    }


}

export default new PrescricaoCadastrar ();