import React from 'react';
import './Weather_logo.css';


function Weather_logo(props){
    
    return <div> <img className="img" src={require('./weather_icons/'+props.weather+'.png').default}  alt=''/>  </div> 
}
export default Weather_logo;