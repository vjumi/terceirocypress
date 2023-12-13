/* eslint-disable no-undef */
/// <reference path="./index.js" />

Cypress.Commands.add('dataCy', (value) => cy.get(`[data-cy=${value}]`));

Cypress.Commands.add('id', (value) => cy.get(`[id=${value}]`));

Cypress.Commands.add('name', (elemento, value) => cy.get(`${elemento}[name="${value}"]`));

Cypress.Commands.add('class', (value) => cy.get(`[class="${value}"]`));

Cypress.Commands.add('href', (value) => cy.get(`a[href*="${value}"]`));

Cypress.Commands.add('dataCyType', (dataCy, type, value) => cy.dataCy(dataCy).clear().type(type).should('have.value', value !== undefined ? value : type));

Cypress.Commands.add('dataCySelect', (dataCy, select, value) => cy.dataCy(dataCy).select(select).should('have.value', value !== undefined ? value : select));

//***********************LOGIN****************************
/*Cypress.Commands.add('login', () => {Cypress.on('uncaught:exception', (err, runnable) => { return false; });

class Login{

    acessarLogin(){

        cy.visit('')
    }

    preencherLogin(){

        cy.get(el.usuario).type("30000")
        cy.get(el.uf).select("DF")
        cy.get(el.senha).type("o$9$(90o")
        cy.get(el.botaoLogin).click()
              

    }


}
           
});*/






 


  
 