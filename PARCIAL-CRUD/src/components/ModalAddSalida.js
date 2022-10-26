import { useContext, useState } from "react"
import context from "../context/Context"


export default function ModalAddSalida() {

    const {addSalida,getSalidas,getItems} = useContext(context)

    const [text,setText] = useState("")
    const [input,setInput] = useState({
        "fecha":"",
        "codigoProducto":"",
        "descripcion":"",
        "cantidad":""
    })

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleAdd = async(e) =>{
        e.preventDefault()
        try {
            if (input.fecha === "" && input.codigoProducto=== "" && input.descripcion==="" && input.cantidad==="") throw "las casilla no pueden estar vacias"
            await addSalida(input.fecha,input.codigoProducto,input.descripcion,input.cantidad)
            getItems()
            getSalidas()
            setInput({
                "fecha":"",
                "codigoProducto":"",
                "descripcion":"",
                "cantidad":""
            })
            document.getElementById("formAddSalida").reset()
        } catch (error) {
            setText(error)
            console.log(error)
        }
    }
    
    return(
        <>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalAgregarSalida">
                Agregar Salidas
            </button>

            <div className="modal fade" id="modalAgregarSalida" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal Salida</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="formAddSalida" onSubmit={handleAdd}>
                                <input className="form-control my-2" name="fecha" onChange={handleChange} placeholder="Fecha (Ej. 12/10)"></input>
                                <input className="form-control my-2" name="codigoProducto" onChange={handleChange} placeholder="Código Producto"></input>
                                <input className="form-control my-2" name="descripcion" onChange={handleChange} placeholder="Descripción"></input>
                                <input className="form-control my-2" name="cantidad" onChange={handleChange} placeholder="Cantidad de salida"></input>
                                <button className="btn btn-secondary" onClick={handleAdd} type="submit">Agregar</button>
                            </form>
                        </div>
                        <div className="modal-footer text-center">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}