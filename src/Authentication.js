import { useState } from "react"
import FormValidation from "./FormValidation"

function Authentication(props){

    const [valid,setvalid] =useState(0)
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        const user = event.target[0].value
        const pass = event.target[1].value
        //console.log(user,pass)
        if(user==='admin' && pass ==='admin'){
            console.log("Success!!!")
            setvalid(1)  
        }else{
            setvalid(-1)    
        }
    }
    const displayForm =()=>{
        return (
            <div>
                <h1>User Authentication</h1>
                <p>{valid===1 ? 'Authentication Successfull': valid===-1 ? 'Your are not Autherized to enter data':'Please enter your Credentials'}</p>
                <form id='formauth' onSubmit={handleSubmit} method="post">
                    <div class="form-group row">
                        <label for="country " class="col-sm-2 col-form-label">User Name</label>
                        <div class="col-sm-6">
                        <input type="text" class="form-control" disabled={valid ===1} id="username" placeholder="User Name"  required/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-6">
                        <input type="password" class="form-control" disabled={valid ===1}  id="password" placeholder="Password"  required/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                        <button id="submitAuth" type="submit" class="btn btn-primary" disabled={valid ===1}>Proceed</button>
                        </div>
                    </div>
        </form>
                {valid===1 ? <FormValidation {...props}/>: ""}
            </div>
        )
    }

    return(
        <div className="container">
           {displayForm()} 
        </div>
    )
}

export default Authentication