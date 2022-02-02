

describe("Search Country Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Search country on input change", () => {
    cy.get("input[type=text]").focus();
    cy.get("input[type=text]").type("Kingdom");
    cy.wait(2000);
    cy.get("form .search-btn").click({force: true});
    cy.get(".card-container .card").should("to.have.length", 17);
  });
});
