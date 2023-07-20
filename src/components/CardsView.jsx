import ShopCard from "./ShopCard";

export const CardsView = ({ cards }) => {
  
  const cardsList = []
  let card
  for (let i = 0; i < cards.length; i++) {
    card = <ShopCard card={cards[i]} />
    cardsList.push(card)
  }

  return (
    <div className="cards">{cardsList}</div>
  );
};

export default CardsView