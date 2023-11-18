import React from "react";
import { useGlobal } from "../context";
import Foot from "../components/foot";
import { motion } from "framer-motion";
import heart from '../assets/icons/heart.png'
function Favorites() {
  const { heart2,jordan, likes,main,max,nike,shoe1 } = useGlobal();
  const details = [{
    name:'Nike jordan',
    img:max,
    price:'58.7'
  }, {
    name:'Nike Air Max',
    img:jordan,
    price:'38.8'
  },{
    name:'Nike Club Max',
    img:main,
    price:'47.7'
  },{
    name:'Nike Air Max',
    img:shoe1,
    price:'57.6'
  }, ]
  const {variant} = useGlobal();
  return (
    <motion.div  variants={variant} initial="initial" animate="animate" exit="exit" className="  pt-6 pb-[10px]  w-screen h-auto bg-[#f5f3f3]">
      <section className=" flex justify-between items-center">
        <p className="opacity-0">Fav</p>
        <h1 className="font-[700] text-[23px] text-center ral ">Favorite</h1>
        <div className="h-[50px] w-[50px] bg-white mr-4 rounded-[50%] flex items-center justify-center  ">
          <img src={likes} alt="" />
        </div>
      </section>

      <section className="mt-4 grid pb-20 grid-cols-2 gap-6 px-6 ">
      {details.map((d,id) =>{
        return(
            <motion.section
            transition={{
              duration:0.3,
              ease:'easeOut'
          }}
          whileHover={{
              y:-10,
              scale:1.1
              
          }}
            key={id}
            layout
            className=" bg-white  relative mt-4 sh flex items-start flex-col py-3 px-3 rounded-[10px] justify-center w-[160px] "
          >
            <div className="absolute w-[25px] h-[25px] bg-red-100 flex items-center justify-center rounded-[50%]  top-3 left-3">
              <img src={heart2} alt="" />
            </div>
            <div>
              <img className=" mb-4 " src={d.img} alt="" />
            </div>
            <div>
              <h4 className="text-blue-600 font-[500] ">BEST SELLER</h4>
              <h3 className="font-[500] text-[17px] opacity-[0.8] ">
                {d.name}
              </h3>
              <p className="font-[500] mt-3 ">${d.price}</p>
            </div>
  
            <section className="flex gap-2 absolute bottom-4 right-2">
              <div className=" h-[15px] w-[15px] bg-red-500 rounded-[50%] "/>
              <div className=" h-[15px] w-[15px] bg-purple-500 rounded-[50%] "/>
            </section>
          </motion.section>
        )
      })}
      </section>

      <Foot />
    </motion.div>
  );
}

export default Favorites;
