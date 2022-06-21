
import React, { Component } from "react";
import { logIn } from "../api";
import { signInType } from "../type";


class SignIn extends Component<any/*props */,signInType/*state*/>{
    constructor(prop:any){
        super(prop)
        this.state={
            account:'',
            password:''
        }
        this.handleAccount=this.handleAccount.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
        this.submit=this.submit.bind(this)
        
    }
    componentDidMount():void{
        //here is run only once first render
        console.log('here is componentDidMount')
    }
    componentDidUpdate():void{
        //here is run in every render
        console.log('componentDidUpdate',this.state)
    }
    private handleAccount(event:React.ChangeEvent<HTMLInputElement>):void{
        this.setState({account:event.target.value})
    }
    private handlePassword(event:React.ChangeEvent<HTMLInputElement>):void{
        this.setState({password:event.target.value})
    }
    private submit():void{
        console.log('\n\n登入的帳號是....\n',this.state,'\n')
        logIn(this.state)
    }

    render():JSX.Element{
        return(
            <>
            <div className="sign_in">
                <div>
                    <div>
                        <input onInput={this.handleAccount} value={this.state.account} placeholder="account" type={'text'}/><br/>
                        <input onInput={this.handlePassword} value={this.state.password} placeholder="password" type={'text'}/>
                    </div>
                    <div>
                        <h5>here is the doggy book welcome</h5>
                    </div>
                    <div>
                        <button onClick={this.submit}>Sign In</button>
                    </div>
                </div>
            </div>
            </>)
    }
}

export default SignIn;