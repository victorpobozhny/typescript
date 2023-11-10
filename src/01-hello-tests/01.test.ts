import {splitting, sum} from './01'
import {multiply} from './01'

let a: number;
let b: number;
let c: number

beforeEach(() => {
        a = 1;
        b = 2;
        c = 3
    }
)


test('result for sum should be correct', () => {

    //data


    // action
    const result1 = sum(a, b)
    const result2 = sum(b, c)
    const result3 = sum(c, c)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
    expect(result3).toBe(6)
})
test('should be correct result for multiply', () => {
    //data


    //result
    const result1 = multiply(c, c)
    const result2 = multiply(a, c)
    const result3 = multiply(c, b)

    //action
    expect(result3).toBe(6)
    expect(result2).toBe(3)
    expect(result1).toBe(9)
})

test('splitting should be correct', () => {
        //data
        const s1 = "Hello my friend how are you"
        const s2 = "Hi everyone glad to see all of you"

        //action
        const result1 = splitting(s1)
        const result2 = splitting(s2)
        //expect result
        expect(result1).toStrictEqual(["Hello", "my", "friend", "how", "are", "you"])
        expect(result2).toStrictEqual(['Hi', 'everyone', 'glad', 'to', 'see', 'all', 'of', 'you'])
    }
)