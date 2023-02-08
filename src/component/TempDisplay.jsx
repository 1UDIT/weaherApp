import { useSelector } from "react-redux";
const TempDisplay = () => {
    const user = useSelector((state) => state.City.active);
    const Temp = useSelector((state) => state.Temp.active);
    return (
        <div className="TempDiv">
            <div className="TempDisplay">temp{Temp}</div>
            <div className="cityNameDisplay">CityName{user}</div>
        </div>
    )
}
export default TempDisplay;