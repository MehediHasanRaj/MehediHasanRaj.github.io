import {useState} from "react";

import {useAuth} from "../../security/AuthContext";

export default function DeleteByIdComponent(){
    const [id, setId] = useState(-1); // this is for deleting id
    const authContext = useAuth()

    function handleIdChange(e) {
        setId(e.target.value);  //if we write in form, it will update the defaul value
        console.log(id)
    }

    function handleDeleteProjectSubmit() {
        authContext.apiClient.delete(`/api/projects/${id}`)
            .then(res => {console.log(res)})
            .catch(err => console.log(err));

    }
    function handleDeleteBlogSubmit() {

        authContext.apiClient.delete(`/api/blogs/${id}`)
            .then(res => {console.log(res)})
            .catch(err => console.log(err));


    }
    function handleDeleteCertificateSubmit() {
        authContext.apiClient.delete(`/api/certificates/${id}`)
            .then(res => {console.log(res)})
            .catch(err => console.log(err));

    }
    function handleDeleteContactSubmit() {
        authContext.apiClient.delete(`/api/contacts/${id}`)
            .then(res => {console.log(res)})
            .catch(err => console.log(err));

    }

    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            <div>
                <div><h1>Delete Actions</h1></div>
                <hr/>
                <div style={{textAlign: 'justify', padding: '10px'}}>
                    <div>
                        <label> <b>Project id: </b></label>
                        <input type="number" name="id" placeholder="Enter project ID" onChange={handleIdChange}/>
                        <button type="button" className={"button-85"} name="submit" style={{padding:'4px'}}
                                onClick={handleDeleteProjectSubmit}>Submit
                        </button>
                    </div>
                    <br/>

                    <div>
                        <label><b> blog id: </b></label>
                        <input type="number" name="id" placeholder="Enter blog ID" onChange={handleIdChange}/>
                        <button type="button" className={"button-85"} name="submit" style={{padding:'4px'}}
                                onClick={handleDeleteBlogSubmit}>Submit
                        </button>
                    </div>
                    <br/>

                    <div>
                        <label> <b>Certificate id: </b></label>
                        <input type="number" name="id" placeholder="Enter certificate ID" onChange={handleIdChange}/>
                        <button type="button" className={"button-85"} style={{padding:'4px'}} name="submit"
                                onClick={handleDeleteCertificateSubmit}>Submit
                        </button>
                    </div>

                    <br/>

                    <div>
                        <label> <b>Contact id: </b></label>
                        <input type="number" name="id" placeholder="Enter Contact ID" onChange={handleIdChange}/>
                        <button type="button" className={"button-85"} style={{padding:'4px'}} name="submit"
                                onClick={handleDeleteContactSubmit}>Submit
                        </button>
                    </div>


                </div>
            </div>

        </>
    )
}