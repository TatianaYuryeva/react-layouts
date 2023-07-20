import { useState } from "react";

import { CardsView } from "./CardsView";
import { ListView } from "./ListView"
import { IconSwitch} from './IconSwitch'

export const Store = ({ products }) => {
  const [state, setState] = useState('view_module')

  const onSwitch = () => {
    setState(state === 'view_module' ? 'view_list' : 'view_module')
  }

  return (
  <div className="main-content">
    <IconSwitch icon={state} onSwitch={onSwitch} />
    {state === 'view_module' ? <CardsView cards={products} /> : <ListView items={products} />}
  </div>
  );
};

export default Store