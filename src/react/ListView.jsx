export function ListView({products}) {
    let elem =[];


    
        products.forEach(e => {
            elem.push (
                <div className="pBox-M">
                    <img className="pBox__img-M" src={e.img} alt="" />
                    <div className="pBox__name-M">{e.name}</div>
                    <div className="pBox__color-M">{e.color}</div>
                    <div className="pBox__costBox__price-M">${e.price}</div>
                    <div className="pBox__costBox__button-M">add to cart</div>
                </div>
            )
        });


    return (
        <div className="contend-M">
        {elem}
        </div>
    )
    
}