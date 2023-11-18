import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";
import home from './../src/assets/icons/home.png'
import cart from './../src/assets/icons/cart.png'
import perc from './../src/assets/icons/perc.png'
import main from './../src/assets/shoes/main.png'
import likes from './../src/assets/icons/likes.png'
import profile from './../src/assets/icons/profile.png'
import noti from './../src/assets/icons/noti.svg'
import settings from './../src/assets/icons/settings.png'
import order from './../src/assets/icons/order.png'
import menu from './../src/assets/icons/menu.png'
import heart from './../src/assets/icons/heart.png'
import love from './../src/assets/icons/love.png'
import bell from './../src/assets/icons/bell.png'
import news from './../src/assets/icons/new.png'
import spark from './../src/assets/icons/spark.png'
import heart2 from './../src/assets/icons/heart2.png'
import bag2 from './../src/assets/icons/bag2.svg'
import sliders from './../src/assets/icons/sliders.png'
import search from './../src/assets/icons/search.png'
import ellipse from './../src/assets/icons/ellipse.png'
import jordan from './../src/assets/shoes/zoom.png'
import jordan2 from './../src/assets/shoes/jordan.png'
import max from './../src/assets/shoes/max.png'
import nikes from './../src/assets/shoes/nikes.png'
import black from './../src/assets/shoes/black.png'
import cipo from './../src/assets/shoes/cipo.png'
import nike from './../src/assets/shoes/nike.png'
import shoe1 from './../src/assets/shoes/shoe1.png'
import air from './../src/assets/shoes/air.png'
function AppProvider({ children }) {
  const outdoor = [{
    name:'Nike Jordan',
    liked:false,
    img:max,
    price:'$302.00',

 },{
    name:'Nike Air Max',
    liked:true,
    img:jordan,
    price:'$752.00',

 }]
 const all = [{
    name:'Nike Pro',
    liked:false,
    img:jordan,
    price:'$202.00',

 },{
    name:'Nike Air Max',
    liked:false,
    img:jordan2,
    price:'$782.00',

 }]
 const tennis = [{
    name:'Nike Zee',
    img:nike,
    liked:false,
    price:'$362.00',

 },{
    name:'Nike Air',
    img:cipo,
    liked:false,
    price:'$352.00',

 }]
  const [menus,setMenu] = useState(false)
 const [details,setDetails] = useState(outdoor);
 const [present,setPresent] = useState('home');
 const variant= {
  initial:{
    left:'-100vw',
  },
  animate:{
    left:0
  },
  exit:{
    left:'-100vw'
  }} 
  return (
    <AppContext.Provider value={{outdoor,all,tennis,ellipse,nikes,black,air,menus,setMenu,present,setPresent,bell,shoe1,cipo,love,nike,heart2,settings,order,news,main,perc,jordan,jordan2,details,setDetails,max,home,noti,sliders,search,bag2,spark,menu,likes,profile,cart}} >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
