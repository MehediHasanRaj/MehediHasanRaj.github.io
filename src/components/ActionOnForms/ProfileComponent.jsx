import {useState} from "react";

import {useNavigate} from "react-router-dom";
import {useAuth} from "../../security/AuthContext";

export default function ProfileComponent() {

    const navigate = useNavigate();
    const authContext = useAuth();

    const [profile, setProfile] = useState({
        // profilePicLink: null,
        resume:null,
        bio:'',
    });
    // profile
    const handleProfilehange = (event) => {
        const {name, value, type} = event.target;
        // eslint-disable-next-line react-hooks/rules-of-hooks

        if (type === "file") {
            // For the file input (image), we need to handle files
            setProfile({
                ...profile,
                [name]: event.target.files[0], // Store the file object
            });
        }
        else {
            setProfile({
                ...profile,
                [name]: value, // Update text input fields
            });
        }
    };



    const handleProfileSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append each field to FormData
        formData.append("bio", profile.bio);

        // Ensure the image is being appended properly
        if (profile.resume) {
            formData.append("resumeLink", profile.resume);
        }

        // if(profile.profilePicLink){
        //     formData.append("profilePicLink", profile.profilePicLink);
        // }

        try {
            // Send the request using Axios
            const response = authContext.apiClient.post("/api/profile", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // Handle success
            // console.log("Success:", response.data);
            navigate('/')
        } catch (error) {
            // Handle error
            console.error("Error:", error.response || error.message);
        }

    };




    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <h1>Profile</h1>
                <hr/>
                <form onSubmit={handleProfileSubmit} style={{paddingTop: '10px', textAlign: 'justify'}}>
                    <div style={{padding: '10px'}}>
                        <label htmlFor="bio"><b>Profile Bio: </b></label>
                        {/*<input type="input" name="bio" onChange={handleProfilehange}/>*/}
                        <textarea name="bio" placeholder="Write bio.." rows="6"
                                  onChange={handleProfilehange}></textarea>
                    </div>


                    {/*<div style={{padding: '10px'}}>*/}
                    {/*    <label htmlFor="profilePicLink"><b>Upload Image: </b></label>*/}
                    {/*    <input type="file" name="profilePicLink" onChange={handleProfilehange}/>*/}
                    {/*</div>*/}

                    <div style={{padding: '10px'}}>
                        <label htmlFor="resume"><b>Upload Resume: </b></label>
                        <input type="file" name="resume" onChange={handleProfilehange}/>

                    </div>

                    <button type="submit" className={'button-85'}><b>Update</b></button>
                </form>

            </div>

        </>
    )
}