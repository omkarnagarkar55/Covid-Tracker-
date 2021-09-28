const DisplayById=(props)=>{
    const {coviddata,flag}= props
    // console.log("In Display by Id",flag)
    if(flag===3){
        return (
            <>
            {coviddata.map((obj,index)=>(
                <tr key={index}>
                    <td><strong>{index}</strong>) {obj.ID}</td>
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
        return <tr></tr>
    }
    

}

export default DisplayById