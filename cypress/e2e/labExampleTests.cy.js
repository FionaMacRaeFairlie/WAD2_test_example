describe("visit homepage", () => {
  it("visits hard coded landing page successfully", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("template spec", () => {
  it("path to landing page route set up successfully", () => {
    cy.visit('/');
  });
});

describe("navigate to new guestbook entry form", () => {
      it("can click on guestbook link", () => {
       cy.visit("http://localhost:3000");
       cy.get("#guestbookLink").click();
  });
});

describe("write in the guestbook", () => {
  it('can add new items', () => {
    const newAuthor = 'Fred'
    const newSubject = 'test'
    const newEntry = 'test entry'

    cy.visit("http://localhost:3000/new");

    cy.get('#author').type(`${newAuthor}{enter}`)
    cy.get('#subject').type(`${newSubject}`)
    cy.get('#contents').type(`${newEntry}`)
   
  })

  it('can find form', () => {
    cy.visit("/new");
    cy.get('#form').submit()
  })
// })
  it('submit the form', () => {
    
    cy.visit("/new");
    
    cy.get('#author').type('Joe {enter}')
    cy.get('#subject').type(`Joe's entry`)

    cy.get('#submitButton').click()
    cy.get(".subject-line")
    .should('contain', "Joe's entry")
  })
});
