import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Forecast from './Forecast';
import Weather_logo from './Temp_svg_logo/Weather_logo';


configure({adapter:new Adapter()});

describe('<Forecast />',()=>{

    it('should render forecast element',()=>{
        const wrapper=shallow(<Forecast />);
        expect(wrapper.exists()).toBe(true);
    });


    it('should render forecast element',()=>{
        const wrapper=shallow(<Forecast />);
        expect(wrapper.exists()).toBe(true);
    });



});
