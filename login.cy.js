describe('ProfTeam', () => {
    it('login', () => {
        cy.visit('https://dev.profteam.su/login')

        // Негативный ввод логина
        cy.get('.form-input--text').type('TesterStudent');
        cy.get('.form-input--password').type('Password1');
        cy.get('.button__background-color-green').click();
        cy.get('[data-v-a144256a]').should("exist");

        // Негативный ввод пароля
        cy.get('.form-input--text').clear().type('testerStudent');
        cy.get('.form-input--password').clear().type('Password');
        cy.get('.button__background-color-green').click();
        cy.get('[data-v-a144256a]').should("exist");

        cy.get('.form-input--text').clear().type('testerEmployer');
        cy.get('.form-input--password').clear().type('Password1');
        cy.get('.button__background-color-green').click();
    });




    it('Пустые поля', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('.form-input--text').clear();
        cy.get('.form-input--password').clear().type('Password');
        cy.get('.button__background-color-green').should('be.disabled');

        // Позитивный ввод логина и пароля
        cy.get('.form-input--text').clear().type('testerEmployer');
        cy.get('.form-input--password').clear().type('Password1');
        cy.get('.button__background-color-green').click();

    });
    it('Эмодзи', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('.form-input--text').type('Tester🤡Student');
        cy.get('.form-input--password').type('Password1');
        cy.get('.button__background-color-green').click();
        cy.get('[data-v-a144256a]').should("exist");

        cy.get('.form-input--text').clear().type('testerStudent');
        cy.get('.form-input--password').clear().type('Password1🤡');
        cy.get('.button__background-color-green').click();
        cy.get('[data-v-a144256a]').should("exist");

        // Позитивный ввод логина и пароля
        cy.get('.form-input--text').clear().type('testerEmployer');
        cy.get('.form-input--password').clear().type('Password1');
        cy.get('.button__background-color-green').click();
    });
})