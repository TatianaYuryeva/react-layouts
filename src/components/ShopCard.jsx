export const ShopCard = ({ card }) => {

    return (
    <div className="card" style={{ backgroundImage: `url("${card.img}")`}}>
      <div className="product-info">
        <h1 className="title card_title">{card.name}</h1>
        <h2 className="color card_color">{card.color}</h2>
      </div>
        <div className="card_purchase-info">
          <div className="price card_price">${card.price}</div>
          <button className="button card_button">ADD TO CART</button>
        </div>
    </div>
    )
}

export default ShopCard