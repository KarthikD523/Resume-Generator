import React, { useState } from 'react'
import M from 'materialize-css';
import { Link } from 'react-router-dom';

export default function Home2() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [rank,setRank]=useState("")
    const [dob,setDob]=useState("")
    const [education,setEducation]=useState([])
    const [internships,setInternships]=useState([])
    const [i_desc,set_i_desc]=useState("")


    const [school,setSchool]=useState({
        name:"",
        degree:"",
        year:"",
        cpi:"",

    })

    const [internship,setInternship]=useState({
        title:"",
        date:"",
        description:[]
    })



  return (
    <div className='Container'>
        <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Personal Details</h3>
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        
        <div class="row">
    <div class="input-field col s6">
      <input value={name} id="name" onChange={(e)=>setName(e.target.value)} type="text" class="validate" />
      <label class="active" for="name">Name</label>
    </div>
    
         <div class="input-field col s6">
        <input value={email} id="email" onChange={(e)=>setEmail(e.target.value)} type="text" class="validate" />
        <label class="active" for="email">Email</label>
    </div>
    
  <div class="input-field col s6">
      <input value={address} id="adress" onChange={(e)=>setAddress(e.target.value)} type="text" class="validate" />
      <label class="active" for="adress">Address</label>
  </div>
  <div class="input-field col s6">
      <input value={phone} id="phone" onChange={(e)=>setPhone(e.target.value)} type="text" class="validate" />
      <label class="active" for="phone">Phone</label>
  </div>
  <div class="input-field col s6">
      <input value={rank} id="rank" onChange={(e)=>setRank(e.target.value)} type="text" class="validate" />
      <label class="active" for="rank">JEE Rank</label>
  </div>
  <div class="input-field col s6">
      <input value={dob} id="dob" onChange={(e)=>setDob(e.target.value)} type="text" class="validate" />
      <label class="active" for="dob">DOB</label>
  </div>
    </div>
    
        </div>

     <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Education Details</h3>
     </div>
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
     {
          
          education && (education.map(item=>{
              
            return <div className='row' style={{display:"flex",}}>
            <div className="input-field col s4">
            <input value={item.name} 
             type="text"  />
             
             </div>
             <div className="input-field col s2">
            <input value={item.year}  
             type="text"  />
             </div>
             <div className="input-field col s4">
            <input value={item.degree}  
             type="text"  />
             </div>
             <div className="input-field col s2">
            <input value={item.cpi}  
             type="text"  />
             </div>
            </div> 
          }) )
         
      }
       <div className="row" >
    <div className="input-field col s4">
        <input value={school.name} id="school-name" onChange={(e)=>setSchool(prev=>{
            return {
                ...prev,
                name:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="school-name">Name of Institute</label>
    </div>
    <div className="input-field col s2">
        <input value={school.year} id="school-year" onChange={(e) => setSchool(prev=>{
            return{
                ...prev,
                year:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="school-year">Year</label>
    </div>
    <div className="input-field col s4">
        <input value={school.degree} id="school-degree"  onChange={(e) => setSchool(prev=>{
            return{
                ...prev,
                degree:e.target.value
            }
        })}  type="text" className="validate" />
        <label htmlFor="school-degree">Degree</label>
    </div>
    <div className="input-field col s2">
        <input value={school.cpi} id="school-cpi" onChange={(e)=>setSchool(prev=>{
            return {
                ...prev,
                cpi:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="school-cpi">CPI</label>
    </div>
   
</div>
<button className="Button" type="button" onClick={(e) => {
                setEducation(prev => [...prev, school]);
                setSchool({name:"",degree:"",year:"",cpi:""});
            }} name="action">
                ADD
               
            </button>
 </div>
  
 <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Internship Details</h3>
     </div>
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
    {
       internships && Array.isArray(internships) && internships.map(item=>{
            return <>
             <div className='row'>
            <div className="input-field col s6">
                 <input value={item.title} id="internship-title"  type="text" className="validate" />
                
             </div>
             <div className="input-field col s6">
                 <input value={item.year} id="internship-year"  type="text" className="validate" />
                
             </div>
            
            </div>
       <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       {
    item.description.map(item1=>{
     return <div className="input-field col s12" >
     <textarea value={item1}  
               
               id="internship_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
       </div>
            
            </>
        })
    }
     
   <div className='row'>
   <div className="input-field col s6">
        <input value={internship.title} id="internship-title" onChange={(e)=>setInternship(prev=>{
            return {
                ...prev,
                title:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="internship-title">Name of Institute</label>
    </div>
    <div className="input-field col s6">
        <input value={internship.year} id="internship-year" onChange={(e)=>setInternship(prev=>{
            return {
                ...prev,
                year:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="internship-year">Year</label>
    </div>
   
   </div>
   <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

  
   {
    internship.description.map(item=>{
     return <div className="input-field col s12" >
     <textarea value={item}  
               
               id="internship_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
   
   <div className="input-field col s12">
        <textarea value={i_desc}  
                  onChange={(e) => set_i_desc(e.target.value)}
                  id="internship_description"
                  className="materialize-textarea" style={{ width: "100% !important" }}
                  />
        <label className="active" htmlFor="internship_description">Description of the Internship</label>
    </div>

    <div className="row">
    <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="Button"
                type="button"
                onClick={(e) => {
                   setInternship(prev=>({
                    ...prev,
                    description:[...prev.description,i_desc]
                   }))
                   set_i_desc("")
                }}
                name="action">
            ADD Desc
           
        </button>
    </div>
</div >

<div className="row">
    <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="Button"
                type="button"
                onClick={(e) => {
                   setInternships(prev=>(
                    [...prev,internship]
                   ))
                   setInternship({
                    title:"",
                    year:"",
                    description:[]
                   })
                }}
                name="action">
            ADD 
           
        </button>
    </div>
</div >
</div>

   
   <div>
   </div>  
    </div>
    </div>
  )
}
