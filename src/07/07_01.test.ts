import {ManType} from "./Seven";

let props: ManType
beforeEach(() => {
        props = {
            name: 'Dimych',
            age: 32,
            lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
            address: 'Nezalezhnasti'
        }
    }
)


test('test 7-1', () => {

const {age , lessons} = props

    expect(age).toBe(32)
    expect(lessons[0]).toStrictEqual({title: '1'})
})


test ('02', ()=> {

    const [l1, ...rest] = props.lessons



    // expect(l1.title).toBe('1')
    expect(l1.title).toBe('1')
    expect(rest.length).toBe(2)
})