import {useState} from "react";
import axios from "axios";

export default function DeleteByIdComponent(){
    const [id, setId] = useState(-1); // this is for deleting id

    // deleting

    function handleIdChange(e) {
        setId(e.target.value);  //if we write in form, it will update the defaul value
        console.log(id)
    }

    function handleDeleteProjectSubmit() {
        axios.delete(`http://localhost:8080/api/projects/${id}`)
            .then(res => {console.log(res)})
            .catch(err => console.log(err));

    }
    function handleDeleteBlogSubmit() {

        axios.delete(`http://localhost:8080/api/blogs/${id}`)
            .then(res => {console.log(res)})
            .catch(err => console.log(err));


    }
    function handleDeleteCertificateSubmit() {
        axios.delete(`http://localhost:8080/api/certificates/${id}`)
            .then(res => {console.log(res)})
            .catch(err => console.log(err));

    }
    function handleDeleteContactSubmit() {
        axios.delete(`http://localhost:8080/api/contacts/${id}`)
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
                        <label> Project id: </label>
                        <input type="number" name="id" placeholder="Enter project ID" onChange={handleIdChange}/>
                        <button type="button" className={"btn-secondary"} name="submit"
                                onClick={handleDeleteProjectSubmit}>Submit
                        </button>
                    </div>
                    <br/>

                    <div>
                        <label> blog id: </label>
                        <input type="number" name="id" placeholder="Enter blog ID" onChange={handleIdChange}/>
                        <button type="button" className={"btn-secondary"} name="submit"
                                onClick={handleDeleteBlogSubmit}>Submit
                        </button>
                    </div>
                    <br/>

                    <div>
                        <label> Certificate id: </label>
                        <input type="number" name="id" placeholder="Enter certificate ID" onChange={handleIdChange}/>
                        <button type="button" className={"btn-secondary"} name="submit"
                                onClick={handleDeleteCertificateSubmit}>Submit
                        </button>
                    </div>

                    <br/>

                    <div>
                        <label> Contact id: </label>
                        <input type="number" name="id" placeholder="Enter Contact ID" onChange={handleIdChange}/>
                        <button type="button" className={"btn-secondary"} name="submit"
                                onClick={handleDeleteContactSubmit}>Submit
                        </button>
                    </div>


                </div>
            </div>

        </>
    )
}