import React, { createContext, useContext } from "react";
import { useGlobalReducer } from './reducers';


const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useGlobalReducer({
    products: [],
    myId:'',
    today: new Date(),
    selectedPartner:'',
    selectedInventory:'',
    cart: [],
    cartOpen: false,
  });

  console.log(state);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };