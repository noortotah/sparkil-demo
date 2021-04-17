import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const loginHandler = (event, history) => {
    event.preventDefault();
    toast.success('Login Successfully!');
    history.push({
        pathname: '/lenders'
    });

}
const Login = (props) => {
  return (
      <div className="login-container" style={{height: '600px'}}>
          <div className="container h-100">
            <div className="row h-100 d-flex justify-content-center align-items-center">
                <div className="col-md-6 m-auto p-5">
                <NavLink className="d-block text-center mb-4" to="/">
                    <img src="spark_logo.svg" alt="spark-logo"/>
                </NavLink>
                  <form method="post" onSubmit={(event) => loginHandler(event,props.history)}>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                      {/* <small id="emailHelp" className="form-text text-muted">
                        Email that you have used while registration.
                      </small> */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    {/* <div className="form-check">
                      <input type="checkbox" name="checkbox" className="form-check-input" id="remember" />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div> */}
                    <button type="submit" className="col-2 btn btn-primary float-right">
                      Login
                    </button>
                  </form>
                </div>
            </div>
            </div>
      </div>
    
  );
};

export default Login;
