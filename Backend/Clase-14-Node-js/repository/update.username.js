import filesystem from 'fs'

export const update = async({email}) =>{
    const users = JSON.parse(await filesystem.promises.readFile('./database/users.json',{encoding: 'utf8'}))

    const userIndex = users.findIndex(user => user.email === email);

    
    await filesystem.promises.writeFile('./database/users.json', JSON.stringify(userIndex.username, null, 2), {encoding: 'utf8'})
    return users
}