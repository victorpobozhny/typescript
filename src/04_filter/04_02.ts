import {CityType} from "../02-object/02_02";
export function changeStreetNames (city: CityType, newStreetName: string) {
   city.houses.map(el=>el.address.street.title=newStreetName)
}