import filesystem from 'fs'
import { deleteProduct, productNew, searchProductID } from '../repository/products.repository.js'
import { ServerError } from '../utils/errors.util.js'

export const getAllProductsController = async (req, res) =>{
    try{
        const data = await filesystem.promises.readFile('./database/products.json', {encoding: 'utf8'})
        const products = JSON.parse(data)
        return res.send({
            message: 'Productos Obtenidos',
            ok: true,
            status: 200,
            payload: {
                products: [{products}]
            }
        })
    }
    catch(error){
        return res.send({
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

        return res.send({
            message: `Producto con id ${product_id} encontrado`,
            ok: true,
            status: 200,
            payload: {
                products: id_product
            }
        })
    }
    catch(error){
        return res.send({
            message: `Producto con ID ${product_id} no encontrado`,
            ok: false,
            status: 404
        })
    }

}

export const createProductController = async(req, res) => {
    try{
        const {title, description, price, stock } = req.body
        if (!title) {
            throw new ServerError('Title is required', 400)
        }
        if (!description) {
            throw new ServerError('Description is required', 400)
        }
        if (!price) {
            throw new ServerError('Price is required', 400)
        }
        if (!stock) {
            throw new ServerError('Stock is required', 400)
        }
        const newProduct = await productNew(title, description, price, stock)
        return res.send({
            message: "Producto creado",
            ok: true,
            status: 201,
            payload: {
                product: { newProduct }
            }
        })
    }
    catch(error){
        return res.send({
            message: "Producto No creado",
            ok: false,
            status: 404
        })
    }
}

export const deleteProductController = async(req, res) => {
    try{
        const { product_id } = req.params
        const deleteProd = await deleteProduct(Number(product_id))
        console.log("Producto eliminado:", deleteProd)
        return res.send({
            message: `Producto con id ${product_id} eliminado`,
            ok: true,
            status: 200,
            payload: {
                product: { deleteProd }
            }
        })
    }
    catch(error){
        return res.send({
            message: `Producto con id no encontrado`,
            ok: false,
            status: 404
        })
    }
}