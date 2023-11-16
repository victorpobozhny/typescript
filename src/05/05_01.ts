export type PeopleType = Array<ManType>

type ManType = {
    name: string
    age: number
}

const people: PeopleType = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 28},
    {name: 'Dmitry Sidorov', age: 21},
]

const dimychTransformator = (man: ManType) => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})


const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', lastName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    },
]

const devs3 = people.map(dimychTransformator)

export const greetings = people.map(el=> `Hello ${el.name.split(' ')[0]}! Glad to see you in it-incubator`)


