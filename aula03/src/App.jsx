import { BrowserRouter,Link, Routes, Route } from "react-router-dom"
import Home from './Home';


function App(){
 return (
    <BrowserRouter>
    <nav>
        <Link to="/">Dashboard</Link> 
        <Link to="/usuarios/Kennedy">Usuarios</Link> 
        <Link to="/usuarios/Joao">Projetos</Link> 
        <Link to="/usuarios/Maria">Tarefas</Link> 
    </nav>

        <Routes>
            <Route path="/usuarios/:nome" element={<Home/>}/> | {"  "}

        </Routes>

    </BrowserRouter>
 )
}

export default App