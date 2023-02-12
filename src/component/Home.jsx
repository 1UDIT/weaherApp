import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { CityName } from '../Redux/Reducer';
import { Temp } from "../Redux/TempReducer";

const Home = () => {
    const [statename, setStateName] = useState('Delhi');
    const [Name, setName] = useState('');
    const [weatherData, setWeatherdata] = useState();
    const apiKey = "f7a3cd954395f77b61cb5746170ead42";
    const [stateData, setStateData] = useState(
        [{ city: "Delhi" },
        { city: "Mumbai" },
        { city: "kolkata" },
        { city: "New York" },
        ]);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${statename}&units=metric&appid=${apiKey}`
    //         ).then(response => {
    //             setWeatherdata([response.data.main]);
    //             console.log(response.data.main);
    //         }).catch(e => {
    //             console.log(e);
    //         })
    //     }
    //     fetchData();
    // }, [statename])

    const search = (e) => {
        e.preventDefault();
        setStateName(Name);
        dispatch(CityName(statename));
    }
    const selectCity = (city) => {
        console.log("City", city);
        setStateName(city);
        dispatch(CityName(city));
    }

    // console.log(weatherData, statename, apiKey)
    return (
        <div className="container" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "img/ClearSky.jpg"})`,
            height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover"
        }}>
            <div className="formContainer">
                <div className="Content">
                    <div className="formDiv">
                        <form onSubmit={(e) => search(e)}>
                            <div className="inputSearch">
                                <input type="search" className="inputType" onChange={(e) => setName(e.target.value)} value = {Name}/>
                            </div>
                            <div className="SubmitDiv">
                                <button type="submit" className="btnSubmit"><AiOutlineSearch style={{ color: "white", fontSize: "20px" }} /></button>
                            </div>
                        </form>
                    </div>
                    {weatherData?.map((keyword) => {
                         dispatch(Temp(keyword.temp));                       
                    })}
                    <div className="selectOption">
                        <div className="optionCity" > {
                            stateData.map((val, index) => {
                                return (

                                    <div className="styleCity" key={index} onClick={() => selectCity(val.city)}>{val.city}</div>

                                )
                            })
                        } </div>
                    </div>
                    <hr />
                </div>
            </div>

        </div >
    )
}
export default Home;