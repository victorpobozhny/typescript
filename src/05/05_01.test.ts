import {greetings, PeopleType} from "./05_01";

let people: PeopleType = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 28},
    {name: 'Dmitry Sidorov', age: 21},
]
 beforeEach(()=> {
     people= [
         {name: 'Andrew Ivanov', age: 33},
         {name: 'Alexander Petrov', age: 28},
         {name: 'Dmitry Sidorov', age: 21},
     ]
 })

test('should say hello to people', ()=> {
    expect(greetings.length).toBe(3)
        expect(greetings[0]).toBe('Hello Andrew! Glad to see you in it-incubator')
})