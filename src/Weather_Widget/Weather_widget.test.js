import React from 'react';
import ReactDOM from 'react-dom';
import Weather_widget from './Weather_widget';
import Forecast from './Forecast_widget/Forecast';

import Enzyme, { shallow, render, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import { cleanup } from '@testing-library/react';



Enzyme.configure({ adapter: new Adapter() })


afterEach(cleanup);



  describe('Weather_widget', ()=>{

        it('should render Weather_widget element',()=>{
            const wrapper=shallow(<Weather_widget />);
            expect(wrapper.exists()).toBe(true);
        });

  
        it('check if the forecast element is rendered ', () => {
          const wrapper = shallow(<Weather_widget />);
          expect(wrapper.find(Forecast).length).toEqual(1);
        });
      
        it('should render Weather data',()=>{
            const wrapper=shallow(<Weather_widget />);
            expect(wrapper.find('#row_head').find('card').contains('Temp:'));
        });

        // it("Updates the state (city)", () => {
        //     const wrapper = shallow(<Weather_widget />);
        //     const input = wrapper.find("input").at(1);;
        //     input.simulate("change", { target: { value: 'Kolkata' } });  // 'value' instead of 'num'
        //     expect(wrapper.state().value).toEqual('Kolkata'); 
        //   });

        //   it("Updates the state (country)", () => {
        //     const wrapper = shallow(<Weather_widget />);
        //     const input = wrapper.find("input").at(2);;
        //     input.simulate("change", { target: { value: 'India' } });  // 'value' instead of 'num'
        //     expect(wrapper.state().value).toEqual('India');  
        //   });



  })

  