export type StudentType = {
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechnologiesType>
}
export type AddressType = {
    country: string,
    city: CityType
}
export type CityType = {
    title: string
    street: string
}
export type TechnologiesType = {
    id: number,
    title: string
}
export const student: StudentType = {
    name: 'Victor',
    age: 29,
    isActive: false,
    address: {
        country: 'Germany',
        city: {
            title: "Minsk",
            street: "Bakinskaya 20"
        }
    },
    technologies:
        [
            {
                id: 1,
                title: 'HTML CSS'
            },
            {
                id: 2,
                title: 'JS React'
            }
        ]
}
console.log(student.technologies[1].title)




