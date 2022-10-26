import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Tabla = () => {
    const [libros, setLibros] = useState([])

    const getLibros = async () => {
        const snapshotLibros = await getDocs(collection(db, "libros"))
        const docLibros = []
        snapshotLibros.forEach(doc => {
            docLibros.push({ ...doc.data(), id: doc.id })
        })
        setLibros(docLibros)
    }

    useEffect(() => {
        getLibros()
    }, [])
    
    return (
        <div>
            <br></br>
            <center><p><button className="btn btn-primary">Volver al inicio</button></p></center>
            <center><h1>Haga click en el nombre de un libro para editarlo</h1></center>
            <br></br>
            <table className="table">
                <thead>
                    <tr>
                        <th className="bg-dark">Nombre</th>
                        <th className="bg-dark">Autor</th>
                        <th className="bg-dark">Edición</th>
                    </tr>
                    {libros.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td><button className="btn">{val.nombre}</button></td>
                                <td>{val.autor}</td>
                                <td>{val.edicion}</td>
                            </tr>
                        )
                    })
                    }
                </thead>
            </table>
        </div>
    )
}

export default Tabla