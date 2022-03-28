import React from 'react';
import './pages.css'
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import * as yup from 'yup';
import {connect} from "react-redux";
import { signupUser } from './../auth/actions/UserActions';



const SignUp = (signupUser) =>{
       const history = useHistory();

          const formValidationSchema=yup.object({
            username:yup.string().min(0).required('Username is required'),
            email: yup.string().email('Invalid email format').required('Required'),
            password:yup.string().min(5).required('password is required'),
            dob:yup.date().min(0).required('dob is required'),
          })

          const formik = useFormik({
            initialValues:{ username: "",email: "",password: "",dob:""},
            validationSchema : formValidationSchema,
            onSubmit :(values,{setSubmitting,setFieldError},) => {
              console.log("onSubmit",values)
              signupUser(values,history,setFieldError,setSubmitting)
            }
          })
    
        return (
          <div>
          
        <div className="">
            <h1>Welcome to our app</h1>
            <div className="form">

                <TextField sx={{ m: 1, width: '35ch' }} variant="outlined"
                value={formik.values.username}
                id='username'
                name='username'
                type="text"
                placeholder="Username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && formik.errors.username}
                helperText={formik.touched.username && formik.errors.username ? formik.errors.username : " "}
                />
                <br />
                
                

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
                
                <TextField sx={{ m: 1, width: '35ch' }} variant="outlined"
                value={formik.values.dob}
                id='dob'
                name='dob'
                type="date"
                placeholder="DOB"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.dob && formik.errors.dob}
                helperText={formik.touched.dob && formik.errors.dob ? formik.errors.dob : " "} />
                    
                <div className="login-btn">
                    <Button type="submit" variant="contained" onClick={()=>history.push('/submit')}>Submit</Button>
                    {/* <Button variant="contained" onclick={()=>history.push('/Signup')}>SignUp</Button> */}
                </div>
                </div>
            </div>
            </div>
    )
              }

              export default connect(null,{signupUser})(SignUp); 