import React,{useState,useEffect} from 'react'

import axios from 'axios'
import './App.css'



function Datafetching()
{

    

    const[Country,setCountry]= useState({})
    const[location,setlocation]= useState('')

    useEffect(()=> {

        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${location}`)

          .then(res =>{

              console.log(res)
              setCountry(res.data)

          })

          .catch(err =>{

              console.log(err)

          })

    },[location])

    

    return(

        
        <div >
            
            <input type="text" value={location} placeholder="Enter a country name to get the details regarding Covid-19"onChange={e => setlocation(e.target.value) } />
           
            <div className="card">
                
            
                <p className="header">Total Cases: {Country.cases}</p>
                <p className="header">Today Cases: {Country.todayCases}</p>
                <p className="header">Total Deaths: {Country.deaths}</p>
                <p className="header">Today Deaths: {Country.todayDeaths}</p>
                <p className="header">Total Recovered: {Country.recovered}</p>
                <p className="header">Active Cases: {Country.active}</p>
                <p className="header">Critical Cases: {Country.critical}</p>
                <p className="header">Cases per 1 million: {Country.casesPerOneMillion}</p>
                <p className="header">Deaths per 1 million: {Country.deathsPerOneMillion}</p>
            </div>

        </div>
       

    )

}



export default Datafetching