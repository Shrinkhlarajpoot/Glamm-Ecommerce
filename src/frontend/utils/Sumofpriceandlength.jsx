const Sumoflength = (array) => {
  if(array.length>0){
 return array?.reduce((accum, initial) => (accum = accum + initial.qty), 0);
}};

const Sumofprice = (array) => {
  if(array.length>0){
  return array?.reduce(
    (accum, initial) => (accum = accum + initial.qty * initial.price),
    0
  );
}};

export { Sumoflength, Sumofprice };
