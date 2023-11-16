import {GovernmentBuildingsType, HousesType} from "../02-object/02_02";

export function getStreetTitlesOfGovernmentsBuildings (buildings: Array<GovernmentBuildingsType>) {
   return buildings.map(el=>el.address.street.title)
}

export function getStreetTitlesOfHouses (houses: Array<HousesType>) {
    return houses.map(el=>el.address.street.title)
}

export function createMessages (houses: Array<HousesType>) {
    return houses.map(el=> `Hello people from ${el.address.street.title}`)
}