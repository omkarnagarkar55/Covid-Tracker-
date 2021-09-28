import React from"react";
import Adapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme ,{EnzymeAdapter, shallow,mount} from"enzyme";
import App from "./App";
import CovidTracker from './CovidTracker';
import Authentication from "./Authentication";
import Header from './Header';
import AppRoutes from "./AppRoutes";

Enzyme.configure({adapter:new Adapter()});


        it("App rendered properly",()=>{    
        const wrapper=shallow(<App/>); 
        const valCount=wrapper.find('Header').exists();
        console.log(valCount)
        expect(valCount).toBe(true);});
        

        it("AppRoutes contains routs",()=>{    
            const wrapper=shallow(<AppRoutes/>); 
            const valCount=wrapper.find('Route').exists();
            console.log(valCount)
            expect(valCount).toBe(true);});

        it("Check Buttons Name to display all countries",()=>{    
            const wrapper=shallow(<CovidTracker/>); 
            const valCount=wrapper.find('#allCountries-btn').text();
            expect(valCount).toBe('All');
            const valCount2=wrapper.find('#charts-btn').text();
            expect(valCount2).toBe('Charts');});
        
        it("Number of Buttons in CovidTracker Component",()=>{    
            const wrapper=mount(<CovidTracker/>); 
            const valCount=wrapper.find('button').length;
            
            expect(valCount).toBe(7);});
        
        it("Number of Buttons in Header Component",()=>{    
            const wrapper=shallow(<Header/>); 
            const valCount=wrapper.find('button').length;
            
            expect(valCount).toBe(1);});
         
        it("Number of Navigation Link in Header Component",()=>{    
            const wrapper=shallow(<Header/>); 
            const valCount=wrapper.find('Link').length;
            expect(valCount).toBe(4);});

        it('App contains 1 div', () => {
            const wrapper = shallow(<App />);
            const valCount=wrapper.find('div.App').length
            expect(valCount).toBe(1);
            });

        it('Input in Authentication Form', () => {
            const wrapper = shallow(<Authentication />);
            const valCount=wrapper.find('input').length
            expect(valCount).toBe(2);
            });
            
        it('Simulate Click on All button',()=>{    
            const wrapper=shallow(<CovidTracker/>); 
            const ButtonElement=wrapper.find('#allCountries-btn')
            ButtonElement.simulate('click');
            const text = wrapper.find('p').text();
            expect(text).toEqual('0')});
                      
            
        it('Simulate Click on Charts button',()=>{    
            const wrapper=shallow(<CovidTracker/>); 
            const buttonElement=wrapper.find('#charts-btn')
            buttonElement.simulate('click');
            const text = wrapper.find('p').text();
            expect(text).toEqual('6')});

        it('Simulate Click on Top Active Cases button',()=>{    
            const wrapper=shallow(<CovidTracker/>); 
            const buttonElement=wrapper.find('#topActive')
            buttonElement.simulate('click');
            const text = wrapper.find('p').text();
            expect(text).toEqual('4')});
            
        it('Simulate Click on Procced button in Authentication ',()=>{    
            const wrapper=shallow(<Authentication/>); 
            const buttonElement=wrapper.find('#submitAuth')
            buttonElement.simulate('click');
            const text = wrapper.find('p').text();
            expect(text).toEqual('Please enter your Credentials')});      

//         it("Fully renders three inputs", () => {    
//         const wrapper = mount(<App title="tester" />);   
//         const count = wrapper.find("input.form-control").length    
//         expect(count).toBe(3);   });   
         
//          it("Shallow renders zero inputs", () => {    
//          const wrapper = shallow(<App />);
//         const count = wrapper.find("input.form-control").length
//         expect(count).toBe(0);
//    })
