import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Store from "./Store";

import './crousel.css'


const crousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const store=data.map(item => (
    <Store img={item.img} name={item.name} city={item.city}/>
  ))
  return (
    <div className="divcard">
      <h1 className="title">Tawfeer Stores All Over Lebanon</h1>
      <Carousel responsive={responsive} className="cr">
       {store}
        
      </Carousel>
      
    </div>
  );
};

const data =[
    {
        id:1,
        name:'Masaken1 Store',
        img:'/assets/kk1.jpg',
        city:'Tyre'
        

    },
    {
        id:2,
        name:'Wadi Elzayni Store',
        img:'/assets/kk1.jpg',
        city:'Mount Lebanon'


    },
    {
        id:3,
        name:'Kfarrouman Store',
        img:'/assets/kk1.jpg',
        city:'Nabateih'


    },
    {
        id:4,
        name:'Sarafand Store',
        img:'/assets/kk1.jpg',
        city:'South'


    },
    {
        id:5,
        name:'Doweir Store',
        img:'/assets/kk1.jpg',
        city:'Nabatieh'


    },
    {
        id:6,
        name:'Abbasieh Store',
        img:'/assets/kk1.jpg',
        city:'South'


    },
    {
        id:7,
        name:'Ein ElDeleb Store',
        img:'/assets/kk1.jpg',
        city:'Saida'


    },
    {
        id:8,
        name:'Qana Store',
        img:'/assets/kk1.jpg',
        city:'South'


    },
    {
        id:9,
        name:'Majadel Store',
        img:'/assets/kk1.jpg',
        city:'South'


    },
    {
        id:10,
        name:'Ouzaii Store',
        img:'/assets/kk1.jpg',
        city:'Beirut'


    },
    {
        id:11,
        name:'Ghazieh Store',
        img:'/assets/kk1.jpg',
        city:'South'


    },
    {
        id:12,
        name:'Ebba Store',
        img:'/assets/kk1.jpg',
        city:'South'


    },
    {
        id:13,
        name:'Hasbayya Store',
        img:'/assets/kk1.jpg',
        city:'Nabatieh'


    },
    {
        id:14,
        name:'Maarake Store',
        img:'/assets/kk1.jpg',
        city:'South'


    },
    {
        id:15,
        name:'Sabra Store',
        img:'/assets/kk1.jpg',
        city:'Beirut'


    },
    {
        id:16,
        name:'Mreijeh Store',
        img:'/assets/kk1.jpg',
        city:'Beirut'


    },
    {
        id:17,
        name:'Aitaroun Store',
        img:'/assets/kk1.jpg',
        city:'South'


    },
    {
        id:18,
        name:'Rashayya Store',
        img:'/assets/kk1.jpg',
        city:'Nabatieh'


    },
    {
        id:29,
        name:'Tabarja Store',
        img:'/assets/kk1.jpg',
        city:'Kesserwan'


    },
    {
        id:20,
        name:'Souk Elgharb Store',
        img:'/assets/kk1.jpg',
        city:'Mount Lebanon'


    },
    {
        id:21,
        name:'Roauche Store',
        img:'/assets/kk1.jpg',
        
        city:'Beirut'


    },
    {
        id:22,
        name:'Hadat Store',
        img:'/assets/kk1.jpg',
        city:'Mount Lebanon'


    },
    {
        id:23,
        name:'Zouk Store',
        img:'/assets/kk1.jpg',
        city:'Kesserwan'


    },
    {
        id:24,
        name:'Baabda Store',
        img:'/assets/kk1.jpg',
        city:'Beirut'


    },
    {
        id:25,
        name:'Beit Meri Store',
        img:'/assets/kk1.jpg',
        city:'Beirut'


    },
    {
        id:26,
        name:'Bednayel Store',
        img:'/assets/kk1.jpg',
        city:'Bikaa'


    },
    {
        id:27,
        name:'Dekwaneh Store',
        img:'/assets/kk1.jpg',
        city:'Mount Lebanon'


    }
    
    
]

export default crousel;
