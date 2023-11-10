import {StudentType} from "../02-object/02";
import {addSkill, makeActive, relocate} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
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
})

test('skill text should be added to student ', () => {
    expect(student.technologies.length).toBe(2)
    addSkill(student, "Redux")
    expect(student.technologies.length).toBe(3)
    expect(student.technologies[2].title).toBe("Redux")
    expect(student.technologies[2].id).toBeDefined()
})

test('Student should be made active ', () => {
    expect(student.isActive).toBe(false)
    makeActive(student)
    expect(student.isActive).toBe(true)
})

test('Student should live in Belarus', () => {
    relocate(student)
    expect(student.address.country).toBe('Belarus')
})

