import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
class SignUp extends Component{
    constructor(props:any){
        super(props)
        this.state={}
    }

    render(): JSX.Element {
        return(
            <>
                <div className="sign_up">
                    <div>
                        <div>
                            <h3>Sign Up</h3><br/>
                            <span>
                                By continuing,you are setting up a doggy book<br/>
                                account and agree to our<br/>
                                <Link to='/' style={{color:'#c79bf0'}}>User Agreement</Link><br/>
                                and<br/>
                                <Link to='/' style={{color:'#c79bf0'}}>Private Policy</Link> 
                                
                            </span>
                        </div>
                        <div>CONTINU WITH GOOGLE</div>
                        <div>CONTINU WITH APPLE</div>
                        <div>
                            <input placeholder="Email"/>
                            <input placeholder="User Name"/>
                            <input placeholder="Password"/>
                            <input placeholder="Password Again"/>
                            
                        </div>
                        <div>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </>)
    }
}

export default SignUp;