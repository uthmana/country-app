// https://docs.cypress.io/api/introduction/api.html

describe("About page Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/about/724");
  });

  it("Shows country detailed information", () => {
    cy.get(".back-link").contains("Back");
    cy.contains("h2", "Kingdom of Spain");
    cy.get(".country-value-button a").should("to.have.length", 5);

    cy.get(".country-value-button a").first().click();
    cy.wait(2000);

    cy.contains("h2", "Principality of Andorra");
    cy.get(".country-value-button a").should("to.have.length", 2);

  });
});
