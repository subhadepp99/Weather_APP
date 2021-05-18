import React from 'react';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Forecast from './Forecast';
import Weather_logo from './Temp_svg_logo/Weather_logo';


configure({adapter:new Adapter()});

describe('<Forecast />',()=>{

    //basic check for seeing if the component is rendered correctly
    it('should render forecast element',()=>{
        const wrapper=shallow(<Forecast />);
        expect(wrapper.exists()).toBe(true);
    });

    //check for card elements
    it('should render forecast element',()=>{
        const wrapper=shallow(<Forecast />);
        expect(wrapper.find('#row_head').find('card').contains('Temp:'));
    });

       

        

});
