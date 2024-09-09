import {useState} from "react";
import axios from "axios";
import {useAuth} from "../../security/AuthContext";


export default function FormAddCertificateComponents() {
    const [certificate, setCertificate] = useState(
        {
            title:'',
            date: new Date(),
            organization:'',
            description:''
        }
    )
    const authContext = useAuth()


    function handleContactChange(event){
        const {name, value} = event.target;
        if(name==='date'){
            setCertificate({
                ...certificate,
                [name]: new Date(event.target.value),
            })
        }
        else {
            setCertificate({
                ...certificate,
                [name]: value, // Update text input fields
            });
        }

    }

    async function submitContact(event) {
        event.preventDefault(); // Prevent form submission from reloading the page

        const blogData = {
            name: certificate.title,
            date: new Date(certificate.date).toISOString().split('T')[0],
            organization: certificate.organization,
            description: certificate.description,
        };

        try {
            const response = await authContext.apiClient.post("/api/certificates", blogData, {
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

                    <h1 className="xlTitle pb-md-3" style={{textAlign: 'justify'}}>Add Certificate</h1>

                </section>
                <hr/>
            </div>

            <section>
                <div className="lightBg" style={{paddingTop: '50px', paddingBottom: '30px'}}>
                    <div className="container">
                        <form style={{textAlign: 'left'}} onSubmit={submitContact}>
                            <label htmlFor="title"><b>Certificate Name</b></label>
                            <input type="text" name="title" onChange={handleContactChange}
                                   placeholder="course name.."/>

                            <label htmlFor="organization"><b>Issued Organization</b></label>
                            <input type="text" name="organization" onChange={handleContactChange}
                                   placeholder="organization.."/>

                            <label htmlFor="date"><b>Date</b></label><br/>
                            <input type="date" name="date" onChange={handleContactChange}
                                   /> <br/><br/>


                            <label htmlFor="description"><b>Course Summary</b></label>
                            <input type="text" name="description" placeholder="Write something.."
                                   onChange={handleContactChange}></input>
                            <button className='button-85' type={"submit"} value={"submit"}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}