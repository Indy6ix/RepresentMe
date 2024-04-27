import NavBar from '../Navigation/Navbar';
import { useState, useEffect } from 'react';
import "./BillStyle.css"

export default function Bills() {
    const [workingBills, setWorkingBills] = useState({});
    const [search, setSearch] = useState('');

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
             <div>
        

             <div className='searchBar'>  
                <input
                    className='search'
                    type="text"
                    onChange={e=>setSearch(e.target.value)}
                    placeholder='SEARCH FOR A BILL'
                />    
             </div>

              {workingBills.bills?.filter((list)=>{
                return search.toLowerCase() === '' ? list : list.title.
                toLowerCase().includes(search) 
              })
              .map((list, index) => (
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
       </div>
        </>
    )
}