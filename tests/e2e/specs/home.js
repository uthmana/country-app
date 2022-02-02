
describe("Home page Test", () => {
  beforeEach(() => {
    cy.request({
      url: "https://restcountries.com/v3.1/all",
      failOnStatusCode: false,
    }).as("countries");
    cy.get("@countries").should((response) => {
      expect(response.body).to.have.length(250);
      expect(response.body[0]).to.have.property("name");
      expect(response.body[0]).to.have.property("population");
      expect(response.body[0]).to.have.property("cca3");
    });
  });

  it("Successfully loads", () => {
    cy.visit("/");
    cy.contains("h1", "Where is the world?");
    cy.contains("button", "Light Mode").should("be.visible");
    cy.get("input[type=text]").should("be.empty").should("be.visible");
    cy.get("select").should("be.visible");
  });
});
