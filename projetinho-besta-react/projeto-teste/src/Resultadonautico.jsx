function Resultadonautico(){


        document.body.style.backgroundColor = "white";
    const url = 'https://static.vecteezy.com/system/resources/thumbnails/048/219/859/small/close-up-of-plain-house-mouse-aka-mus-musculus-standing-facing-front-isolated-on-white-or-transparent-background-png.png'
    return <div>
        <article style={{border: "4px solid black", padding:12, borderRadius: 8}}>
        <img src={url}></img>
        <h1 style={{color: "red"}}>Não foi dessa vez!</h1>
        <h1 style={{color:"red"}}>Que peninha!</h1>
        <h2 style={{color:"red"}}>Este é o rato de consolação.</h2>

        </article>
    </div>
}


export default Resultadonautico