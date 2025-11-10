import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../security/AuthContext";
import axios, {Axios} from "axios";



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

    async function handleSubmit(event) {
        event.preventDefault();


        const data = {
            email: email,
            password: password,
        };

        try {
            // Wait for the API request to complete

            const response = await axios.post(`${authContext.baseUrl}/api/login`, data, {
                headers: {
                    "Content-Type": "application/json", // Set the correct content type
                },

            }).then(response => {console.log("Success:", response.data)
                if (response.data==="authenticated") {
                    authContext.setAuthenticated(true);
                    navigate(`/admin`)
                } else {
                    setShowErrorMessage(true);
                }
            });

        } catch (err) {
            setShowErrorMessage(true);
            navigate('/');
        }
    }

    return(

        <div>
            <br/> <br/> <br/>
            <h1>Time to Login!!</h1>

            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credntial</div>}
            <section>
                <div className="lightBg" style={{paddingTop: '50px', paddingBottom: '30px'}}>
                    <div className="container">
                        <form style={{textAlign: 'left'}} onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" onChange={handleUsernameChange} placeholder="Your email.."/>

                            <label htmlFor="password" style={{paddingBottom:'5px', textAlign:'left'}}>Password</label><br/>

                            <input type="password" name="password" style={{padding:'10px'}} placeholder="Password" onChange={handlePasswordChange}/>
                            <br/> <br/>

                            <button className='button-85' >Submit</button>
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