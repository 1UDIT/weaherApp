import { useSelector } from "react-redux";
 

const TempDisplay = () => {
    const user = useSelector((state) => state.City.active);
    const Temp = useSelector((state) => state.Temp.active);
     

    return (
        <div className="TempDiv">
            <div className="TempDisplay">{Temp}</div>
            <div className="cityNameDisplay">{user}</div>

        </div>
    )
}
export default TempDisplay;