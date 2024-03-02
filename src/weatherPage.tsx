import { useState, useEffect } from 'react';
import getWeatherData from './weatherAPI';

function WeatherPage() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getWeatherData();
            setWeatherData(data);
        };

        fetchData();
    }, []);

    const getCurrentWeather = () => {
        if (!weatherData) return null;

        // Get the current time
        const currentTime = new Date();
        
        // Find the index of the closest time in the weather data array
        let closestIndex = 0;
        let closestDiff = Math.abs(currentTime - weatherData.time[0]);
        for (let i = 1; i < weatherData.time.length; i++) {
            const diff = Math.abs(currentTime - weatherData.time[i]);
            if (diff < closestDiff) {
                closestDiff = diff;
                closestIndex = i;
            }
        }

        // Return the temperature and time at the closest index
        return {
            temperature: weatherData.temperature2m[closestIndex],
            time: weatherData.time[closestIndex]
        };
    };
    function formatTime(dateTime) {
        return dateTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }

    const currentWeather = getCurrentWeather();

    return (
        <>
            <h1>Chaos Hacks</h1>
            <div>
            <div style={{width: 384, height: 87, textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', lineHeight: 60, wordWrap: 'break-word'}}>Weather of ( City )</div>

                {currentWeather && (
                    <div style={{ width: '184px', height: '183px', background: '#D9D9D9', borderRadius: '39px' }}>
                        <p>Current Time: {currentWeather.time.toISOString()}</p>
                        <p>Current Temperature: {Math.round(currentWeather.temperature)} °C</p>
                    </div>
                )}
               {weatherData && (
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        {weatherData.time.slice(0, 7).map((dateTime, index) => (
                            <div key={index} style={{ flex: '1', textAlign: 'center', color: 'black', fontSize: '10px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '60px', wordWrap: 'break-word', margin: '5px', backgroundColor: '#EDEBEB' }}>
                                <p>Time: {formatTime(dateTime)}</p>
                                <p>Temperature: {Math.round(weatherData.temperature2m[index])} °C</p>
                            </div>
                        ))}
                    </div>
                )}



            </div>
        </>
    );
}

export default WeatherPage;
