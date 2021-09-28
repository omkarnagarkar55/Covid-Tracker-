import { useEffect, useState } from "react";
import axios from 'axios';
import DisplayById from "./DIsplayById";
import TopActiveCases from "./TopActiveCases";
import EfficientCountries from "./EfficientCountries";
import BarChart from "./BarChart";


export default function CovidTracker(){

    const[coviddata,setcoviddata]=useState([])
    const[flag , setflag] = useState(0)

    useEffect(()=>{
        axios.get('https://api.covid19api.com/summary')
        .then(resp =>{
            //console.log("Reponse:",resp.data)
            setcoviddata(resp.data.Countries)
        })
        .catch(err =>{console.log(err)})
        console.log('Stored',JSON.parse(localStorage.getItem('data')))
    },[])

    const deleteCountry=(country)=>{
        let i
        var temparray =[...coviddata]
        for(i=0;i<coviddata.length;i++){
            if(coviddata[i].Country === country){
                console.log("Deleted",country)
                temparray.splice(i,1)
            }
        }
        setcoviddata(temparray)
    }

    const editRecovered=(country)=>{
        let i
        const recovered = Number(prompt(`Enter Recovered for ${country} !!`))
        var temparray =[...coviddata]
        for(i=0;i<coviddata.length;i++){
            if(coviddata[i].Country === country){
                console.log("Edit",country)
                temparray[i].TotalRecovered = recovered
            }
        }
        if(recovered>=0){
            setcoviddata(temparray)
        }
        
    }

    let trackerdata = '' 

    

    if(flag === 0){
        trackerdata = coviddata.sort(function(x,y){return x.Country.localeCompare(y.Country)})
        .map( (obj,index) =>{
        return <tr key={index}>
            <td>{index + 1}</td>
            <td>{obj.Country}</td>
            <td>{obj.TotalConfirmed}</td>
            <td>{obj.TotalConfirmed - obj.TotalRecovered - obj.TotalDeaths}</td>
            <td>{obj.TotalRecovered}</td>
            <td>{obj.TotalDeaths}</td>
            <td><button className="btn btn-danger btn-sm" onClick={()=>deleteCountry(obj.Country)}><i>Delete</i></button></td>
            <td><button className="btn btn-info btn-sm" onClick={()=>editRecovered(obj.Country)}><i>Edit</i></button></td>
        </tr>
    })
    }else if(flag === 1){
        trackerdata = coviddata.sort(function(x,y){return y.TotalConfirmed - x.TotalConfirmed})
    .slice(0,10).map( (obj,index) =>{
        return <tr key={index}>
            <td>{index + 1}</td>
            <td>{obj.Country}</td>
            <td>{obj.TotalConfirmed}</td>
            <td>{obj.TotalConfirmed - obj.TotalRecovered - obj.TotalDeaths}</td>
            <td>{obj.TotalRecovered}</td>
            <td>{obj.TotalDeaths}</td>
            <td><button className="btn btn-danger btn-sm" onClick={()=>deleteCountry(obj.Country)}><i>Delete</i></button></td>
            <td><button className="btn btn-info btn-sm" onClick={()=>editRecovered(obj.Country)}><i>Edit</i></button></td>
        </tr>
       
    })
        
    }else if(flag===2){
        trackerdata = coviddata.sort(function(x,y){return x.TotalConfirmed - y.TotalConfirmed})
    .slice(0,10).map( (obj,index) =>{
        return <tr key={index}>
            <td>{index + 1}</td>
            <td>{obj.Country}</td>
            <td>{obj.TotalConfirmed}</td>
            <td>{obj.TotalConfirmed - obj.TotalRecovered - obj.TotalDeaths}</td>
            <td>{obj.TotalRecovered}</td>
            <td>{obj.TotalDeaths}</td>
            <td><button id='deleteCountry' className="btn btn-danger btn-sm" onClick={()=>deleteCountry(obj.Country)}><i>Delete</i></button></td>
            <td><button className="btn btn-info btn-sm" onClick={()=>editRecovered(obj.Country)}><i>Edit</i></button></td>
        </tr>
       
    })

    }
    
    //console.log("Position is ")
    //console.log(coviddata)
    const highest = coviddata.sort(function(x,y){return y.TotalConfirmed - x.TotalConfirmed})[0]
    return (
        <div >
            <h3>Covid Tracker App </h3>
            <p>{flag}</p>
            {/* {console.log("Page Rendered")} */}
            <h6>{coviddata.length!==0?`${highest.Country} has highest number of confirmed case in the world equals to ${highest.TotalConfirmed}.`:''}</h6>
            <button id='allCountries-btn' className="btn btn-success btn-sm" onClick={()=> setflag(0)}>All</button>
            <button  className="btn btn-primary btn-sm" onClick={()=> setflag(1)} >Top 10 Countries with COVID Cases</button>
            <button className="btn btn-dark btn-sm" onClick={()=> setflag(2)}>Bottom 10 Countries with COVID Cases</button>
            <button  className="btn btn-warning btn-sm" onClick={()=> setflag(3)}>Display Countries By ID</button>
            <button id="topActive" className="btn btn-info btn-sm" onClick={()=> setflag(4)}>Top Active Cases</button>
            <button className="btn btn-light btn-sm" onClick={()=> setflag(5)}>Top Efficient Countries</button>
            <button id='charts-btn' className="btn btn-success btn-sm" onClick={()=> setflag(6)}>Charts</button>
            {flag===6 ?<BarChart coviddata={coviddata} />:<table id="mytable" className="table">
                <thead>
                    <tr>
                        <th scope="col">{flag===3?"ID":"Sr.No."}</th>
                        <th scope="col">Country</th>
                        <th scope="col">Confirmed Cases</th>
                        <th scope="col">Active Cases</th>
                        <th scope="col">Total Recovered</th>
                        <th scope="col">Total Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {trackerdata}
                    <DisplayById coviddata={coviddata} flag={flag} editRecovered={editRecovered} deleteCountry={deleteCountry}/>
                    <TopActiveCases coviddata={coviddata} flag={flag} editRecovered={editRecovered} deleteCountry={deleteCountry}/>
                    <EfficientCountries  coviddata={coviddata} flag={flag} editRecovered={editRecovered} deleteCountry={deleteCountry}/>
                </tbody>
            </table> }

        </div>

    )
}