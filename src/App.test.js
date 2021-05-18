import React from 'react';
import Weather_widget from './Weather_Widget/Weather_widget';
import Enzyme, { shallow,  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup);


  
  describe('APP_Test', ()=>{

    it('should render Weather_widget element',()=>{
        const wrapper=shallow(<Weather_widget />);
        expect(wrapper.exists()).toBe(true);
    });


  })