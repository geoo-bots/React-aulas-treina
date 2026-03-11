import { BrowserRouter,Link, Routes, Route } from "react-router-dom"
import Usuarios from './componentes/Usuarios'
import Projetos from './componentes/Projetos'
import Tarefas from './componentes/Tarefas'
import Dashboard from './componentes/Dashboard'

function ProjetoReact(){
 return (
    <BrowserRouter>
    <nav>
        <Link to="/">Dashboard</Link> 
        <Link to="/usuarios/Kennedy">Usuarios</Link> 
        <Link to="/projetos">Projetos</Link> 
        <Link to="/tarefas">Tarefas</Link> 
    </nav>

        <Routes>
            <Route path="/" element={<Dashboard/>}/> 
            <Route path="/usuarios" element={<Usuarios/>}/> 
            <Route path="/projetos" element={<Projetos/>}/> 
            <Route path="/tarefas" element={<Tarefas/>}/>

        </Routes>

    </BrowserRouter>
 )
}

export default ProjetoReact