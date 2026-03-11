import { useParams } from "react-router-dom";

function Home() {

        const { nome } = useParams();

  return (
    <div>
      <h1>Bem-vindo, {nome}!</h1>
      <p>Esta é a página do perfil de {nome}.</p>
    </div>
  );
}

export default Home;