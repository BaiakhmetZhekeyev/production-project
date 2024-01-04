import React from 'react';
import classes from './Counter.module.scss'
const Counter = () => {
    const [state, setState] = React.useState(0)
    return (
        <div className={classes.btn}>
            <h1>{state}</h1>
            <button onClick={()=>setState((prevState)=> prevState + 1)}>Increment</button>
        </div>
    );
};

export default Counter;