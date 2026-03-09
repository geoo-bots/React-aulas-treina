import {useState} from "react"

function Contador(){

    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count+1)
    }

    const decrement = ()=>{
        setCount(count-1)
    }

    return <div>
        <p>Numero Atual {count}</p>
        <button onClick={increment}>Acrescimo</button>
        <button onClick={decrement}>Decrescimo</button>
    </div>
}

export default Contador