const TopActiveCases=(props)=>{
    const {coviddata,flag}= props

    if(flag===4){
        return (
            <>
            {coviddata.sort(function(x,y){return (y.TotalConfirmed - y.TotalRecovered - y.TotalDeaths) - (x.TotalConfirmed - x.TotalRecovered - x.TotalDeaths)})
            .slice(0,10).map((obj,index)=>(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{obj.Country}</td>
                    <td>{obj.TotalConfirmed}</td>
                    <td>{obj.TotalConfirmed - obj.TotalRecovered - obj.TotalDeaths}</td>
                    <td>{obj.TotalRecovered}</td>
                    <td>{obj.TotalDeaths}</td>
                    <td><button className="btn btn-danger btn-sm" onClick={()=>props.deleteCountry(obj.Country)}><i>Delete</i></button></td>
                    <td><button className="btn btn-info btn-sm" onClick={()=>props.editRecovered(obj.Country)}><i>Edit</i></button></td>
                </tr>
            ))}
            </>
        )
    }else{
        return <></>
    }
}

export default TopActiveCases