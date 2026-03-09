import ItemCard from './ItemCard';

function ItemList({itens}){
    return <div>
        {itens.map((k)=> <ItemCard item={k}/>)}
    </div>
}

export default ItemList