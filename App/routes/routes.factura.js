import { Router } from "express";
import { crearfactura, listarid, mostrarfactura } from "../controllers/controller.factura";

const routFactura = Router();

routFactura.get('/factura',mostrarfactura);
routFactura.get('/factura/:id', listarid);
routFactura.post('/factura', crearfactura);
routFactura.put('/factura', () =>{console.log('actulizar');});
routFactura.delete('/factura', () =>{console.log('eliminar');});

export default routFactura;