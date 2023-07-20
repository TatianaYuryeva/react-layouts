import ShopItem from "./ShopItem";

export const ListView = ({ items }) => {
  
  const itemsList = []
  let item
  for (let i = 0; i < items.length; i++) {
    item = <ShopItem item={items[i]} />
    itemsList.push(item)
  }

  return (
    <div className="items">{itemsList}</div>
  );
};

export default ListView