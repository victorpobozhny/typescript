export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooks = UserType & {
    books: Array<string>
}
export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export type CompaniesType = {
    [key: string] : CompanyType[]
}
type CompanyType = {
    id: number
    title: string
}

export function makeHairstyle(u: UserType, power: number) {
    return {...u, hair: u.hair / power}
}

export function moveUser(u: UserWithLaptopType, newAddress: string) {
    return {...u, address: {...u.address, city: newAddress}}
}

export function updateLaptop(u: UserWithLaptopType, newLaptop: string) {
    return {...u, laptop: {...u.laptop, title: newLaptop}}
}

export function readNewBooks(u: UserWithBooks & UserWithLaptopType, newBooks: string[]) {
    return {...u, books: [...u.books, ...newBooks]}
}

export function updateBooks(u: UserWithBooks & UserWithLaptopType, oldBook: string, newBook: string) {
    return {...u, books: u.books.map(el=>el==oldBook? newBook :el)}
}
export function removeBook(u: UserWithBooks & UserWithLaptopType, book: string) {
    return {...u, books: u.books.filter(el=>el!=book)}
}

export function addNewJob (u: UserWithLaptopType & UserWithBooks & WithCompaniesType, newJob: string) {
    return {...u, companies: [...u.companies, {id: u.companies.length+1, title: newJob}]}
}
export function updateCompanyName (u: UserWithLaptopType & UserWithBooks & WithCompaniesType,id: number, newName: string) {
    return {...u, companies: u.companies.map(el=>el.id==id? {...el, title: newName}:el)}
}

export function updateCompanyTitle (companies: CompaniesType, userName: string, newTitle: string, companyId: number) {
    return  {...companies, [userName]: companies[userName].map(el=> el.id==companyId? {...el, title: newTitle} : el)}
}