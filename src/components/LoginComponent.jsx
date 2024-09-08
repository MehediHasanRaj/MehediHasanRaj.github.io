import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../security/AuthContext";


export default function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate(); // use to redirect the url

    const authContext = useAuth(); // for using the authentication state

    function handleUsernameChange(e) {
        setEmail(e.target.value);  //if we write in form, it will update the defaul value
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);  //if we write in form, it will update the defaul value
    }

    function handleSubmit() {

        if (authContext.login(email, password)) {
            navigate(`/admin`);
        } else {
            setShowErrorMessage(true);
        }
    }

    return(
        //
        // <>
        //     <br/> <br/> <br/>
        //     <h1>Time to Login!!</h1>
        //     {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credntial</div>}
        //     <div>
        //
        //         <div className="form-group">
        //             <label htmlFor="email">Email address</label>
        //             <input type="email" className="form-control" name="email" aria-describedby="emailHelp"
        //                    placeholder="Enter email" onChange={handleUsernameChange}/>
        //
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="password">Password</label>
        //
        //             <input type="password" className="form-control" name="password" placeholder="Password" onChange={handlePasswordChange}/>
        //         </div>
        //         <br/>
        //         <button type="button" className={"button-85"} name="login" onClick={handleSubmit}>Login</button>
        //     </div>
        //
        //
        // </>
        <div>
            <br/> <br/> <br/>
            <h1>Time to Login!!</h1>


            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credntial</div>}
            <section>
                <div className="lightBg" style={{paddingTop: '50px', paddingBottom: '30px'}}>
                    <div className="container">
                        <form style={{textAlign: 'left'}}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" onChange={handleUsernameChange} placeholder="Your email.."/>

                            <label htmlFor="password" style={{paddingBottom:'5px', textAlign:'left'}}>Password</label><br/>

                            <input type="password" name="password" style={{padding:'10px'}} placeholder="Password" onChange={handlePasswordChange}/>
                            <br/> <br/>

                            <button className='button-85' name="login" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
            {/*<div className={"form-group"}>*/}
            {/*    <div>*/}
            {/*        <label>Username: </label>*/}
            {/*        <input type={"text"} name="email"*/}
            {/*               onChange={handleUsernameChange}/>*/}
            {/*    </div>*/}


            {/*    <div>*/}
            {/*        <label>Password: </label>*/}
            {/*        <input type="password" name="password" placeholder="password"*/}
            {/*               onChange={handlePasswordChange}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <br/>*/}
            {/*        <button type="button" className={"button-85"} name="login" onClick={handleSubmit}>Login</button>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>


    )
}