//ações de interação com a página
const el = require ('./elements').ELEMENTS
class ReceitaSimplesPDF{

    ReceitaSimplesPDF(){

        cy.get(el.cpf).type('Ian Kevin Gonçalves')
        cy.get(el.botaoGerarPDF).click({force:true})



    }
    



}

export default new ReceitaSimplesPDF ();