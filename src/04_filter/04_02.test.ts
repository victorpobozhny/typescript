import {CityType} from "../02-object/02_02";
import {changeBudget, createMessage, demolishHousesOnStreet, repairHouse, toFireStaff, toHireStaff} from "../03_function/03";
import {changeStreetNames} from "./04_02";

let city: CityType
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id: 2, buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id: 3, buildedAt: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: "Happy street"
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
                        title: "Central Str"
                    }
                }
            }, {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "Souths park str"
                    }
                }

            }
        ],
        citizensNumber: 1000000
    }
})

test('Should change street name for "Main street"', () => {
    changeStreetNames(city, "Main street")
    expect(city.houses[0].address.street.title).toBe('Main street')
})

