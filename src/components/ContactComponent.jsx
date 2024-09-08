

import '../css/button85.css'
import {useState} from "react";
import axios from "axios";
export default function ContactComponent() {
    const [contact, setContact] = useState(
        {
            name:'',
            email:'',
            message:''
        }
    )


    function handleContactChange(event){
        const {name, value} = event.target;
            setContact({
                ...contact,
                [name]: value, // Update text input fields
            });

    }

    async function submitContact(event) {
        event.preventDefault(); // Prevent form submission from reloading the page

        const contactData = {
            name: contact.name,
            email: contact.email,
            message: contact.message,
        };

        try {
            const response = await axios.post("http://localhost:8080/api/contacts", contactData, {
                headers: {
                    "Content-Type": "application/json", // Set the correct content type
                },
            });

            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error:", error.response || error.message);
        }
    }
    return(
        <>

            <div className="projcard-container">
                <section>
                    <br/>
                    <br/>
                    <br/>

                    <h1 className="xlTitle pb-md-3" style={{textAlign: 'justify'}}>Contact</h1>

                </section>
                <hr/>
            </div>

            <section>
                <div className="lightBg" style={{paddingTop: '50px', paddingBottom: '30px'}}>
                    <div className="container">
                        <form  style={{textAlign:'left'}} onSubmit={submitContact}>
                            <label htmlFor="name" >Name</label>
                            <input type="text" name="name" onChange={handleContactChange} placeholder="Your name.."/>

                            <label htmlFor="email">Email</label>
                            <input type="email"  name="email" onChange={handleContactChange} placeholder="Your email.."/>

                            <label htmlFor="subject">Message</label>
                            <textarea  name="message" placeholder="Write something.." rows="6" onChange={handleContactChange}></textarea>
                            <button className='button-85' type={"submit"} value={"submit"} >Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}