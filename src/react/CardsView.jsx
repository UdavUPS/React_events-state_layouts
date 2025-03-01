export function CardsView({products}) {
   

    return (
        <div className= "contend">
        { products.map(e => {
            return (
                <div className="pBox" key = {Math.random()}>
                    <div className="pBox__name">{e.name}</div>
                    <div className="pBox__color">{e.color}</div>
                    <img className="pBox__img" src={e.img} alt="" />
                    <div className="pBox__costBox">
                        <div className="pBox__costBox__price">${e.price}</div>
                        <div className="pBox__costBox__button">add to cart</div>
                    </div>
                </div>
            )
        })}
        </div>
    )
    
}