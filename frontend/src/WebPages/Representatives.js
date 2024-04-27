import NavBar from '../Navigation/Navbar';
import { useState, useEffect } from 'react';
import "./RepresentStyle.css"

export default function Representatives() {

    //all of the potential elements to be used 
    const [members, setMembers] = useState( { 
      bioguideId: "", 
      depiction: {}, 
      district: '', 
      name: "", 
      partyName:"",
      state: "",
      terms:"",
      updateDate:"",
      url:"" 
    } );

    //url for congress API
    const congressUrl = 'https://api.congress.gov/v3/member?api_key=nIuacsJ4ncWVdPvHcXoCpRnG8ZzqQVaw8uzCibVm&limit=10';

    //calls API
    useEffect(()=>{
        fetch(congressUrl)
        .then(response => response.json())
        .then(data => setMembers(data))
        .catch(err => console.log(err))
      },[])

    

  console.log(members.members);

    
    return(
        <> 
     
             <NavBar />
             <h1>This is the Representatives Page!</h1>
             <div className='info'>
             {members.members?.map((list, index) => (
                <h1 className='members' key={index}>
                  <img className='image' src={list.depiction.imageUrl} /> 
                  <div className='memberInfo'>
                    <p className='name'>{list.name}</p>
                    <p className='state'>{list.state}</p>
                    <p className='party'>{list.partyName}</p>
                    <p className='district'>District {list.district}</p>
                  </div>
                </h1>
              ))}
             </div>
        </>
    )
    
}