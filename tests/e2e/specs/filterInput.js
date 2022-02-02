describe("Filter Countries Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Filter country on option select", () => {
    cy.get("select").select("Africa").should("have.value", "africa");
    //cy.get(".card-container .card").should("to.have.length", 59);
  });
});
