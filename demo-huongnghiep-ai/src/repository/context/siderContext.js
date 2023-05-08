import { createContext, useCallback, useState } from 'react';

const DEFAULT_OPEN_KEY = ["top"];
const DEFAULT_SELECTED_KEY = ["1"];



export const SiderContext = createContext( {
  openKey: DEFAULT_OPEN_KEY,
  updateOpenKey: () => {},
  selectedKey: DEFAULT_SELECTED_KEY,
  updateSelectedKey: () => {}
});

export function useSiderContext() {
  const [openKey, setOpenKey] = useState(DEFAULT_OPEN_KEY);
  const [selectedKey, setSelectedKey] = useState(DEFAULT_SELECTED_KEY);
  const updateOpenKey = useCallback((data) => {
    setOpenKey(data);
  }, []);

  const updateSelectedKey = useCallback((data) => {
    setSelectedKey(data);
  }, []);

  return {
    openKey,
    updateOpenKey,
    selectedKey,
    updateSelectedKey,
  };
}
