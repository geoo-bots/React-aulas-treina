function Ola(){
        const nome = 'Professor Kennedy';

        document.body.style.backgroundColor= "rgba(36, 56, 145, 0.27)"
    return <div>
         <h1 style={{color: "rgb(0, 0, 0)"}}>Olá, <em>{nome}</em></h1>
        <h2 style={{color: "white"}}>Seu time ganhou? <em>Clique no botão correto</em> </h2>
        <button>Clique aqui se o Sport ganhar</button><br /><br />
        <button>Clique aqui se o Náutico ganhar</button>

    </div>
}

export default Ola