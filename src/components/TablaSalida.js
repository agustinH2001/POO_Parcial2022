import { useContext, useEffect } from "react"
import DataTable from "react-data-table-component"
import context from "../context/Context"
import BtnDelete from "./BtnDelete"

export default function TableSalida() {

    const {lstSalida,getSalidas} = useContext(context)


    const col =[{
        name:"Numero Factura",
        selector: i => i.id,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name:"Fecha",
        selector:i => i.fecha,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name: "Codigo Producto",
        selector:i =>i.codigoProducto,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name: "Descripcion",
        selector:i =>i.descripcion,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name:"Cantidad",
        selector:i=>i.cantidad,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name:"Borrar",
        selector:i=> <BtnDelete key={i.id} id={i.id} coleccion={"salida"}></BtnDelete>,
        style: {
            background: "orange",
          }
    }]

    useEffect(() => {
      getSalidas()
      console.log("cargar salidas")
    }, [])
    

    return(
        <>
            <DataTable 
                columns={col} 
                data={lstSalida}
                pagination>
            </DataTable>
        </>

    )
}