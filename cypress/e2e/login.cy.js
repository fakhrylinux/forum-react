/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:5173/');
  });

  it('should display login page correctly', () => {
    // verify the elements that should be visible on the login page
    cy.get('input[placeholder="Enter Email"]').should('be.visible');
    cy.get('input[placeholder="Enter Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', ()=> {
    // click login button without filling email
    cy.get('button').contains(/^Login/).click();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);

    // verify window.alert to show message from API
    cy.on('window:alert',  (str)=> {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', ()=> {
    // fill email
    cy.get('input[placeholder="Enter Email"]').type('testuser@mail.com');

    // click login button without filling password
    cy.get('button').contains(/^Login/).click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);

    // verify window.alert to show message from API
    cy.on('window:alert',  (str)=> {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when username or password are wrong', ()=> {
    // fill email
    cy.get('input[placeholder="Enter Email"]').type('testuser@mail.com');

    // fill wrong password
    cy.get('input[placeholder="Enter Password"]').type('wrong_password');

    // click login button
    cy.get('button').contains(/^Login/).click();

    // verify window.alert to show message from API
    cy.on('window:alert',  (str)=> {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when username and password are correct', ()=> {
    // fill email
    cy.get('input[placeholder="Enter Email"]').type('fakhry@slacker.com');

    // fill password
    cy.get('input[placeholder="Enter Password"]').type('password');

    // click login button
    cy.get('button').contains(/^Login$/).click();

    // verify that element on the homepage is shown
    cy.get('a').contains(/^Temu Wicara$/).should('be.visible');
    cy.get('button#logout').should('be.visible');
  });
});
