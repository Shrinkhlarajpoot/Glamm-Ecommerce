import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "cosmetics",
    img:"assets/Categories/catmakeup.jpg",
    name:"Cosmetics"
},
  {
    _id: uuid(),
    categoryName: "skincare",
    img:"assets/Categories/catskin.jpg",
    name:"SkinCare"
  },
  {
    _id: uuid(),
    categoryName: "babycare",
    img:"assets/Categories/catbaby.jpg",
    name:"BabyCare"
   },
  {
    _id:uuid(),
    categoryName:"perfumes",
    img:"assets/Categories/catperfume.jpg",
    name:"Perfumes"
  },
];
