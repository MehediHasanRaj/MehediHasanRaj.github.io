import {useMemo, useRef, useState} from "react";
import axios from "axios";
import JoditEditor from "jodit-react";

export default function FormAddBlogComponent() {
    const editor = useRef(null);
    const [description, setDescription] = useState("");



    const [blog, setBlog] = useState({
        title: '',
        author:'',
        tag:'',
        summary:'',
        date: new Date(),
        image: null,
    });
    // blog
    const handleProjectChange = (event) => {
        const {name, value, type} = event.target;
        if (type === "file") {
            // For the file input (image), we need to handle files
            setBlog({
                ...blog,
                [name]: event.target.files[0], // Store the file object
            });
        }else if(name==='date'){
            setBlog({
                ...blog,
                [name]: new Date(event.target.value),
            })
        }
        else {
            setBlog({
                ...blog,
                [name]: value, // Update text input fields
            });
        }
    };



    const handleProjectSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append each field to FormData
        formData.append("title", blog.title);
        formData.append("date", new Date(blog.date).toISOString().split('T')[0]);
        formData.append("author", blog.author);
        formData.append("tag", blog.tag);
        formData.append("summary", blog.summary);

        formData.append("description", description);


        // Ensure the image is being appended properly
        if (blog.image) {
            formData.append("image", blog.image);
        } else {
            console.error("Image is missing!");
        }

        try {
            // Send the request using Axios
            const response = axios.post("http://localhost:8080/api/blogs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // Handle success
            console.log("Success:", response.data);
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
                <h1>Blog Section</h1>
                <hr/>
                <form onSubmit={handleProjectSubmit} style={{paddingTop: '10px', textAlign: 'justify'}}>
                    <div style={{padding: '10px'}}>
                        <label htmlFor="title">Blog title: </label>
                        <input type="input" name="title" onChange={handleProjectChange}/>
                    </div>
                    <div style={{padding: '10px'}}>
                        <label htmlFor="author">Blog author: </label>
                        <input type="input" name="author" onChange={handleProjectChange}/>
                    </div>
                    <div style={{padding: '10px'}}>
                        <label htmlFor="tag">Blog tag: </label>
                        <input type="input" name="tag" onChange={handleProjectChange}/>
                    </div>
                    <div style={{padding: '6px'}}>
                        <label htmlFor="summary">Blog Summary: </label>
                        <input type="text" name="summary" onChange={handleProjectChange}/>
                    </div>


                    {/*blog description*/}
                    <div style={{padding: '6px', paddingTop: '0px'}}>
                        <label htmlFor="description">Blog Description: </label>
                        {/*<input type="text" name="description" onChange={handleProjectChange}/>*/}
                        <JoditEditor ref={editor} value={description}
                                     onChange={newDescription => setDescription(newDescription)}/>
                    </div>


                    <div style={{padding: '10px'}}>
                        <label htmlFor="date">Enter Date: </label>
                        <input type="date" name="date" onChange={handleProjectChange}/>
                    </div>

                    <div style={{padding: '10px'}}>
                        <label htmlFor="image">Upload Image: </label>
                        <input type="file" name="image" onChange={handleProjectChange}/>
                    </div>

                    <button type="submit" className={'btn-secondary'} style={{padding: '5px'}}>Submit</button>
                </form>

            </div>

        </>
    )
}