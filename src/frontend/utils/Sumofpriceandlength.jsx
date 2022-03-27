const Sumoflength = (array) => {
 return array.reduce((accum, initial) => (accum = accum + initial.qty), 0);
};

const Sumofprice = (array) => {
  return array.reduce(
    (accum, initial) => (accum = accum + initial.qty * initial.price),
    0
  );
};

export { Sumoflength, Sumofprice };
