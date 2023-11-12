import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";
function AppProvider({ children }) {
 
  return (
    <AppContext.Provider value="hello" >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
