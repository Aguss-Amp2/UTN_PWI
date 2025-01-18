import filesystem from 'fs'

export const listUsers = async() =>{
    const users = JSON.parse(await filesystem.promises.readFile('./database/users.json',{encoding: 'utf8'}))

    const filterUsers = users.map(user =>({
        username: user.username,
        email: user.email
    }))
    return filterUsers
}