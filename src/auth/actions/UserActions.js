import axios from 'axios';
import { sessionService } from 'redux-react-session';
import { useState } from 'react';
// import {useHistory} from 'react-router-dom'
// const history = useHistory();

export const loginUser = (credentials,history,setFieldError,setSubmitting) => {
 return() => {
    axios.post("https://loginserver21.herokuapp.com/user/signin",
    credentials,
    {
        headers : {
            "Content-Type" : 'application/json'
        }
    })
//     const[email, setEmail] = useState("")
//   const[password, setPassword] = useState("")
//   let item = {email,password}
//     fetch("https://loginserver21.herokuapp.com/user/signin",{
//       method: 'POST',
//       body: JSON.stringify(item),
//       headers:{
//         "Content-Type":'application/json',
//         "Accept":'application/json'
//       }
    .then((response) => {
        const{data} = response;
        console.log(data);
        if(data.status.includes('FAILED')) {
            const {message} = data;
            if(message.includes("credentials")){
                setFieldError("email",message)
                setFieldError("password",message)
            }else if(message.includes("password")){
                setFieldError("password",message)
            }
        }
     else{
            const userData = data.data[0];
            const token = userData._id;

            sessionService.saveSession(token).then(() => {
               sessionService.saveUser(userData).then(() => {
                   history.push('/dashboard')
               }).catch((err) => {console.log(err)})
            }).catch((err) => {console.log(err)})
        }
        setSubmitting(false)

    }).catch((err) => {console.log(err)})

}
}

export const signupUser = (credentials,history,setFieldError,setSubmitting) => {
    // const history = useHistory();
    return(dispatch) => {
    axios.post("https://loginserver21.herokuapp.com/user/signin",
    credentials,
    {
        headers : {
            "Content-Type" : 'application/json'
        }
    }).then((response) => {
        const {data} = response

       if(data.status === "FAILED"){
          const{message} = data;

          if(message.includes("name")){
                setFieldError('name',message)}
                else if(message.includes("email")){
                    setFieldError('email',message)}
                 else if(message.includes("date")){
                    setFieldError('dateOfBirth',message)
                 }else if(message.includes("password")){
                     setFieldError('password',message)}
                     setSubmitting(false);
                 }

            else if(data.status === "SUCCESS"){
                const {email,password} = credentials;
                dispatch(loginUser({email,password},history,setFieldError,setSubmitting))
                
            }
    }).catch((err) => {console.log(err)})
}
}

export const logoutUser = () => {
    
}