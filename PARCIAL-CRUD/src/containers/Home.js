import ModalAdd from "../components/ModalAdd";
import Table from "../components/Table";
import TableEntradas from "../components/TablaEntradas";
import ModalAddExistencia from "../components/ModalAddExistencia";
import TableSalida from "../components/TablaSalida";
import ModalAddSalida from "../components/ModalAddSalida";
export default function Home() {


    return (
        <>
            <div className="bg-dark">
                <h1 className="text-white text-center">Inventario</h1><ModalAdd/>
                <Table/>
                <p></p>
                <h1 className="text-white text-center">Entradas</h1><ModalAddExistencia/>
                <TableEntradas/>
                <p></p>
                <h1 className="text-white text-center">Salidas</h1><ModalAddSalida/>
                <TableSalida/>
            </div>
        </>
    )
}