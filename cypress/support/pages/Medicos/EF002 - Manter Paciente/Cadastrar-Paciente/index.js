export default class CadastroPaciente {

    constructor(paciente){
        this.elementos = {
            botaoPaciente: ':nth-child(2) > .sub-menu > .d-flex',
            responsavelLegal:'.form-inline > :nth-child(2)',
            cpf_responsavel_legal:"#field_cpfResponsavelLegal",
            nome_responsavel_legal: '#field_nomeResponsavelLegal',
            cpf_ivalido: '.col-md-2 > div.ng-star-inserted > .form-text',
            campo_obrigatorio: '.form-text'
        }

        this.paciente = paciente
    }

    acessarCadastroPaciente() {
        cy.get(this.elementos.botaoPaciente).click()
        cy.get('#jh-create-entity').click()
    }

    invalidandoResponsavelLegal() {
        //Invalidando Responsavel Legal
        cy.get(this.elementos.responsavelLegal).click()
        cy.get(this.elementos.cpf_responsavel_legal).type(this.paciente.responsavel.cpf)
        cy.get(this.elementos.nome_responsavel_legal).click()
        cy.wait(1000)
        cy.get(this.elementos.nome_responsavel_legal).clear()
        cy.get(this.elementos.cpf_ivalido).contains("CPF Inválido")
        cy.wait(1000)
        cy.get(this.elementos.cpf_responsavel_legal).clear()
        cy.wait(1000)
        cy.get(this.elementos.campo_obrigatorio).contains("Campo obrigatório.")
        cy.wait(1000)
        //Validando Responsavel Legal
        // cy.get(this.elementos.cpf_responsavel_legal).type(this.paciente.responsavel.cpf)
        // cy.get(this.elementos.nome_responsavel_legal).click()
        // cy.wait(1000)
        // cy.get(this.elementos.nome_responsavel_legal).clear()
        // cy.get(this.elementos.cpf_ivalido).contains("CPF Inválido")
        // cy.wait(1000)
        // cy.get(this.elementos.cpf_responsavel_legal).clear()
        // cy.wait(1000)
        // cy.get(this.elementos.campo_obrigatorio).contains("Campo obrigatório.")
        // cy.wait(1000)
    }

}

