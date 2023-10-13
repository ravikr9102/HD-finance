import React from 'react'
import { Link } from 'react-router-dom'

export default function Funded() {
  
  return (
    <body style={{backgroundColor:"rgb(12 74 110)", height:"auto"}}>
    <section className='p-10'>
    <div className="flex justify-center items-center py-2">
        <Link className='bg-slate-300 py-1 px-4 rounded-full' to="/">
          Back
        </Link>
      </div>
      <h1 className='text-center' style={{color:"white",fontSize:"22px"}}>This is Funded Stage!</h1>
    </section>
      <div>
      <table className="centered-table">
          <tbody>
            <tr>
              <td style={{color:"white"}} >1.</td>
              <td style={{color:"white"}} >Fee - Rs.30k</td>
              <td style={{color:"white"}} >Funded Account-Rs.300k</td>
              <td style={{color:"white"}} >Profit Split <br></br> A 60% profit share within 10 days is lucrative, while a 20% loss can be significant, so careful investment and risk management are crucial. </td>
            </tr>
            <tr>
              <td style={{color:"white"}} >2.</td>
              <td style={{color:"white"}} >Fee - Rs.50k</td>
              <td style={{color:"white"}} >Funded Account-Rs.500k</td>
              <td style={{color:"white"}} >Profit Split <br></br> A 60% profit share within 10 days is lucrative, while a 20% loss can be significant, so careful investment and risk management are crucial. </td>
            </tr>
            <tr>
              <td style={{color:"white"}} >1.</td>
              <td style={{color:"white"}} >Fee - Rs.100k</td>
              <td style={{color:"white"}} >Funded Account-Rs.1M</td>
              <td style={{color:"white"}} >Profit Split <br></br> A 60% profit share within 10 days is lucrative, while a 20% loss can be significant, so careful investment and risk management are crucial. </td>
            </tr>
            <tr>
              <td style={{color:"white"}} >2.</td>
              <td style={{color:"white"}} >Fee - Rs.1M</td>
              <td style={{color:"white"}} >Funded Account-Rs.10M</td>
              <td style={{color:"white"}} >Profit Split <br></br> A 60% profit share within 10 days is lucrative, while a 10% loss can be significant, so careful investment and risk management are crucial. </td>
            </tr>
          </tbody>
        </table>
        <p style={{color:"white",fontSize:"25px", marginTop:"30px",marginBottom:"30px"}}>Note-To get an account with us, you must successfully complete the following two phases within 15-15 days</p>
        <h2 style={{color:"white"}} >Phase 1</h2>
        <table className="centered-table">
          <tbody>
            <tr>
              <td style={{color:"white"}} >1.</td>
              <td style={{color:"white"}} >Trading Period</td>
              <td style={{color:"white"}} >15 days</td>
              <td style={{color:"white"}} >20% loss || 40% profit</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 style={{color:"white"}} >Phase 2</h2>
        <table className="centered-table">
          <tbody>
            <tr>
              <td style={{color:"white"}} >1.</td>
              <td style={{color:"white"}} >Trading Period</td>
              <td style={{color:"white"}} >15 days</td>
              <td style={{color:"white"}} >10% loss || 20% profit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  )
}
