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
        
    }
}

export const crearfactura = async (req, res) => {
    const Usuario = req.body.usuario;
    const Producto = req.body.producto;
    const Total = req.body.total;
    try {
        const respueta3 = await pool.query(`CALL sp_crear_factura('${Usuario}',' ${Producto}','${Total});'`);
        res.json(respueta3[0]);
    } catch (error) {
        
    }
}