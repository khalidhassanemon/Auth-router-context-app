import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
const Register = () => {
    const {createUser,signInwithGoogle}=useContext(AuthContext)
    // console.log("CreateUser",createUser);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log('registered User = ',user);
            form.reset();
        })
        .catch(error=>{
            console.log('error',error);
        })
    }
    const handleGoogleSignIn=()=>{
        signInwithGoogle()
       .then(result=>{
        const user=result.user;
        console.log(user);
       })
       .catch(error=>console.error('Error',error));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register now!</h1>
                        <p className="py-6">Register with your Email</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/login' href="#" className="label-text-alt link link-hover">Already Have an Account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-success">Google Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;