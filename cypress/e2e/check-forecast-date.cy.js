import {MainPage} from "../app/main.page";
import {cityName} from "../fixtures/data";

const mainPage = new MainPage();

describe('Synoptic Weather Forecast Test', () => {
    beforeEach(() => {
        mainPage.goToMainPage();
        mainPage.checkForecastRequest();
        mainPage.checkActionChangeDay();
        mainPage.searchCity(cityName.Kyiv);
        mainPage.clickCity(cityName.Kyiv);
        mainPage.checkForecastRequestStatus(200);
    });

    it('Check forecast for 7 days in Kyiv', () => {
        mainPage.checkElementDaySevenDays();
    });

    it('Check forecast for 10 days in Kyiv', () => {
        mainPage.checkElementDayTenDays();
    });
});
