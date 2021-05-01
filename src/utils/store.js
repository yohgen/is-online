import { useState, createContext } from 'react';

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const store = {
    flipCard: [isFlipped, setIsFlipped],
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
