import NavBar from '../Navigation/Navbar';
import { useState, useEffect } from 'react';
import "./RepresentStyle.css"

export default function Representatives() {

  const [members, setMembers] = useState({});
  const [search, setSearch] = useState('');
    
  //url for congress API
  const congressUrl = 'https://api.congress.gov/v3/member?api_key=nIuacsJ4ncWVdPvHcXoCpRnG8ZzqQVaw8uzCibVm&limit=250';

    //calls API
    useEffect(()=>{
        fetch(congressUrl)
        .then(response => response.json())
        .then(data => setMembers(data))
        .catch(err => console.log(err))
      },[])


      //console.log(members.members);
      console.log(search);
    
    return(
        <> 
     
             <NavBar />
           
             <div className='info'>
             <h1 className='title'>
                FIND YOUR REPRESENTATIVE
            </h1>
            
             <div className='searchBar'>  
                <input
                    className='search'
                    type="text"
                    onChange={e=>setSearch(e.target.value)}
                    placeholder='Type a state or name'
                />    
             </div>

             {members.members?.filter((list)=>{
              return search.toLowerCase() === '' ? list : list.state.
              toLowerCase().includes(search) || list.name.toLowerCase().includes(search)
             })
             .map((list, index) => (
                <h1 className='members' key={index}>
                  <img className='image' src={list.depiction?.imageUrl} alt="image of representative" /> 
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