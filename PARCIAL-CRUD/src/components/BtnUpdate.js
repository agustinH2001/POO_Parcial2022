import { useContext, useState } from "react"
import context from "../context/Context"

export default function BtnUpdate(props) {

    const { getItems, updateItem } = useContext(context)


    const [text, setText] = useState("")
    const [input, setInput] = useState({
        "descripcion": props.descripcion,
        "existenciasIniciales": props.existenciasIniciales

    })

    const handleChange = ({ target: { name, value } }) => setInput({ ...input, [name]: value })

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await updateItem(props.id, input.descripcion, input.existenciasIniciales)
            getItems()
        } catch (error) {
            setText(error)
            console.log(error)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={"#modalActualizarExistencia" + props.id}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
            </button>

            <div className="modal fade" id={"modalActualizarExistencia" + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal actualizar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdate}>
                                <input className="form-control my-2" name="descripcion" onChange={handleChange} defaultValue={props.descripcion}></input>
                                <input className="form-control my-2" name="existenciasIniciales" onChange={handleChange} defaultValue={props.existenciasIniciales}></input>
                                <button className="btn btn-secondary" onClick={handleUpdate} type="submit">actualizar</button>
                            </form>
                        </div>
                        <div className="modal-footer text center">
                            <h6>{text}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}