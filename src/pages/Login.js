import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="card mb-4" id="forms">
            <div className="card-body">
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="inputEmail3">Email</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="inputEmail3" type="email" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="inputPassword3">Password</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="inputPassword3" type="password" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                    <button className="btn btn-primary" type="submit">Sign in</button>
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