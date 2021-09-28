import {Bar} from 'react-chartjs-2';

const BarChart =(props)=>{
    const coviddata = props.coviddata

    const label = coviddata.sort(function(y,x){return x.TotalConfirmed - y.TotalConfirmed}).slice(0,10).map((obj,index)=>obj.Country)
    const cases = coviddata.sort(function(y,x){return x.TotalConfirmed - y.TotalConfirmed}).slice(0,10).map((obj,index)=>obj.TotalConfirmed)
    //console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQ",label)
    const state = {
        labels: label,
        datasets: [
          {
            label: 'COVID-19 Cases',
            backgroundColor: 'red',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            color:'rgba(0,0,0,1)',
            data: cases
          }
        ]
      }

    return(
        <div className="col-sm-8 " style={{color:'white'}}>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Top Countries with COVID-19 cases',
              fontSize:30,
              fontColor: '#f00',
            },
            legend:{
                labels: {
                    fontColor: '#f00'
                    },  
              display:true,
              position:'center'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        fontColor: 'red'
                    },
                }],
              xAxes: [{
                    ticks: {
                        color: 'white'
                    },
                }]
            } 
          }}
        />
      </div>
    )
}

export default BarChart