import React, { useContext } from "react";

import { MyContext } from "./myContext";

const Counter = () => {
    const {count , setCount } = useContext(MyContext);


    const increment = () => {
        setCount(count+1);
    }

    const decrement = () =>{
        setCount(count-1);
    }
    return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      );

}

export default Counter;