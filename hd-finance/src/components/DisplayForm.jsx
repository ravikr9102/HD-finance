import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"


function DisplayForm (){

   
    const[multipleUser, setMultipleUser] = useState([])

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];
        setMultipleUser([...storedFormData])
    },[])

    console.log(multipleUser)
    
// console.log(storedFormData)
        
    return(
        <>
        <Link to="/">
            <button>Back</button>
        </Link>
        {multipleUser.length >0 ? (
        multipleUser.map((ele, index) => {
            return(
          <div key={index}>
            <p>Name: {ele.name}</p>
            <p>Email: {ele.email}</p>
            <p>Message: {ele.message}</p>
          </div>
            )
})
      ) : (
        <div>No data found</div>
      )}
       
        </>
    )
}

export default DisplayForm;