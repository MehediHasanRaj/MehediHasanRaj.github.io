import {useMemo, useRef, useState} from "react";
import axios from "axios";
import JoditEditor from "jodit-react";

export default function FormAddProjectCompont() {
    const [techInput, setTechInput] = useState("");
    const editor = useRef(null);
    const [description, setDescription] = useState("");

    // const config = useMemo({
    //     readonly: false,
    //     placeholder: this.placeholder || 'start typing..'
    // },[placeholder])

    const [project, setProject] = useState({
        projectName: '',
        date: new Date(),
        // description: '',
        summary: '',
        techStack: [],
        image: null,
        youtubeLink: ''

    });
    // project
    const handleProjectChange = (event) => {
        const {name, value, type} = event.target;
        if (type === "file") {
            // For the file input (image), we need to handle files
            setProject({
                ...project,
                [name]: event.target.files[0], // Store the file object
            });
        }else if(name==='date'){
            setProject({
                ...project,
                [name]: new Date(event.target.value),
            })
        }
        else {
            setProject({
                ...project,
                [name]: value, // Update text input fields
            });
        }
    };

    // Handle techStack array updates
    const handleTechStackAdd = () => {
        if (techInput.trim() !== "") {
            setProject((prevState) => ({
                ...prevState,
                techStack: [...prevState.techStack, techInput], // Add new tech to the array
            }));
            setTechInput(""); // Clear input after adding
        }
    };

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append each field to FormData
        formData.append("projectName", project.projectName);
        formData.append("date", project.date);
        formData.append("description", description);
        formData.append("summary", project.summary);
        formData.append("youtubeLink", project.youtubeLink);

        formData.append("techStack", project.techStack);

        // Ensure the image is being appended properly
        if (project.image) {
            formData.append("image", project.image);
        } else {
            console.error("Image is missing!");
        }

        try {
            // Send the request using Axios
            const response = axios.post("http://localhost:8080/api/projects", formData, {
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
                <h1>Project Section</h1>
                <hr/>
                <form onSubmit={handleProjectSubmit} style={{paddingTop: '10px', textAlign: 'justify'}}>
                    <div style={{padding: '10px'}}>
                        <label htmlFor="projectName">Project Name: </label>
                        <input type="input" name="projectName" onChange={handleProjectChange}/>
                    </div>
                    <div style={{padding: '6px'}}>
                        <label htmlFor="summary">Project Summary: </label>
                        <input type="text" name="summary" onChange={handleProjectChange}/>
                    </div>

                    {/*project description*/}
                    <div style={{padding: '6px', paddingTop: '0px'}}>
                        <label htmlFor="description">Project Description: </label>
                        {/*<input type="text" name="description" onChange={handleProjectChange}/>*/}
                        <JoditEditor ref={editor} value={description} onChange={newdescription=>setDescription(newdescription)} />
                    </div>

                    {/* Tech Stack input */}
                    <div style={{padding: "10px"}}>
                        <label htmlFor="techStack">Tech Stack: </label>
                        <input
                            type="text"
                            name="techStackInput"
                            value={techInput}
                            onChange={(e) => setTechInput(e.target.value)} // Update input value
                        />
                        <button type="button" className={'btn-dark'} onClick={handleTechStackAdd}>Add Tech</button>
                        <div>
                            {project.techStack.map((tech, index) => (
                                <span key={index} style={{marginRight: "10px"}}>
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{padding: '10px'}}>
                        <label htmlFor="date">Enter Date: </label>
                        <input type="date" name="date" onChange={handleProjectChange}/>
                    </div>

                    <div style={{padding: '10px'}}>
                        <label htmlFor="image">Upload Image: </label>
                        <input type="file" name="image" onChange={handleProjectChange}/>
                    </div>
                    <div style={{padding: '10px'}}>
                        <label htmlFor="youtubeLink">Youtube Link: </label>
                        <input type="input" name="youtubeLink" onChange={handleProjectChange}/>
                    </div>

                    <button type="submit" className={'btn-secondary'} style={{padding: '5px'}}>Submit</button>
                </form>

            </div>

        </>
    )
}