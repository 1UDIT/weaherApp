import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [statename, setStateName] = useState('Delhi');
    const [weatherData, setWeatherdata] = useState();
    const apiKey = "f7a3cd954395f77b61cb5746170ead42";

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${statename}&appid=${apiKey}`
            ).then(response => {
                setWeatherdata([response.data.main]);
                console.log(response.data.main);
            }).catch(e => {
                console.log(e);
            })
        }

        fetchData();
    }, [statename])

    const search = (e) => {
        setStateName(e)
    }

    console.log(weatherData, statename,apiKey)
    return (
        <div className="container" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "img/ClearSky.jpg"})`,
            height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover"
        }}>
            <div className="formContainer">
                <div className="Content">
                    <input type="search" className="inputType" onChange={(e) => search(e.target.value)} />
                    {/* {weatherData?.map((keyword) => {
                        return (
                            <div>
                                <p>{keyword.temp}</p>
                            </div>
                        );
                    })} */}
                </div>
            </div>
        </div>
    )
}
export default Home;