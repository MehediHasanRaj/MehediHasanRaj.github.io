import '../css/button85.css'
import {useState, useRef} from "react";
import emailjs from 'emailjs-com';
export default function ContactComponent() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        emailjs.sendForm('service_iaj8wmu', 'template_c08eeih', form.current, '0VHPUv4Hu-_UBApO4')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.error('Error sending email:', error.text);
                alert('Failed to send the message, please try again.');
            });
    };
    // const [contact, setContact] = useState(
    //     {
    //         name:'',
    //         email:'',
    //         message:''
    //     }
    // )
    // const form = useRef();
    // const authContext = useAuth()
    //
    //
    // function handleContactChange(event){
    //     const {name, value} = event.target;
    //         setContact({
    //             ...contact,
    //             [name]: value, // Update text input fields
    //         });
    //
    // }

    // async function submitContact(event) {
    //     event.preventDefault(); // Prevent form submission from reloading the page
    //
    //     const contactData = {
    //         name: contact.name,
    //         email: contact.email,
    //         message: contact.message,
    //     };
    //
    //
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    //         .then((result) => {
    //             console.log('Email sent successfully:', result.text);
    //             alert('Message sent successfully!');
    //         }, (error) => {
    //             console.error('Error sending email:', error.text);
    //             alert('Failed to send the message, please try again.');
    //         });
    //
    // }
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
                            <form ref={form} style={{textAlign: 'left'}} onSubmit={sendEmail}>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="from_name"
                                       placeholder="Your name.."/>

                                <label htmlFor="email">Email</label>
                                <input type="email" name="user_email"
                                       placeholder="Your email.."/>

                                <label htmlFor="subject">Message</label>
                                <textarea name="message" placeholder="Write something.." rows="6"
                                          ></textarea>
                                <button className='button-85' type="submit">Send</button>
                            </form>
                        </div>
                    </div>



                {/*<div className="lightBg" style={{paddingTop: '50px', paddingBottom: '30px'}}>*/}
                {/*    <div className="container">*/}
                {/*        <form  style={{textAlign:'left'}} onSubmit={submitContact}>*/}
                {/*            <label htmlFor="name" >Name</label>*/}
                {/*            <input type="text" name="name" onChange={handleContactChange} placeholder="Your name.."/>*/}

                {/*            <label htmlFor="email">Email</label>*/}
                {/*            <input type="email"  name="email" onChange={handleContactChange} placeholder="Your email.."/>*/}

                {/*            <label htmlFor="subject">Message</label>*/}
                {/*            <textarea  name="message" placeholder="Write something.." rows="6" onChange={handleContactChange}></textarea>*/}
                {/*            <button className='button-85' type={"submit"} value={"submit"} >Submit</button>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </>
    )
}