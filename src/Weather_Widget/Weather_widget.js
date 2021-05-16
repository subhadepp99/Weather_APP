import React,{Component} from 'react';
import axios from 'axios';
import Forecast from './Forecast_widget/Forecast';
import Weather_logo from './Forecast_widget/Temp_svg_logo/Weather_logo';
import './Weather_widget.css';
import Spinner from './Forecast_widget/Spinner/Spinner'; 


const API_KEY='8e9305559a7e405eac02592862afe99b';

class Weather extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
        weather:[],
        lat:null,
        long:null,
        location:'',
            city:'',
            country:'',
            header_city:'',
            header_country:'',
            error:true

        }


    }

    weatherInit = () => {
      const success = (position) => {
        this.getWeatherData(position.coords.latitude, position.coords.longitude);
        this.setState({error:false});
        this.setState({lat:position.coords.latitude,long:position.coords.longitude});
      }
      const error = () => {
        alert('Unable to retrieve location.');
        this.setState({error:true});
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
        
        
      } 
      else {
        alert('Your browser does not support location tracking, or permission is denied.');
      }
    }

    getWeatherData = (lat, lon) => {
      axios.get('https://api.weatherbit.io/v2.0/current?lat='+lat+'&lon='+lon+'&key='+API_KEY)
     .then(res=>{
this.setState({data:res.data.data[0],weather:res.data.data[0].weather});
this.setState({lat:lat,long:lon});
this.setState({error:false});
     })
     .catch(err=>{
      console.log(err);
      this.setState({error:true});
     }
      );
     
    }


    componentDidMount(){
    this.weatherInit();
    }

    handleCityChange=(event)=> {
        this.setState({city: event.target.value});
      }
      handleCountryChange=(event)=> {
        this.setState({country: event.target.value});
      }

      searchHandler=()=>{
        this.setState({header_city:this.state.city});
        this.setState({header_country:this.state.country});
        axios.get('https://api.weatherbit.io/v2.0/current?city='+this.state.city+'&country='+this.state.country+'&key='+API_KEY)
        .then(res=>{
this.setState({data:res.data.data[0],weather:res.data.data[0].weather});
this.setState({error:false});
//this.setState({weather:this.state.data.weather});

        })
        .catch(err=>{
          console.log(err);
          this.setState({error:true});});
    
      }


    render(){
var path='c01d';
var w_type='';

if(this.state.weather.length!=0){
    path=this.state.weather.icon;
    w_type=this.state.weather.description;
}

var widget=this.state.error? <div>{this.state.lat==null?null:<div>Error while loading data..</div>}</div>:<div className="container">
<div className="row">
  <div className="col">
  <h3>  {this.state.data.city_name}</h3> 
 <div className="temp_img"> 
   <Weather_logo weather={path} /></div>{w_type}<br/>Temp:{this.state.data.temp}°C <br/>
   Humidity: {this.state.data.rh}
  </div>
  <div className="col">
      <div className="rel_data">
  Precipitation :{this.state.data.precip}<br/>
              Wind :{this.state.data.wind_spd}<br/>
              Clouds:{this.state.data.clouds}
                {/* Precipitaion :{this.state.data.weather[0].code}   */}
                </div>
  </div></div></div>;
 



        return(
            <div>
                <label className="label_header"><b>Welcome to the Weather App</b></label>
             <div className="form">
<label className="label_city"> City:</label><input type="text"   className="textbox" onChange={this.handleCityChange} placeholder="Enter City" />
<label className="label_country" > Country:</label><input type="text" className="textbox" onChange={this.handleCountryChange} placeholder="Enter Country" />

<div className="btn_search"><button type="button" class="btn btn-info" onClick={this.searchHandler}>Search</button></div>
</div>            
<br/>
{this.state.header_city !=='' ?<h5>Showing results for {this.state.header_city},{this.state.header_country}</h5>:null}
  {console.log(this.state.data,'inside')}
  {this.state.data==[]?<Spinner/>:widget}
                <Forecast values={{city:this.state.header_city,country:this.state.header_country,lat:this.state.lat,long:this.state.long}} />

            </div>
        )
    }


}

export default Weather;


