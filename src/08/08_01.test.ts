import {usersObj} from "./08_01";

export type UsersType = {
    [key: string]: { id: number, name: string }
}
export let users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '323232': {id: 323232, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '323232': {id: 323232, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})
test('should select corresponding users from obj', () => {
    expect(usersObj['0']).toBe('Dimych');
    expect(usersObj[1]).toBe('Natasha');
})
test('should update corresponding user', () => {

    users[1].name = 'Ekaterina'
    users[1212].id = 121212
    expect(users[1].name).toBe('Ekaterina');
    expect(users[1212].id).toBe(121212);

})
test('should delete user', () => {

    delete users[1]
    expect(users[1]).toBe(undefined)

})