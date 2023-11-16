import {ages, courses} from "./04";

test('age should be more than 90', () => {
    let oldAges = ages.filter(age => age > 90)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})


test('courses cheaper than 160', () => {
    let cheapCourses = courses.filter(c=>c.price<160)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
})

test('get only completed tasks', () => {
    const tasks = [
        {title: 'bread', price: 100, isDone: true},
        {title: 'milk', price: 10, isDone: true},
        {title: 'cheese', price: 170, isDone: true},
        {title: 'potato', price: 200, isDone: false},
        {title: 'sugar', price: 400, isDone: false},
    ]

    let completedTasks = tasks.filter(t=>t.isDone)

    expect(completedTasks.length).toBe(3)
    expect(completedTasks[0].title).toBe('bread')
})
test('get only uncompleted tasks', () => {
    const tasks = [
        {title: 'bread', price: 100, isDone: true},
        {title: 'milk', price: 10, isDone: true},
        {title: 'cheese', price: 170, isDone: true},
        {title: 'potato', price: 200, isDone: false},
        {title: 'sugar', price: 400, isDone: false},
    ]

    let completedTasks = tasks.filter(t=>!t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('potato')
})