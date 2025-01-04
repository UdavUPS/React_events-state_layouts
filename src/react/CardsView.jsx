export function CardsView({products}) {
    let elem =[];

    
        
        products.forEach(e => {
            let k = Math.random();
            elem.push (
                <div className="pBox" key = {k}>
                    <div className="pBox__name">{e.name}</div>
                    <div className="pBox__color">{e.color}</div>
                    <img className="pBox__img" src={e.img} alt="" />
                    <div className="pBox__costBox">
                        <div className="pBox__costBox__price">${e.price}</div>
                        <div className="pBox__costBox__button">add to cart</div>
                    </div>
                </div>
            )
         
    });


    return (
        <div className= "contend">
        {elem}
        </div>
    )
    
}