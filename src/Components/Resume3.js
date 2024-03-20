import React from 'react'
import './Resume3.css'
export default function Resume3() {
  return (
    <div className='wrapper'>
        <div style={{margin:"30px"}}>

       
        <div style={{display:'flex',justifyContent:"space-between"}}>
        <div>
        <div className='Name'>
       <h4>Neelesh Singh</h4> 
      </div>
      <div className='DOB'>
       <span style={{fontWeight:"600"}}>Date of Birth: 09th October,1986</span> 
      </div>
      <div className='JEE'>
      <span style={{fontWeight:"600"}}>JEE 2006 rank: 1158</span>
      </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start"}}>
            <div className='Address'>
            <span style={{fontWeight:"600"}}>Address: </span><span>F-101,Hall 1,IIT Kanpur</span>
            </div>
            <div className='Email'>
            <span style={{fontWeight:"600"}}>Email: </span><span style={{marginLeft:"5px"}}>singalnh@gmail.com</span>
            </div>
            <div className='Phone'>
            <span style={{fontWeight:"600"}}>Phone: </span ><span style={{marginLeft:"5px"}}>9778096019</span>
            </div>
           
        </div>
     
    </div>

    <div className='educations'>
    <div style={{backgroundColor:"lightgrey",marginTop:"20px"}}>
            <span style={{fontWeight:"bold",fontSize:"large"}}>EDUCATION</span>
        </div>
    <table style={{border:"1px solid black",marginTop:"20px"}}>
        <tr style={{border:"1px solid black"}}>
        <th style={{border:"1px solid black"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            Year
            </div>
            
            </th>
        <th style={{border:"1px solid black"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            Degree/Certificate
            </div>
           </th>
        <th style={{border:"1px solid black"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        Institute/School,City
            </div>
            </th>
        <th style={{border:"1px solid black"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            CPI
            </div>
           
            </th>
        </tr>
       
        <tr style={{border:"1px solid black"}}>
            <td style={{border:"1px solid black"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <span style={{fontWeight:"500"}}> 2021-2025</span>
       
            </div>
                </td>
            <td style={{border:"1px solid black"}}> 
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <span style={{fontWeight:"500"}}>BTech In Computer Science</span>
            </div></td>
            <td style={{border:"1px solid black"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <span style={{fontWeight:"500"}}> IIT Bombay</span>
            </div>
                
                </td>
            <td style={{border:"1px solid black"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <span style={{fontWeight:"500"}}> 8.9/10</span>
           
            </div>
               
                </td>
        </tr>
    </table>
    </div>

    <div className='achievements'>
        <div style={{backgroundColor:"lightgrey",marginTop:"20px",marginBottom:"10px"}}>
            <span style={{fontWeight:"bold",fontSize:"large"}}>ACHIEVEMENTS</span>
        </div>
       
    <li>Received Certificate of merit for scoring the highest marks in Home district</li>
    <li>Received Certificate of merit for scoring the highest marks in Home district</li>
    <li>Received Certificate of merit for scoring the highest marks in Home district</li>
    <li>Received Certificate of merit for scoring the highest marks in Home district</li>

    </div>

    <div className='internships'>
    <div style={{backgroundColor:"lightgrey",marginTop:"20px"}}>
         <span style={{fontWeight:"bold",fontSize:"large"}}>INTERNSHIPS</span>
    </div>
    <div>
   <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
     <h6 style={{fontSize:"medium",fontWeight:"bold"}}>BHABA ATOMIC RESEARCH CENTER</h6>
     <span style={{marginRight:"20px"}}>May 6 - June 12</span>
   </div>
   <li style={{fontWeight:"450"}}>Developed a new technique called pseudo transmission having multiple advantages over normal techniques</li>
   <li style={{fontWeight:"450"}}>Developed a new technique called pseudo transmission having multiple advantages over normal techniques</li>
   <li style={{fontWeight:"450"}}>Developed a new technique called pseudo transmission having multiple advantages over normal techniques</li>
   </div>
    </div>

    <div className='projects'>
    <div style={{backgroundColor:"lightgrey",marginTop:"20px"}}>
         <span style={{fontWeight:"bold",fontSize:"large"}}>KEY ACADEMIC PROJECTS AND COURSES</span>
    </div>

    <div>
   <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
     <h6 style={{fontSize:"medium",fontWeight:"bold"}}>ELECTROCHEMICAL FABRICATION OF NANOMATERIALS</h6>
     <span style={{marginRight:"20px"}}>May 6 - June 12</span>
   </div>
   <li style={{fontWeight:"450"}}>Studied and presented various mechanisms for electrochemical methods of fabricating nanomaterials </li>
   <li style={{fontWeight:"450"}}>Created a critical overview and database of ongoing work</li>
   <li style={{fontWeight:"450"}}>Developed a new technique called pseudo transmission having multiple advantages over normal techniques</li>
   </div>

    </div>

    <div className='responsibility'>
    <div style={{backgroundColor:"lightgrey",marginTop:"20px"}}>
         <span style={{fontWeight:"bold",fontSize:"large"}}>POSITIONS OF RESPONSIBILITY</span>
    </div>
    <div>
   <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
     <h6 style={{fontSize:"medium",fontWeight:"bold"}}>COORDINATOR,CHEMINEERS SOCIETY,IIT KANPUR</h6>
     <span style={{marginRight:"20px"}}>May 6 - June 12</span>
   </div>
   <li style={{fontWeight:"450"}}>Successfully organised the freshers night for 2008 batch </li>
   <li style={{fontWeight:"450"}}>Successfully organised the farwell for the batch of 2012</li>
   <li style={{fontWeight:"450"}}>Developed a new technique called pseudo transmission having multiple advantages over normal techniques</li>
   </div>
 
    </div>

    <div className='hobbies'>
    <div style={{backgroundColor:"lightgrey",marginTop:"20px"}}>
         <span style={{fontWeight:"bold",fontSize:"large"}}>HOBBIES AND INTERESTS</span>
    </div>
    <li style={{fontWeight:"450"}}>Play and follow cricket regularly </li>
    <li style={{fontWeight:"450"}}>Avid interests and command over c,java,Data Structures </li>
    </div>

    
    </div>
    </div>
    
  )
}
