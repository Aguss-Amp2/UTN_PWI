import filesystem from 'fs'
import { searchProductID } from '../repository/products.repository.js'

export const getAllProductsController = async (req, res) =>{
    try{
        const data = await filesystem.promises.readFile('./database/products.json', {encoding: 'utf8'})
        const products = JSON.parse(data)
        res.send({
            message: 'Productos Obtenidos',
            ok: true,
            status: 200,
            payload: {
                products: [{products}]
            }
        })
    }
    catch(error){
        res.send({
            message: 'Productos NO Obtenidos',
            ok: false,
            status: 404,
        })
    }
    
}

export const productsIDController = async (req, res) =>{
    try{
        const { product_id } = req.params
        const id_product = await searchProductID(product_id)

        res.send({
            message: `Producto con id ${product_id} encontrado`,
            ok: true,
            status: 200,
            payload: {
                products: id_product
            }
        });
    }
    catch(error){
        res.send({
            message: `Producto con ID ${product_id} no encontrado`,
            ok: false,
            status: 404
        })
    }

}

export const createProductController = async(req, res) => {
    try{
        const newProduct = await productNew()
    }
    catch(error){

    }
}