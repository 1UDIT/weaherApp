import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { CityName } from '../Redux/Reducer';
import { Temp } from "../Redux/TempReducer";
import TempDisplay from "./TempDisplay";

const Home = () => {
    const [statename, setStateName] = useState('Delhi');
    const [Name, setName] = useState('');
    const [weatherData, setWeatherdata] = useState();
    const [humidity, setHumidity] = useState();
    const [Cloudy, setCloudy] = useState();
    const [wind, setwind] = useState();  

    const [stateData, setStateData] = useState(
    );
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${statename}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
            ).then(response => {
                setWeatherdata([response.data.main]);
                setHumidity([response.data.main.humidity]);
                setCloudy([...response.data.weather]);
                setwind([response.data.wind]); 
            }).catch(e => {
                console.log(e);
            })
        }
        setStateData([{ city: "Delhi" },
        { city: "Mumbai" },
        { city: "kolkata" },
        { city: "New York" },
        ])
        fetchData();
    }, [statename])

    const search = (e) => {
        if (e.key === "Enter") {
            console.log(Name)
            setStateName(Name);
            dispatch(CityName(Name));
        }


    }

    const leftClick = (e) => {
        if (e.type === "click") {
            setStateName(Name);
            dispatch(CityName(Name));

        }
    }

    const selectCity = (city) => {
        console.log("City", city);
        setStateName(city);
        dispatch(CityName(city));
    }
 
    return (
        <div className="container" 
        // style={{
        //     backgroundImage: `url("../src/img/512.jpg")`,
        //     height: "100%",
        // }}
        >
            <TempDisplay />
            <div className="formContainer">
                <div className="Content">
                    <div className="formDiv">
                        <div className="inputSearch" >
                            <input type="search" className="inputType" onChange={(e) => setName(e.target.value)} onKeyDown={(e) => search(e)} value={Name} />
                        </div>
                        <div className="SubmitDiv">
                            <button type="submit" onClick={(e) => leftClick(e)} className="btnSubmit"><AiOutlineSearch style={{ color: "white", fontSize: "20px" }} /></button>
                        </div>
                    </div>
                    {weatherData?.map((keyword) => {
                        dispatch(Temp(keyword.temp));
                    })}
                    <div className="selectOption">
                        <div className="optionCity" > {
                            stateData?.map((val, index) => {
                                return (

                                    <div className="styleCity" key={index} onClick={() => selectCity(val.city)}>{val.city}</div>

                                )
                            })
                        } </div>
                    </div>
                    <hr />
                    <div className="Weather_Detail">
                        <p>Weather Detail</p>
                        <div style={{ width: "100%", height: "20%" }}>
                            <div style={{ width: "25%", float: "left", textAlign: "left", paddingLeft: "50px" }}>Weather</div>
                            <div style={{ width: "55%", float: "left", textAlign: "right" }}>
                                {
                                    Cloudy?.map((val, index) => {
                                        return (
                                            <div key={index}>{val.main}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "20%" }}>
                            <div style={{ width: "25%", float: "left", textAlign: "left", paddingLeft: "50px" }}>Humidity</div>
                            <div style={{ width: "55%", float: "left", textAlign: "right" }}> {humidity}%</div>
                        </div>
                        <div style={{ width: "100%", height: "20%" }}>
                            <div style={{ width: "25%", float: "left", textAlign: "left", paddingLeft: "50px" }}>Wind</div>
                            <div style={{ width: "55%", float: "left", textAlign: "right" }}>
                                {
                                    wind?.map((val, index) => {
                                        return (
                                            <div key={index}>{val.speed} km/h</div>
                                        )
                                    })
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}
export default Home;