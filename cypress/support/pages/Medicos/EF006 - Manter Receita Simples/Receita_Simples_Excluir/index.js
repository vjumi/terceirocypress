//ações de interação com a página
const el = require ('./elements').ELEMENTS
class ReceitaSimplesExcluir{

    ReceitaSimplesExcluir(){

        cy.get(el.botaoExcluir).click({force:true})
        cy.get(el.botaoSimMensagemConfirmacao).click({force:true})
        cy.get(el.mensagemConfirmacao).contains('Exclusão realizada com sucesso!')


    }
    



}

export default new ReceitaSimplesExcluir ();