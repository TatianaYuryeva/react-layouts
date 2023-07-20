export const ShopItem = ({ item }) => {

  return (
  <div className="item">
    <img src={item.img} alt="Product" className="item_img" />
    <h1 className="title item_title">{item.name}</h1>
    <h2 className="color item_color">{item.color}</h2>
    <div className="price item_price">${item.price}</div>
    <button className="button item_button">ADD TO CART</button>
  </div>
  )
}

export default ShopItem