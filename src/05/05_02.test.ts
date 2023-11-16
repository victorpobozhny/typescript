import {CityType} from "../02-object/02_02";
import {createMessages, getStreetTitlesOfGovernmentsBuildings, getStreetTitlesOfHouses} from "./05_02";

let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White str"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy str"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: "Hogwarts str"
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central str"
                    }
                }
            }, {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Park str"
                    }
                }

            }
        ],
        citizensNumber: 1000000
    }
})

test ('list of streets titles of governments buildings', ()=> {
    let streetNames = getStreetTitlesOfGovernmentsBuildings (
        city.governmentBuildings
    )
    expect(streetNames.length).toBe(2)
    expect(streetNames[0]).toBe("Central str")
    expect(streetNames[1]).toBe('South Park str')

})
test ('list of streets titles of houses', ()=> {
    let streetNames = getStreetTitlesOfHouses (
        city.houses
    )
    expect(streetNames.length).toBe(3)
    expect(streetNames[0]).toBe("White str")
    expect(streetNames[1]).toBe('Happy str')
    expect(streetNames[2]).toBe('Hogwarts str')

})


test ('create greeting messages for streets', ()=> {
    let messages = createMessages(city.houses)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello people from White str')
    expect(messages[1]).toBe('Hello people from Happy str')
    expect(messages[2]).toBe('Hello people from Hogwarts str')



})