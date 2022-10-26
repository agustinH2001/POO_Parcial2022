import { useContext, useEffect } from "react"
import DataTable from "react-data-table-component"
import context from "../context/Context"
import BtnDelete from "./BtnDelete"
import BtnUpdate from "./BtnUpdate"

export default function Table() {
    const {lstItems,getItems} = useContext(context)

    const lstProduct = lstItems.map(i => {return {...i,stock: i.existenciasIniciales + i.entradas - i. salidas}})

    const col =[{
        name:"Codigo Producto",
        selector: i => i.id,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name:"Descripcion",
        selector:i => i.descripcion,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name: "Existencias Iniciales",
        selector:i =>i.existenciasIniciales,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name: "Entradas",
        selector:i =>i.entradas,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name:"Salidas",
        selector:i=>i.salidas,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name:"Stock",
        selector:i=>i.stock,
        sortable:true,
        style: {
            background: "orange",
          }
    },{
        name:"Actualizar",
        selector:i => <BtnUpdate key={i.id} id={i.id} descripcion={i.descripcion} existenciasIniciales={i.existenciasIniciales} ></BtnUpdate>,
        style: {
            background: "orange",
          }
    },{
        name:"Borrar",
        selector:i=> <BtnDelete key={i.id} id={i.id} coleccion={"productos"} ></BtnDelete>,
        style: {
            background: "orange",
          }
    }]

    useEffect(() => {
      getItems()
      console.log("cargar")
    }, [])
    

    return(
        <>
            <DataTable  
                columns={col} 
                data={lstProduct}
                pagination>
            </DataTable>
        </>

    )
}