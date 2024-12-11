import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export const NumberDisplay = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    
    return (
        <>
            <h1>DISPLAYIG A NUMBER CHANGED BY ANOTHER COMPONENT</h1>
            <h2>{count}</h2>
        </>
    )
}