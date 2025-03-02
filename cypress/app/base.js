import {getDateList} from "../helper";

export class Base {
    openPage(url) {
        cy.visit(url);
    }
    clickContainsElement(element, text) {
        cy.contains(element, text).click();
    }

    typeText(element, text) {
        cy.get(element).type(text);
    }
    checkElementDayBase({
                            url: url,
                            elementChooseDays: elementChooseDays,
                            childElement: childElement,
                            filterElement: filterElement
                        }) {
        const dateList = getDateList(filterElement);

        const args = {
            dateList: dateList,
            elementChooseDays: elementChooseDays,
            childElement: childElement,
            filterElement: filterElement
        };
        cy.origin(url, {args}, ({dateList, elementChooseDays, childElement, filterElement}) => {
            const lastKey = Object.keys(dateList).pop();
            const lastObject = dateList[lastKey];
            if (filterElement === 10) {
                cy.contains('a', '10 днів').click();
                cy.wait('@actionChangeDay').its('response.statusCode').should('eq', 200);
            }
            for (const value of Object.values(dateList)) {
                cy.contains('.vV3dvPLZ', value.dayNumber).click();
                cy.wait('@actionChangeDay').its('response.statusCode').should('eq', 200);
                cy.contains(elementChooseDays, value.dayNumber).should('be.visible');
                cy.contains(elementChooseDays, value.nameMonth).should('be.visible');
                cy.contains(elementChooseDays, value.nameDay).should('be.visible');
                if (lastObject.dayNumber === value.dayNumber) return;
                cy.contains(childElement, value.nameDay).should('be.visible');
                cy.contains(childElement, value.dayNumber).should('be.visible');
                cy.contains(childElement, value.nameMonth).should('be.visible');
            }
        });
    }
}