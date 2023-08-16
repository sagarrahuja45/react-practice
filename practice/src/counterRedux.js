import React from "react";

import {useDispatch, useSelector} from 'react-redux'

const CounterRedux = ()=>{
    const count = useSelector((state)=> state.count)
    const dispatch = useDispatch();

    const increment = () =>{
        dispatch({type : 'INCREMENT'})
    }

    const decrement = () =>{
        dispatch({type : 'DECREMENT'})
    }


    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )

}

export default CounterRedux;

