import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';

const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreContext');
  }

  return context;
};

export default useStore;
