import { Router } from "express";
import { crearfactura, eliminarfactura, listarid, modificarfactira, mostrarfactura } from "../controllers/controller.factura";

const routFactura = Router();

routFactura.get('/factura',mostrarfactura);
routFactura.get('/factura/:id', listarid);
routFactura.post('/factura', crearfactura);
routFactura.put('/factura', modificarfactira);
routFactura.delete('/factura', eliminarfactura);

export default routFactura;