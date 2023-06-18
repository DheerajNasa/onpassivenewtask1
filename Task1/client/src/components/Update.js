import React,{useEffect, useRef, useState} from 'react'

function Update() {
    let emailRef = useRef();
let genderRef = useRef();
let profilePicRef = useRef();
let contactRef = useRef();
let skillsRef = useRef();
const [data,setData]= useState([]);
useEffect(()=>{getDataFromServer()},[])
    // useEffect(()=>{
        
    //     let storedEmail = localStorage.getItem("email");
    //     let storedPassword = localStorage.getItem("password");
       
    //     if(storedEmail)
    //     {
    //       emailInputRef.current.value = storedEmail;
    //       passwordInputRef.current.value = storedPassword;
      
    //     }
    //   },[]);

    let updateData = async()=>{
        let fd = new FormData();
    //   fd.append("email",localStorage.getItem("email"));
      fd.append("email",emailRef.current.value);
      fd.append("gender",genderRef.current.value);
      fd.append("contact",contactRef.current.value);
      fd.append("skills",skillsRef.current.value);
      fd.append("profilePic",profilePicRef.current.files[0]);


      let reqOptions = {
        method:"PUT",
        body:fd
    }

    let JSONData = await fetch("http://localhost:1008/updateUser",reqOptions);
    let JSOData = await JSONData.json();
    console.log(JSOData)
    }

    let getDataFromServer=async()=>{
        let reqOptions = {
            method:"GET"
        }
        let JSONData = await fetch("http://localhost:1008/getData",reqOptions);
        let JSOData = await JSONData.json();
        console.log(JSOData)
        setData(JSOData)
    }

  return (
    <div>
        <form>
            <div>
            <input ref={emailRef} type="text" placeholder='Email' />
            </div>

            <div>
            <input ref={genderRef} type="text" placeholder='Gender' />
            </div>

            <div>
            <input ref={contactRef} type="number" placeholder='Contact' />
            </div>

            <div>
            <input ref={skillsRef} type="text" placeholder='Skills' />
            </div>

            <div>
            <input ref={profilePicRef} type="file" placeholder='ProfilePic' />
            </div>

            <button type='button'onClick={()=>{updateData()}}>Update</button>
        </form>

        {data.map((e)=>{
            return(
                <div>
                <img src={`http://localhost:1008/${e.profilePic}`} alt="Profile Pic" />
                <h1>{e.name}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Update