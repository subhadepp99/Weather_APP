import  './Forecast.css';
import React,{useEffect , useState} from 'react';
import axios from 'axios';
import Weather_logo from './Temp_svg_logo/Weather_logo';

const API_KEY='8e9305559a7e405eac02592862afe99b';




function Forecast(props) {

const [state,setState]=useState([]);
//const [error,setError]=useState(false);

   useEffect(() => {
       var Api_path='';
       if(props.values.city=='')
       {
Api_path='https://api.weatherbit.io/v2.0/forecast/daily?lat='+props.values.lat+'&lon='+props.values.long+'&key='+API_KEY;
       }
       else{
        Api_path= 'https://api.weatherbit.io/v2.0/forecast/daily?city='+props.values.city+'&country='+props.values.country+'&key='+API_KEY;
       }
    axios.get(Api_path)
    .then(res=>{
        setState(res.data.data);
        console.log(state);
        //setError(false);
    })
    .catch(err=>console.log(err));
   // setError(true);
    
  }, [props]);


   

        return(
            
<div class="container">
<div class="rows" id="row_head"> 
    {state==[] || state==undefined? <div className="error">There was a problem loading the forecast data</div>:
//   {
//    error ? <div className="error">There was a problem loading the forecast data</div>:
 state.map(obj=>{
         return  <div className="card"> {obj.valid_date}<Weather_logo weather={obj.weather.icon}/>{obj.weather.description}  <br/>   Temp: {obj.temp}°C Precipitation:{obj.precip}</div>
  })
  }
  </div>
</div>

            
        )
    }




export default Forecast;


