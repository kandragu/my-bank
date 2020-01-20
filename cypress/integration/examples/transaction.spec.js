describe("Transaction report", () => {
  beforeEach(() => {
    cy.visit("/report");
  });

  it("Account", () => {
    cy.get(".sc-AykKF > :nth-child(1)").contains("Account");
  });

  it("Currency", () => {
    cy.get(".sc-AykKF > :nth-child(2)").contains("Currency");
  });

  it("Action", () => {
    cy.get(".sc-AykKF > :nth-child(3)").contains("Action");
  });

  it("Amount", () => {
    cy.get(".sc-AykKF > :nth-child(4)").contains("Amount");
  });
});
