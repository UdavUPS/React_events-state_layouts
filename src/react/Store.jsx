export function Store({products, status}) {
    let elem =[];
    let contendClassName;

    if (status === 'view_list') {
        contendClassName = "contend-M";
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
    
    }
    if (status === 'view_module') {
        contendClassName = "contend";
        products.forEach(e => {
            elem.push (
                <div className="pBox">
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
        
    }


    return (
        <div className={contendClassName}>
        {elem}
        </div>
    )
    
}