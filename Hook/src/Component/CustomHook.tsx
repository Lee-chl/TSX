import { UseToggle } from "../Hook/UseToggle";

export default function CustomHook(){
    const {value,toggle} = UseToggle();

    return(
        <>
            <p>{value ? "ON" : "OFF"}</p>
            <button onClick={toggle}>toggle</button>
        </>
    )
}