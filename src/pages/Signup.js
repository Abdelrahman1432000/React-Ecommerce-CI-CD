import { all } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [newUser,setNewUser] = useState({
        userName:'',
        email:'',
        password:'',
        rePassword:''
    })

    const [error,setError] = useState({})

    const handleForm = (e) => {
        let errorFound = false;
        let errorMessage = '';
        switch (e.target.name) {
            case 'userName':
                if(e.target.value.length < 2){
                    errorFound = true;
                    errorMessage = 'Must be more than 2 char'
                }
                break;
            case 'email':
                if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)){
                    errorFound = true
                    errorMessage = 'Invalid Email'
                }
                break;
            case 'rePassword':
                if(e.target.value !== newUser.password){
                    errorFound = true
                    errorMessage = "Password must be match"
                }
                break;
            default:
                break;
        }
        if(!errorFound){
            setNewUser({
                ...newUser,
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
        console.log(newUser)
        const allUser = localStorage.getItem('allUser')
        allUser.forEach(user => {
            if(user.email === newUser.email){
                setError({
                    ...error,
                    duplicate: "Email Already Exist"
                })
            }else{
                localStorage.setItem('allUser',[
                    ...allUser,
                    newUser
                ])
                
            }
        });
    }



    return (
        <div className="card mb-4" id="forms">
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="userName">UserName</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="userName" type="text" placeholder="UserName" name="userName" onChange={(e) => handleForm(e)}/>
                    <span className="text-danger">{error.userName}</span>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="Email">Email</label>
                    <div className="col-sm-10">
                    <input className="form-control" name="email" id="Email" type="email" placeholder="Email" onChange={(e) => handleForm(e)}/>
                    <span className="text-danger">{error.email}</span>

                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="Password">Password</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="Password" type="password" placeholder="Password" name="password" onChange={(e) => {
                        setNewUser({
                            ...newUser,
                            password:e.target.value
                        })
                    }}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="re-password">Re-Password</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="re-password" type="password" placeholder="Password" name="rePassword" onChange={(e) => handleForm(e)}/>
                    <span className="text-danger">{error.rePassword}</span>

                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                    <button className="btn btn-primary" type="submit" disabled={Object.values(error).length > 0 ? true : false}>Sign Up</button>
                    </div>
                </div>
                <Link to='/login'>
                    have Already account Login now
                </Link>
            </form>
        </div>
    </div>
    );
}

export default Signup;