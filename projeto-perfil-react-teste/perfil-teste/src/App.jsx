import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from './Perfil.jsx'


function App() {

  const url = "https://img.freepik.com/fotos-premium/uma-raposa-fofinha-enrolada-pacificamente-na-neve-branca-suave-durante-um-dia-de-inverno-tranquilo-em-uma-floresta-serena_607202-51234.jpg?semt=ais_hybrid&w=740&q=80"
 return <div>
  <Perfil nome="Geovana" idade={24} profissao ="Estudante de TI"
    foto= {url}
    objetivo="Conseguir experiência na Empresa Y" 
    skills = "Fullstack Dev | Java | C# | Go | Pentester | Dados"
  />
 </div>
}

export default App
