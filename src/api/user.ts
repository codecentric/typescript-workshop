import {User} from './types.ts';

export const loadAllUsers = async (): Promise<User[]> => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")

    return users.json()
}

export const loadUser = async (id: number): Promise<User> => {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    return user.json()
}