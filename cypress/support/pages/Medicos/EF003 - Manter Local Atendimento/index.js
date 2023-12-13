//ações de interação com a página
const el = require ('./elements').ELEMENTS
class LocalAtendimento{

    acessarPgLocais(){

        cy.get(el.PgLocaisAtendimento).click()
        //cy.visit('/unidade-atendimento')
        //buscar o elemtento, clicar e encontrar a pagina
    }

    buscarNomeLocal(){
       cy.get(el.CampoLocal).type("Santa Marta")
        cy.get(el.campoPesquisa).contains("Santa Marta")
                   
        //buscar filtros locais. inserir txt "Santa Marta"
        //(boolean) se aparecer as informacoes de Santa Marta, valido
        //(boolean) se NAO aparecer informacoes de "HRSAM", valido

    }

    encontrarEstado(){
        cy.get(el.campoEstado).select("DF")
        cy.get(el.campoPesquisa).contains("DF")
        //buscar filtros. inserir selecao do estado "DF"
        //(boolean) se aparecer as informacoes de DF, valido
        //(boolean) se NAO aparecer informacoes de PE ou PB, valido
    }

    buscarEndereco(){
        cy.get(el.EnderecoLocal).type("qnj")
        cy.get(el.campoPesquisa).contains("QNJ 22")
        
        //buscar filtros. inserir texto "qnj" 
        //(boolean) se aparecer as informacoes de "QNJ 22" ou  "Santa Marta", valido
        
    }



    incluirLocal(){
        cy.get(el.BtnIncluirLocal).click()
        cy.get(el.NomedoLocal).type("Hran").type('{downarrow}{enter}')
        //cy.get(el.BoxLocal)
        cy.wait(1000)
        // cy.get(el.Pg).click()
        cy.get(el.CepLocal).type("70847140")
        cy.get(el.ComplementoLocal).type("Area Especial")
        cy.get(el.EmailLocal).type("hosp@hosp.com.br")
        cy.get(el.BtnSaveLocal).click()
        cy.get(el.campoPesquisa).contains("Hran")

        //buscar filtros incluir. inserir nome e informacoes "Hran"
        //(boolean) se aparecer as informacoes de Hran apos salvar, valido

    }
  

    AlterarLocal(){
        cy.get(el.BtnEditarLocal).click()
        cy.get(el.NovoNome).clear()
        cy.get(el.NovoNome).type('HRT- Hospital Regional de Taguatinga')
        cy.get(el.Pg).click()
        cy.get(el.cepAlterarLocal).clear()
        cy.get(el.cepAlterarLocal).type("71976720")
        cy.get(el.logradouroLocal).click()
        cy.get(el.BtnSaveAlterar).click()
        cy.get(el.campoPesquisa).contains("HRT- Hospital Regional de Taguatinga")

        //buscar filtros alterar. inserir nome e informacoes "HRT- Hospital Regional de Taguatinga"
        //(boolean) se aparecer as informacoes de HRT apos salvar, valido
    }


}

export default new LocalAtendimento ();