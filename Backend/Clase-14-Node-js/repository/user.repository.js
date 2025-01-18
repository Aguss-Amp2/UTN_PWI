import filesystem from 'fs'

export const createUser = async ({username, email, password}) => {
    const users = JSON.parse(await filesystem.promises.readFile('./database/users.json',{encoding: 'utf8'}))
    users.push({username, email, password})
    await filesystem.promises.writeFile('./database/users.json', JSON.stringify(users), {encoding: 'utf8'})
    return users
}