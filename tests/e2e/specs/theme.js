// https://docs.cypress.io/api/introduction/api.html

describe("Change Theme color", () => {
  it("change theme color on click", () => {
    // cy.visit("/");
    cy.get("button.theme-switch").click();
    cy.get("body").should("have.class", "dark");
    cy.reload();
    cy.get("body").should("have.class", "dark");
  });
});
