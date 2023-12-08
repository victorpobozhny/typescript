import {UserType} from "./09_01";

function increaseAge(u: UserType) {
    u.age++
}

test('reference type test', () => {


    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)
    expect(user.age).toBe(33)
    const superman = user
    increaseAge(superman)
    expect(user.age).toBe(34)
})

test('array test', () => {


    let users: UserType[] = [{
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    },
        {
            name: 'Katya',
            age: 31,
            address: {
                title: 'Minsk'
            }
        },
        {
            name: 'Peter',
            age: 37,
            address: {
                title: 'Minsk'
            }
        },
    ]

    let admins = users
    admins.push({name: 'John', age: 10, address: {title: 'Minsk'}})
    expect(users[users.length - 1]).toEqual({name: 'John', age: 10, address: {title: 'Minsk'}})
})
test('value type text test', () => {
    let usersCount = 100
    let adminsCount = usersCount

    adminsCount++


    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})


test('2 reference type test', () => {


    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let adr = user.address

    let user2: UserType = {
        name: 'Masha', age: 30, address: adr
    }

    user2.address.title = 'Moscow'


    expect(user.address.title).toBe('Moscow')
})


test('3 reference type test array', () => {

    const address = {
        title: 'Minsk'
    }

        let user: UserType = {
            name: 'Dimych',
            age: 32,
            address: address
        }
       let user2: UserType = {
            name: 'Masha',
            age: 30,
            address: address
        }

   const users = [user, user2, {name: 'Misha', age: 10, address: address}]
    const admins = [user, user2]

    admins[0].name = 'Dmitry'

   expect(users[0].name).toBe('Dmitry')
})

