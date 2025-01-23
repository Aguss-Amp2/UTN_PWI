import filesystem from 'fs'
export const searchProductID = async(product_id) =>{
    const data = await filesystem.promises.readFile('./database/products.json', {encoding: 'utf8'})
    const products = JSON.parse(data)

    const products_found = products.find(product => Number(product.id) === Number(product_id))
    return products_found
}