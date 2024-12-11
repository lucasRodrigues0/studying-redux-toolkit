import { useDispatch } from "react-redux";
import { decrement, incrementAsync, incrementByAmount } from "../state/counter/counterSlice";
import { AppDispatch } from "../state/store";
import { useState } from "react";

export const Counter = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [number, setNumber] = useState<number>(0);

    return (
        <div>
            <div>
                <button onClick={() => dispatch(incrementByAmount(number))}>Increment</button>
                <button onClick={() => dispatch(decrement(number))}>Decrement</button>
                <button onClick={() => dispatch(incrementAsync(number))}>Increment asynchronously</button>
                <input type="text" name="input" value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
            </div>
        </div>
    )
}