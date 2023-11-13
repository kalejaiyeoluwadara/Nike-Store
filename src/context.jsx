import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";
import home from './../src/assets/icons/home.png'
import cart from './../src/assets/icons/cart.png'
import perc from './../src/assets/icons/perc.png'
import main from './../src/assets/shoes/main.png'
import likes from './../src/assets/icons/likes.png'
import profile from './../src/assets/icons/profile.png'
import bell from './../src/assets/icons/bell.png'
import settings from './../src/assets/icons/settings.png'
import order from './../src/assets/icons/order.png'
import menu from './../src/assets/icons/menu.png'
import heart from './../src/assets/icons/heart.png'
import love from './../src/assets/icons/love.png'
import news from './../src/assets/icons/new.png'
import spark from './../src/assets/icons/spark.png'
import heart2 from './../src/assets/icons/heart2.png'
import bag2 from './../src/assets/icons/bag2.png'
import sliders from './../src/assets/icons/sliders.png'
import search from './../src/assets/icons/search.png'
import jordan from './../src/assets/shoes/zoom.png'
import max from './../src/assets/shoes/max.png'
import cipo from './../src/assets/shoes/cipo.png'
import nike from './../src/assets/shoes/nike.png'
import shoe1 from './../src/assets/shoes/shoe1.png'

function AppProvider({ children }) {
 
  return (
    <AppContext.Provider value={{shoe1,cipo,love,nike,heart2,settings,order,news,main,perc,jordan,max,home,bell,sliders,search,bag2,spark,menu,likes,profile,cart}} >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
