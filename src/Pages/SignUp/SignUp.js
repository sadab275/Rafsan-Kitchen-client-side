import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();

    }
    return (
        <div className="hero w-full">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
                    <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <p>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;