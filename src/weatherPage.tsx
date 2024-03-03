import { useState, useEffect } from 'react';
import getWeatherData from './weatherAPI';
import GravityComponent from './GravityComponent'; // Import the GravityComponent

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
    const formattedCurrentTime = currentWeather ? formatTime(currentWeather.time) : null;

    return (
        <>
            <h1 style={{width: 384, height: 87, background: '#ACE6F3', borderRadius: 43.50, margin: '70px 20px 50px 50px', textAlign: 'center',fontSize: '30px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '40px' }}>Weather of (City)</h1> {/* Moved this line to the top */}
            <div style={{ margin: '20px 20px' }}>
                {currentWeather && (
                    <div style={{ width: '184px', height: '183px', background: '#D9D9D9', borderRadius: '39px', margin: '20px 20px 50px 50px', fontSize: '30px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '60px', wordWrap: 'break-word', textAlign: 'center' }}>
                        <p>{formattedCurrentTime}</p>
                        <p>{Math.round(currentWeather.temperature)} °C</p>
                    </div>
                )}
                {weatherData && (
                    <div style={{ display: 'flex', flexDirection: 'row', margin: '70px 20px  auto' }}>
                        {weatherData.time.slice(0, 7).map((dateTime, index) => (
                            <div key={index} style={{ width: '150px', textAlign: 'center', color: 'black', fontSize: '30px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '60px', wordWrap: 'break-word', margin: '25px', backgroundColor: '#EDEBEB' }}>
                                <p>{formatTime(dateTime)}</p>
                                <p>
                                    {Math.round(weatherData.temperature2m[index])} °C
                                </p>
                              
                            </div>
                        ))}
                    </div>
                )}
                <GravityComponent />
            </div>
        </>
    );
}

export default WeatherPage;
