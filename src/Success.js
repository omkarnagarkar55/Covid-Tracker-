const Success=()=>{

    const data =JSON.parse(localStorage.getItem('data'))
    //console.log("In Success",data)
    return(
        <>
            <h1>Form Submited Successfully</h1>
            
            <p>Data Submited is </p>
            <ol>
                 <li>Country : {data.Country}</li>
                 <li>TotalConfirmed : {data.TotalConfirmed}</li>
                 <li>ActiveCases : {data.ActiveCases}</li>
                 <li>TotalRecovered : {data.TotalRecovered}</li>
            </ol>
        </>
    )
}

export default Success