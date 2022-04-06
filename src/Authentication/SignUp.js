import React,{useState} from 'react';
// import {useHistory} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import * as yup from 'yup';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SignUp() {
  const [name,setName] = useState('')
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[dateOfBirth , setDateOfBirth] = useState("")
  const history = useHistory();

const Register = async(item) => {
  // let item = {name,email, password,dateOfBirth}
  let result = await 
  fetch("https://loginserver21.herokuapp.com/user/signup",{
      method: 'POST',
      body: JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
   result =await result.json()
    localStorage.setItem('user-info',JSON.stringify(result))
    if(result.status.includes('PENDING')){
      history.push('/email')
    }
    else {
      history.push('/failed')
    }
    console.log(result,'result')
  }

  const formValidationSchema=yup.object({
    name:yup.string().min(0).required('Username is required'),
    email: yup.string().email('Invalid email format').required('No email provided'),
    password:yup.string().min(8).required('password is required'),
    dateOfBirth:yup.date().required('Date Of Birth is required'),
  })

  const formik = useFormik({
    initialValues:{name: "",email: "",password: "",dateOfBirth:""},
    validationSchema : formValidationSchema,
    onSubmit :(item) => {
      console.log("onSubmit",item)
      setName(item.name)
      setEmail(item.email)
      setPassword(item.password)
      setDateOfBirth(item.dateOfBirth)
      Register(item)
    }
  })


  return (
       <div>
          <Card sx={{ minWidth: 350,minHeight:530,backgroundColor: '#b9b9b9' ,color: 'white' }}className="success-msg">
             <CardContent>
                 <Typography variant="h4" component="div">
                 Create your account
                 </Typography>
              </CardContent>
            <form onSubmit={formik.handleSubmit} >
                <TextField sx={{ m: 1, width: '35ch' }} variant="outlined"
                label="Username"
                value={formik.values.name}
                id='name'
                name='name'
                type="text"
                placeholder="Username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name ? formik.errors.name : " "}
                />
                <br />
                
                

              <TextField sx={{ m: 1, width: '35ch' }} variant="outlined"
                label="Email"
                value={formik.values.email}
                id='email'
                name='email'
                type="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : " "} />
                < br/>

                <TextField sx={{ m: 1, width: '35ch' }} variant="outlined"
                label="Password"
                value={formik.values.password}
                id='password'
                name='password'
                type="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : " "}
                />
                <br />
                
                <TextField sx={{ m: 1, width: '35ch' }} variant="outlined"
                value={formik.values.dateOfBirth}
                id='dateOfBirth'
                name='dateOfBirth'
                type="date"
                placeholder="Enter your date of birth"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth ? formik.errors.dateOfBirth : " "} />
                    
                <div className="login-btn">
                    <Button type="submit" variant="contained" onClick={Register}>Submit</Button>
                    {/* <Button variant="contained" onclick={()=>history.push('/Signup')}>SignUp</Button> */}
                </div>
                </form>
                </Card>
                </div>
  )
}
