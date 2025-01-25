import filesystem from 'fs'
import { ServerError } from '../utils/errors.util.js'
import { getAddInincrementCounter } from './counter.repository.js'

export const searchProductID = async(product_id) =>{
    const products = JSON.parse(await filesystem.promises.readFile('./database/products.json', {encoding: 'utf8'}))

    const products_found = products.find(product => Number(product.id) === Number(product_id))
    return products_found
}

export const productNew = async (title, description, price, stock) =>{
    const productNew = JSON.parse(await filesystem.promises.readFile('./database/products.json', {encoding: 'utf8'}))

    productNew.push({id: await getAddInincrementCounter('products') , title, description, price, stock})
    await filesystem.promises.writeFile('./database/products.json', JSON.stringify(productNew), {encoding:'utf8'})
    return productNew
}

export const deleteProduct = async(product_id) =>{
    try{
        const products = JSON.parse(await filesystem.promises.readFile('./database/products.json', {encoding: 'utf8'}))
        const product_found = products.find((prod) => prod.id === product_id)
        if(!product_found){
            throw new ServerError('User not found', 404)
        }
        const updateProduct = products.filter((prod) => prod.id !== product_id)
    
        await filesystem.promises.writeFile('./database/products.json', JSON.stringify(updateProduct), {encoding:'utf8'})
        return updateProduct
    }
    catch(error){
        console.error("Error en deleteProduct:", error)
        throw error
    }
}