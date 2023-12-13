import {
    addNewJob,
    makeHairstyle,
    moveUser,
    readNewBooks, removeBook,
    updateBooks, updateCompanyName,
    updateLaptop,
    UserType,
    UserWithBooks,
    UserWithLaptopType, WithCompaniesType
} from "./10";

test('reference type test', () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }
    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})


test('change address', () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }
    const movedUser: UserWithLaptopType = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)

    expect(user.address.city).toBe('Minsk')
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.address.house).toBe(movedUser.address.house)
})


test('update laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }
    const userUpdatedLaptop: UserWithLaptopType = updateLaptop(user, 'MacBook')

    expect(user.address).toBe(userUpdatedLaptop.address)
    expect(user.laptop.title).not.toBe(userUpdatedLaptop.laptop.title)
    expect(userUpdatedLaptop.laptop.title).toBe('MacBook')
})
test('add books', () => {

    let user: UserWithLaptopType & UserWithBooks = {
        name: "Dimych",
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['Shining', 'JS For Kids', 'Head First HTML/CSS']
    }
    const cleverUser = readNewBooks(user, ['Typescript', 'Redux'])
    expect(cleverUser.books.length).toBe(5)
    expect(user.books).not.toBe(cleverUser.books)
    expect(cleverUser.books.length).toBeGreaterThan(user.books.length)
    expect(user.laptop).toBe(cleverUser.laptop)
    expect(user.address).toBe(cleverUser.address)
})
test('update books', () => {

    let user: UserWithLaptopType & UserWithBooks = {
        name: "Dimych",
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['Shining', 'JS For Kids', 'Head First HTML/CSS']
    }
    const userWithUpdatedBooks = updateBooks(user, 'Shining', 'Shining by S.King')

    expect(user.books.length).toBe(userWithUpdatedBooks.books.length)
    expect(user.books[0]).toBe('Shining')
    expect(userWithUpdatedBooks.books[0]).toBe('Shining by S.King')
})
test('remove book', () => {

    let user: UserWithLaptopType & UserWithBooks = {
        name: "Dimych",
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['Shining', 'JS For Kids', 'Head First HTML/CSS']
    }
    const userWithRemovedBook = removeBook(user, 'Shining')
    expect(userWithRemovedBook.books.length).toBe(user.books.length-1)
    expect(userWithRemovedBook.books[0]).toBe('JS For Kids')
})
test('job', () => {

    let user: UserWithLaptopType & UserWithBooks & WithCompaniesType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['Shining', 'JS For Kids', 'Head First HTML/CSS'],
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-Incubator'}]
    }


    const userWithNewJob = addNewJob(user, 'AT&T')


    expect(userWithNewJob.companies.length).toBe(3)
    expect(user.companies.length).toBe(2)
    expect(userWithNewJob.companies[userWithNewJob.companies.length-1].title).toBe('AT&T')
    const userWithUpdatedNameOfCompanies = updateCompanyName(user, 1, 'NewEpam')
    expect(userWithUpdatedNameOfCompanies.companies.length).toBe(2)
    expect(userWithUpdatedNameOfCompanies.companies[0].title).toBe('NewEpam')
})