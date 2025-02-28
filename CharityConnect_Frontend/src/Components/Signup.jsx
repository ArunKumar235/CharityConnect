const Signup = () => {
    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="firstName" placeholder="FirstName" />
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="lastName" placeholder="LastName" />
                    <label htmlFor="firstName">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="phone" placeholder="PhoneNumber" />
                    <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                    <label htmlFor="password">Password</label>
                </div>
                
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                <hr className="my-4" />
                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                </form>
            </div>
        </div>
    );
}

export default Signup;