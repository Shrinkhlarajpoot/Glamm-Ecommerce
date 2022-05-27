const debounce = (fun,delay=400) => {
   let timerId;
    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fun(...args);
      },delay);
    };
  };
  export { debounce };

 