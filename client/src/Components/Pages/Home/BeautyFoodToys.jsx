import React from "react";
import ItemList from "./ItemList";

const BeutyFoodToysData = [
  {
    id: 1,
    img: "https://rukminim2.flixcart.com/image/200/200/kz5vwy80/helmet/o/4/k/-original-imagb8azfdthjhqr.jpeg?q=70",
    name: "Top Mirrorless Cameras",
    price: "Shop Now!",
    desc: "Canon, Sony, Fujifilm",
  },
  {
    id: 2,
    img: "https://rukminim2.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70",
    name: "Best of Trimmers",
    price: "Form ₹399",
    desc: "Realme, Mi & More",
  },
  {
    id: 3,
    img: "https://rukminim2.flixcart.com/image/200/200/kuh9yfk0/monitor/w/f/q/g24-20-full-hd-23-8-66cfgac1in-lenovo-original-imag7h74tqhfy6bm.jpeg?q=70",
    name: "Monitors",
    price: "Form ₹7949",
    desc: "Lenovo",
  },
  {
    id: 4,
    img: "https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70",
    name: "Premium PowerBanks",
    price: "Shop Now",
    desc: "Mi, Realme & More",
  },
  {
    id: 5,
    img: "https://rukminim2.flixcart.com/image/200/200/kybvo280/monitor/q/v/p/tuf-gaming-vg28uql1a-4k-ultra-hd-28-90lm0780-b01110-asus-original-imagahbtnupkgdfz.jpeg?q=70",
    name: "ASUS Monitors",
    price: "Form ₹14999",
    desc: "Top Rated",
  },
  {
    id: 6,
    img: "https://rukminim2.flixcart.com/image/200/200/kgpg5u80/printer/e/e/h/brother-dcp-b7535dw-original-imafwvkzwyjmqkfv.jpeg?q=70",
    name: "Printers",
    price: "Form ₹10190",
    desc: "Brother",
  },
  {
    id: 7,
    img: "https://rukminim2.flixcart.com/image/200/200/xif0q/monitor/9/x/a/-original-imagsatb6cbghctx.jpeg?q=70",
    name: "Monitors",
    price: "Form ₹6599",
    desc: "acer",
  },
  {
    id: 8,
    img: "https://rukminim2.flixcart.com/image/200/200/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xpytszpgx.jpeg?q=70",
    name: "Printers",
    price: "Form ₹2336",
    desc: "Canon",
  },
];

const BeautyFoodToys = () => {
  return (
    <ItemList data={BeutyFoodToysData} item_name="Beauty, Food, Toys & more" />
  );
};

export default BeautyFoodToys;
