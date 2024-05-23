import pool from "../Config/db"


export const mostrarfactura = async (req,res) => {
    try {
        const respueta = await pool.query(`CALL sp_mostrar_factura();`);
        res.json(respueta[0]);
    } catch (error) {
        console.log('error');
    }
}

export const listarid = async (req,res) => {
    let id = req.params['id'];
    try {
        const respueta2 = await pool.query(`CALL sp_listar_id(${id});`);
        res.json(respueta2[0]);
    } catch (error) {
        console.log('error');
    }
}

export const crearfactura = async(req, res) => {
    let Usuario = req.body.usuario;
    let Producto = req.body.producto;
    let Total = req.body.total;
    try {
        const respueta3 = await pool.query(`CALL sp_crear_factura('${Usuario}',' ${Producto}',${Total});`);
        res.json({"mensaje":"creacion de usuario"});
    } catch (error) {
        console.log('error');
    }
}

export const modificarfactira = async (req, res) => {
    let id = req.body.id;
    let Usuario = req.body.usuario;
    let Producto = req.body.producto;
    let Total = req.body.total;
    try {
        const respueta3 = await pool.query(`CALL sp_modificar_factura('${id},'${Usuario}',' ${Producto}','${Total});'`);
        res.json(respueta3[0]);
    } catch (error) {
        console.log('error');
    }
}

export const eliminarfactura = async (req, res) => {
    let id = req.body.id;
    try {
        const respueta5 = await pool.query(`CALL sp_eliminar_factura(${id});`);
        res.json({"mensaje":"eliminacion de factura"});
    } catch (error) {
        console.log('error');
    }
}