import NavBar from '../Navigation/Navbar';
import { useState, useEffect } from 'react';
import "./BillStyle.css"

export default function Bills() {
    const [workingBills, setWorkingBills] = useState({});

    const billsUrl = 'https://api.congress.gov/v3/bill?api_key=nIuacsJ4ncWVdPvHcXoCpRnG8ZzqQVaw8uzCibVm&limit=10';

    //calls API
    useEffect(()=>{
        fetch(billsUrl)
        .then(response => response.json())
        .then(data => setWorkingBills(data))
        .catch(err => console.log(err))
      },[])

    console.log(workingBills.bills);

   
    
    return(
        <>
             <NavBar />
             <h1>This is the Bills Page!</h1>

              {workingBills.bills?.map((list, index) => (
                <div className='billInfo' key={index}>
                 <p className='billTitle'>
                    {list.title} 
                </p> 
                <p className='billDate'>
                    {list.updateDate} 
                </p> 
                <p className='billAction'>
                    Status: {list.latestAction.text} 
                </p> 
                </div>
              ))}
       
        </>
    )
}