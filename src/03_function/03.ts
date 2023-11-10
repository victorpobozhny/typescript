import {student, StudentType} from "../02-object/02";
import {CityType} from "../02-object/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

export const makeActive = (student: StudentType) => {
    student.isActive = true
}

export function relocate(s: StudentType) {
    s.address.country = "Belarus"
}

export function changeBudget(city: CityType, change: number) {
    for (let i = 0; i < city.governmentBuildings.length; i++) {
        city.governmentBuildings[i].budget += change
    }
}

export function repairHouse(city: CityType) {
    for (let i = 0; i < city.governmentBuildings.length; i++) {
        city.houses[i].repaired = true
    }
}

export const toFireStaff = (city: CityType, num: number) => {
    for (let i = 0; i < city.governmentBuildings.length; i++) {
        city.governmentBuildings[i].staffCount -= num
    }
}
export const toHireStaff = (city: CityType, num: number) => {
    for (let i = 0; i < city.governmentBuildings.length; i++) {
        city.governmentBuildings[i].staffCount += num
    }
}

export function demolishHousesOnStreet(city: CityType, str: string) {
    city.houses  = city.houses.filter(el=> el.address.street.title!==str)
}
export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens!`
}