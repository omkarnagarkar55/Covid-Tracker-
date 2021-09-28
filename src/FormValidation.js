import { useState } from "react"
import { withRouter } from "react-router";

function FormValidation(props){
    
    const [errors,seterrors] = useState([])
    const [flag,setflag] = useState(false) 
    
    const validateNotEmpty=(fieldname,value)=>{
        if(value.length <= 0){
            return `${fieldname} must be filled!!`
        }
    }

    const validateNotNegative=(fieldname,id,value)=>{
        if(value < 0 ){
            document.getElementById(id).value=''
            document.getElementById(id).focus()
            seterrors([...errors,`${fieldname} Cannot be negative .Please Enter valid data!! `]) 
        }
    }
     
    const validateCountry=(event)=>{
        const value = event.target.value
        const empty = validateNotEmpty('Country',value)
        if(empty){
            seterrors([...errors,empty])
            document.getElementById("country").style.borderColor = "red";
        }else{
            document.getElementById("country").style.borderColor = 'white';
        }
    }

    const validateTotalConfirmed=(event)=>{
        const value = event.target.value
        const empty =validateNotEmpty('Total Confirmed',value)
        if(empty){
            seterrors([...errors,empty])
            document.getElementById("confirmed").style.borderColor = "red";
        }else{
            document.getElementById("confirmed").style.borderColor = 'white';
        }
        validateNotNegative('Total Confirmed','confirmed',value)
    }

    const validateActive=(event)=>{
        const value = event.target.value
        const empty =validateNotEmpty('Active Cases',value)
        if(empty){
            seterrors([...errors,empty])
            document.getElementById("active").style.borderColor = "red";
        }else{
            document.getElementById("active").style.borderColor = 'white';
        }
        validateNotNegative('Active Cases','active',value)
    }

    const validateRecovered=(event)=>{
        const value = event.target.value
        const empty =validateNotEmpty('Total Recovered',value)
        if(empty){
            seterrors([...errors,empty])
            document.getElementById("recovered").style.borderColor = "red";
        }else{
            document.getElementById("recovered").style.borderColor = 'white';
        }
        validateNotNegative('Total Recovered','recovered',value)
    }
    const displayErrors =()=>{
        if(errors.length > 0){
            return (
                <>
                <h4>ERRORS</h4>
                <ol className="errorlist">
                    {errors.map((err,index)=>(
                        <li key={index}>{err}</li>
                    ))}
                </ol>
                </>
            )
        }
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        const data={
            Country : event.target[0].value,
            TotalConfirmed : event.target[1].value,
            ActiveCases : event.target[2].value,
            TotalRecovered : event.target[3].value,
        }
        //console.log(data)
        localStorage.setItem('data',JSON.stringify(data))
        setflag(true)
        document.getElementById("form").reset()
        props.history.push('/success')
    }


    const displayForm=()=>(
        <>
            <div className="col-sm-6 align-items-center">
                <h1>COVID-19 Form </h1>
                <p>{flag ?'Form Submitted Successfully!!!':'Please fill the Form' } </p>
                <form id='form' onSubmit={(e)=>handleSubmit(e)} method="post">
                    <div className="form-group row">
                        <label for="country " className="col-sm-2 col-form-label">Country</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="country" placeholder="Country" onBlur={validateCountry} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Total Confirmed</label>
                        <div className="col-sm-10">
                        <input type="number" className="form-control"  min="0" id="confirmed" placeholder="Total Confirmed" onBlur={validateTotalConfirmed} required/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Active cases</label>
                        <div className="col-sm-10">
                        <input type="number" className="form-control" min="0" id="active" placeholder="Active Cases" onBlur={validateActive} required/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Total Recovered</label>
                        <div className="col-sm-10">
                        <input type="number" class="form-control"  min="0" id="recovered" placeholder="Total Recovered" onBlur={validateRecovered} required/>
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
        </form>

            </div>
        </>
    )
    
    return(
        <div className="container">
           
            <div className="row">
                {displayForm()}
            <div className="maddy col-sm-6">
                {displayErrors()}
                {console.log(JSON.parse(localStorage.getItem('data')))}
            </div>
            </div>
        </div>

    )
}

export default withRouter(FormValidation);