

function Perfil({foto, nome, idade, profissao, objetivo, skills}){
        // document.body.style.backgroundColor = "#3d0e0e";
        const linklinkedin = "https://www.linkedin.com/in/geovana-c/"
   return <div>
            <article style={{border: "1px solid", padding:12, borderRadius: 8}}>

    <h1 style={{color: "rgba(233, 233, 233, 0.99)", textDecoration: "underline"}}>Perfil de {nome}</h1>
    <img style={{borderRadius: 400, width: 600}} src={foto} alt={nome} />
    <h2 style={{backgroundColor: "rgba(133, 253, 97, 0.5)", padding: 20, borderRadius: 20}}> Nome: {nome}</h2>
    <p style={{backgroundColor: "rgba(133, 253, 97, 0.5)", borderRadius: 20, color: "#e7ecd5"}}><b>Idade: {idade}</b></p> 
    <p  style={{backgroundColor: "rgba(133, 253, 97, 0.5)", borderRadius: 20, color: "#e7ecd5"}}><b>Profissão: {profissao}</b></p>
    <p  style={{backgroundColor: "rgba(133, 253, 97, 0.5)", borderRadius: 20, color: "#e7ecd5"}}><b>Objetivo: {objetivo}</b></p>
    <p style={{backgroundColor: "rgba(133, 253, 97, 0.5)", borderRadius: 20, color: "#e7ecd5"}} ><b>Skills: {skills}</b></p>
    <h3 style={{backgroundColor: "rgba(158, 245, 123, 0.97)", borderRadius: 20}}><a href={linklinkedin}>Linkedin</a></h3>
        </article>
    
    </div>
}

export default Perfil