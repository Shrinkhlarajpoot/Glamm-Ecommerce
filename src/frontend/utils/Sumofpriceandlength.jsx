const Sumoflength = (array) => {
  console.log("heelo");
  return array.reduce((accum, initial) => (accum = accum + initial.qty), 0);
};

const Sumofprice = (array) =>{
  return array.reduce((accum, initial) => (accum = accum +(initial.qty * initial.price)), 0);
}


// const Sumofpricewithdiscount = (array) =>{
//   const totalprice = array.reduce((accum, initial) => (accum = accum + (initial.qty * initial.price)), 0);
//   return totalprice-(8/100)*totalprice
// }
export { Sumoflength ,Sumofprice};
