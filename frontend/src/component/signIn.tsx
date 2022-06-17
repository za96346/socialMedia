const SignIn=():JSX.Element=>{
    return(
    <>
    <div className="sign_in">
        <div>
            <div>
                <input placeholder="account" type={'text'}/><br/>
                <input placeholder="password" type={'text'}/>
            </div>
            <div>
                <h5>here is the doggy book welcome</h5>
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </div>
    </div>
    </>)
}
export default SignIn;