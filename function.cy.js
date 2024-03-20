describe('template spec', () => {
    it('Salary test', () => {
        cy.visit('https://dev.profteam.su/login')

        //Входим как студент
        cy.get('.form-input--text').type('testerStudent')
        cy.get('.form-input--password').type('Password1')
        cy.get('.button__background-color-green')
            .click()
        cy.wait(3000)

        //Переходим на страницу с потребностями
        cy.visit('https://dev.profteam.su/needs')

        //Выбираем радио-кнопку
        //Положительный диапозон
        cy.get('div[data-v-735ad2e9].radio-list input.radio-component__input:first').check()
        cy.get('div[data-v-fcc35a58].salary-field__wrapper div.salary-field__form-field-wrapper:first input.form-input--number').type(4)
        cy.get('div[data-v-fcc35a58].salary-field__wrapper div.salary-field__form-field-wrapper:nth-of-type(2) input.form-input--number').type(23)
        cy.get('div[data-v-379f6542].custom-modal-mobile__buttons button').click()

        //Отрицательный
        cy.get('div[data-v-735ad2e9].radio-list input.radio-component__input:first').check()
        cy.get('div[data-v-fcc35a58].salary-field__wrapper div.salary-field__form-field-wrapper:first input.form-input--number').type(23)
        cy.get('div[data-v-fcc35a58].salary-field__wrapper div.salary-field__form-field-wrapper:nth-of-type(2) input.form-input--number').type(4)
        cy.get('div[data-v-379f6542].custom-modal-mobile__buttons button').click()

        //Нажимаем кнопку сброса фильтрации
        cy.get('div[data-v-379f6542].custom-modal-mobile__buttons button').click()
    });
    it('Search test', () => {
        cy.visit('https://dev.profteam.su/login')

        //Входим как студент
        cy.get('.form-input--text').type('testerStudent')
        cy.get('.form-input--password').type('Password1')
        cy.get('.button__background-color-green')
            .click()
        cy.wait(3000)

        //Переходим на страницу с потребностями
        cy.visit('https://dev.profteam.su/needs')

        //Совершаем поиск
        cy.get('div[data-v-69348679].search-input input.form-input--text').type('Проведение опроса')
        cy.get('div[data-v-69348679].search-input button')
            .click()

        //Нажимаем кнопку сброса фильтрации
        cy.get('div[data-v-379f6542].custom-modal-mobile__buttons button').click()
    });

    it('Choosing the type of employment test', () => {
        cy.visit('https://dev.profteam.su/login')

        //Входим как студент
        cy.get('.form-input--text').type('testerStudent')
        cy.get('.form-input--password').type('Password1')
        cy.get('.button__background-color-green')
            .click()
        cy.wait(3000)

        //Переходим на страницу с потребностями
        cy.visit('https://dev.profteam.su/needs')

        //Выбор типа занятости
        cy.get('div[data-v-3ef5d7d1].form-select div.form-select__selected').click()
        cy.wait(2000)
        cy.get('div[data-v-3ef5d7d1].form-select div.form-select__option:nth-of-type(2)').click()

        //Нажимаем кнопку сброса фильтрации
        cy.get('div[data-v-379f6542].custom-modal-mobile__buttons button').click()
    });

})









