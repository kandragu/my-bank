describe("Form Input", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Selected account", () => {
    cy.get(":nth-child(1) > div > select").should("have.value", "accA");
  });

  it("Selected currency", () => {
    cy.get(":nth-child(2) > div > select").should("have.value", "SGD");
  });

  it("Accepts input", () => {
    const typedText = 2;
    cy.get("input")
      .type(typedText)
      .should("have.value", "0" + typedText);
  });

  it("Accepts descriptions", () => {
    const typedText = "Cypress test notes...";
    cy.get("textarea")
      .clear()
      .type(typedText)
      .should("have.value", typedText);
  });

  it("Click submit", () => {
    const typedText = "Cypress test notes...";
    cy.get("textarea")
      .clear()
      .type(typedText);
    cy.get('[type="submit"]').click();
  });
});
