function ItemCard({item}){

    return (
        <article style={{border: "1px solid", padding:12, borderRadius: 8}}>
        <h3 style={{margin: 0}}>{item.nome}</h3>
        <h4 style={{marginTop: 6}}>{item.preco}</h4>

        </article>
    );
}

export default ItemCard