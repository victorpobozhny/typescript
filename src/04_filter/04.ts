export let ages = [18, 20, 22, 1, 100, 90, 14]
export type AgesType = Array<number>
let predicate = (age: number) => age> 90    //>90

type CoursesType = Array<CourseType>
type CourseType = {
    title: string
    price: number
}
export const courses: CoursesType = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150},
]

const cheapPredicate = (course : CourseType) => course.price < 160