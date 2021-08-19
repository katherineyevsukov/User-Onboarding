describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password')
    const termsCheckbox = () => cy.get('input[name=terms]')
    const submitBtn = () => cy.get(`button[id='submit-button']`)


    it('sanity check to make sure tests work', () => {
        
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5) // strict ===
        expect({}).not.to.equal({})   // strict ===
        expect({}).to.eql({})         // not strict
      })

     it('submit button starts out disabled', () => {
         submitBtn().should('be.disabled')
     })

     it('can type a name in the name input', () => {
         nameInput()
         .should('have.value', '')
         .type('Kat')
         .should('have.value', 'Kat')
     })

     it('can type an email in the email input', () => {
        emailInput()
        .should('have.value', '')
        .type('kat@kat.com')
        .should('have.value', 'kat@kat.com')
     })

     it('can type password in the password input', () => {
         passwordInput()
             .should('have.value', '')
             .type('password')
             .should('have.value', 'password')
     })
      
     it('can check the terms & conditions box', () => {
         termsCheckbox()
         .should('not.be.checked')
         .check()
         .should('be.checked')
     })

     it('can submit the form', () => {
         nameInput().type('Kat')
         emailInput().type('kat@kat.com')
         passwordInput().type('password')
         cy.get('input[value=student]').check()
         cy.get('select').select('26-35')
         termsCheckbox().check()
         submitBtn().should('not.be.disabled')
         submitBtn().click()
         cy.contains('Kat')
         cy.contains('kat@kat.com')
         nameInput().should('have.value', '')
     })
    
     it('can validate if age input is empty', () => {
         cy.get('select').select('26-35').select('')
         cy.contains('You must select your age range')
     })

     it('can validate if email is empty', () => {
         emailInput().type('k').type('{backspace}')
         cy.contains('Email is required')
     })

})