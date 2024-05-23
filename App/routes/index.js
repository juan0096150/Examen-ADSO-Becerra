import { Router } from "express";
import routFactura from "./routes.factura.js";
import routesMain from "./routes.main.js";

const rout = Router();

rout.use("/", routesMain);
rout.use('/api',routFactura);

export default rout;