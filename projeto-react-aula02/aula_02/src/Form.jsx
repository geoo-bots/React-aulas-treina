import {useState} from "react"

function Form(){
    const [nome, setNome] = useState("Kennedy");

    return (
        <form> <label>Preencha o seu nome: </label>
        <input type="text" value={nome} onChange={(r)=>setNome(r.target.value)}></input>
        <p>O nome atual é {nome}</p>
</form>
    )
    
}

export default Form