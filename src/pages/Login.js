import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import RegisterAction from "../store/Actions/RegisterAction";

const Login = () => {
    const [credential,setCredentail] = useState({
        email:'',
        password:''
    })
    const [error,setError] = useState({
        email:'',
        password:''
    })

    const [notAuthorize,setNotAuthorize] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleForm = (e) => {
        let errorFound = false;
        let errorMessage = '';
        if(e.target.name === 'email'){
            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)){
                errorFound = true
                errorMessage = 'Invalid Email'
            }
        }else if (e.target.name === 'password'){
            if(e.target.value.length === 0){
                errorFound = true
                errorMessage = 'Password Reqired'
            }
        }

        if(!errorFound){
            setCredentail({
                ...credential,
                [e.target.name]: e.target.value
            })
            e.target.classList.remove('border-danger')
            delete error[e.target.name]
            setError({
                ...error,
            })
        }else{
            e.target.classList.add('border-danger')
            setError({
                ...error,
                [e.target.name]: errorMessage
            })
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let allUser = JSON.parse(localStorage.getItem('allUser'))
        if(allUser){
            let user = allUser.find(user => {
                if(user.email === credential.email && user.password === credential.password){
                    return user;
                }else{
                    return null
                }
            })
            if(user){
                setNotAuthorize('')
                dispatch(RegisterAction(user))
                navigate('/')
            }else{
                setNotAuthorize('Invalid Credentail')
            }
        }
    }


    return (
        <div className="card mb-4" id="forms">
            <div className="card-body">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="inputEmail3">Email</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="inputEmail3" type="email" placeholder="Email" name="email"  onChange={(e) => handleForm(e)}/>
                    <span className="text-danger">{error.email}</span>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="inputPassword3">Password</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="inputPassword3" type="password" placeholder="Password" name="password" onChange={(e) => handleForm(e)}/>
                    <span className="text-danger">{error.password}</span>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                    <button className="btn btn-primary" type="submit"  disabled={Object.keys(error).length > 0 ? true : false}>Sign in</button>
                    <span className="text-danger"> {notAuthorize} </span>

                    </div>
                </div>
                <Link to='/signup'>
                    don't have Account Register now
                </Link>
            </form>
            </div>
        </div>
    );
}

export default Login;