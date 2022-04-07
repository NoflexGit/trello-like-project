import {useCallback, useState} from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const handleOpen = useCallback(() => {
    if(!isOpen) {
      setIsOpen(true)
    }
  }, [isOpen])
  
  const handleClose = useCallback(() => {
    if(isOpen) {
      setIsOpen(false)
    }
  }, [isOpen])
  
  return {isOpen, handleOpen, handleClose} as const;
};

export default  useModal;
