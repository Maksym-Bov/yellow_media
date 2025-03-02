import {Base} from "./base";
import {url} from "../fixtures/data";

export class MainPage extends Base {
    elementSearchField = 'input[type="search"]';
    elementChooseDays = '.uXujd8Ct';
    elementChildData = '.VJgadyZ9';
    elementListCity = 'menu > a > span';

    goToMainPage() {
        this.openPage('/')
    }

    searchCity(cityName) {
        this.typeText(this.elementSearchField, cityName);
    }

    clickCity(cityName) {
        this.clickContainsElement(this.elementListCity, cityName);
    }

    checkForecastRequest() {
        cy.intercept('POST', 'https://sinoptik.ua/api/location/recent/add').as('forecastRequest');
    }

    checkActionChangeDay() {
        cy.intercept('GET', 'https://sinoptik.ua/stats/visit/pohoda/**').as('actionChangeDay');
    }

    checkForecastRequestStatus(status) {
        cy.wait('@forecastRequest').its('response.statusCode').should('eq', status);
    }
    checkElementDaySevenDays() {
        this.checkElementDayBase({
            url: url,
            elementChooseDays: this.elementChooseDays,
            childElement: this.elementChildData,
            filterElement: 7
        });
    }

    checkElementDayTenDays() {
        this.checkElementDayBase({
            url: url,
            elementChooseDays: this.elementChooseDays,
            childElement: this.elementChildData,
            filterElement: 10
        });
    }
}