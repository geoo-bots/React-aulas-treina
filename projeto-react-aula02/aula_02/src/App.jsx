import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ItemList from './ItemList.jsx';
import Contador from './Contador.jsx';
import Form from './Form.jsx';

function App(){

const itens=[{id:1 , nome: "Maçã", preco: 2.0},
  {id: 2, nome: "uva", preco: 3.0},
  {id: 3, nome: "banana", preco: 1.0},
  {id: 4, nome: "melão", preco: 2.50}
];

  return <div>
    < Header titulo="Meu Header" subtitulo="Este é o header do meu projeto."/>
    <ItemList itens={itens}/>
    <Footer tituloFooter="Aqui está o footer"/>
    <Contador/>
    <Form/>
  </div>

}

export default App