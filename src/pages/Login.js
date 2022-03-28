import React from 'react';
import './pages.css'
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import * as yup from 'yup';
import {connect} from "react-redux";
import { loginUser } from './../auth/actions/UserActions';



const Login = ({loginUser}) =>{
    const history = useHistory();
    const formValidationSchema=yup.object({
      email: yup.string().email('Invalid email format').required('Required'),
      password:yup.string().min(5).required('password is required')
    })

    const formik = useFormik({
      initialValues:{email: "",password: ""},
      validationSchema : formValidationSchema,
      onSubmit :(values,{setSubmitting,setFieldError},) => {
        console.log("onSubmit",values)
        loginUser(values,history,setFieldError,setSubmitting)
      }
    })
      
    return (
      <div>
      
    <div className="">
        <h1>Welcome to our app</h1>
        <form className="form">

        <TextField sx={{ m: 1, width: '35ch' }} variant="outlined"
                value={formik.values.email}
                id='email'
                name='email'
                type="email"
                placeholder="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : " "} />
                < br/>

                <TextField sx={{ m: 1, width: '35ch' }} variant="outlined"
                value={formik.values.password}
                id='password'
                name='password'
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : " "}
                />
                <br />

                  
                <div className="login-btn">
                    <Button type="submit" variant="contained" >Login</Button>
                    {/* <Button variant="contained" onclick={()=>history.push('/Signup')}>SignUp</Button> */}
                </div>
            </form>
                </div>
            </div>
    )
    }
    



//     /* // return (
//     // <div className="">
//     //     <h1>Welcome to our app</h1>
//     //     <div className="form">

//     //         <Formik */
//      //        initialValues ={{

//     //             email :"",password:""
//     //             }}
//     //             validationSchema={
//     //               yup.object({
//     //                 email: yup.string().email('Invalid email format').required('Required'),
//     //                 password:yup.string().min(5).required('password is required')
//     //               })
//     //             }
//     //           onSubmit={(values,{setSubmitting,setFieldError}) => {
//     //             console.log(values)
//     //             loginUser(values,history,setFieldError,setSubmitting)
//     //           }}
//     //           >
//     //           {({isSubmitting}) => (
//     //             <Form>
//     //               <TextField 
//     //               name='email'
//     //               type="email"
//     //               label="Email Address"
//     //               placeholder="Suhain132@gmail.com" />

//     //               <TextField 
//     //               name='password'
//     //               type="password"
//     //               label="password"
//     //               placeholder="********" />

//     //             <Button type="submit" variant="contained" >Login</Button>
//     //             <Button variant="contained" onClick={() => history.push('/signup')}>SignUp</Button>
            
//     //             </Form>
//     //           )}
//     //         </Formik>
//     //         </div>

//     //     </div>
//     // )


export default connect(null,{loginUser})(Login)

// import React,{useState} from 'react';
// import {useHistory} from "react-router-dom";
// // import { useNavigate } from "react-router-dom";

// export default  function Login() {
//   const[email, setEmail] = useState("")
//   const[password, setPassword] = useState("")
//   const history = useHistory();
//   async function LoginUser(){
//     let item={email,password}
//     console.warn(item)
//   let result = await 
//   fetch("https://loginserver21.herokuapp.com/user/signin",{
//       method: 'POST',
//       body: JSON.stringify(item),
//       headers:{
//         "Content-Type":'application/json',
//         "Accept":'application/json'
//       }
//     })
//     // .then((response) => response.json())
//     // .then((result) => console.log(result))
//     // .catch((error) => console.error(error))
    
//     result =await result.json()
//     localStorage.setItem('user-info',JSON.stringify(result))
//     console.log(result,'result')
//     history.push('/menu')
//   }
//   return (
//     <div>
//         <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>< br />
//         <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>< br />
//         <button onClick={LoginUser}>Signin</button>
//     </div>
//   )
// }
