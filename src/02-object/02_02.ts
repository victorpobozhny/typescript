export type CityType = {

    title: string,
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}
export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type StreetType = {
    title: string
}
const Minsk: CityType = {
    title: 'Minsk',
    houses: [],
    governmentBuildings: [],
    citizensNumber: 2000000
}
const Moscow: CityType = {
    title: 'Moscow',
    houses: [],
    governmentBuildings: [],
    citizensNumber: 10000000
}
const Kiev: CityType = {
    title: 'Kiev',
    houses: [],
    governmentBuildings: [],
    citizensNumber: 3000000
}

export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
