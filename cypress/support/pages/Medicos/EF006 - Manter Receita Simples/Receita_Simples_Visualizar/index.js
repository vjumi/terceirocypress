//ações de interação com a página
const el = require ('./elements').ELEMENTS
class ReceitaSimplesVisualizar{

    ReceitaSimplesVisualizar(){

        cy.get(el.cpf).type('Ian Kevin Gonçalves')
        cy.get(el.botaoVisualizar).click({force:true})



    }
    



}

export default new ReceitaSimplesVisualizar ();