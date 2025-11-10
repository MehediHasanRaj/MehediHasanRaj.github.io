import {Link} from "react-router-dom";

export default function AdminComponent() {
    return (
        <>
            <div className="container" style={{textAlign:'justify'}} >
                <br/>
                <br/><br/>
                <h1>Admin Actions</h1>
                <hr/>
                <div className="row">


                    <div className="col col-md-4" style={{textAlign: "left"}}>
                        <div className="row" style={{padding: '3px'}}>
                            <Link to="/add-project">
                                <button className={'button-85'}>Add Project</button>
                            </Link>
                        </div>
                        <div className="row" style={{padding: '2px'}}>
                            <Link to="/add-blog">
                                <button className={'button-85'}>Add Blog</button>
                            </Link>
                        </div>
                        <div className="row" style={{padding: '2px'}}>
                            <Link to="/add-certificate">
                                <button className={'button-85'}>Add Certificate</button>
                            </Link>
                        </div>

                        <div className="row" style={{padding: '2px'}}>
                            <Link to="/contact-lists">
                                <button className={'button-85'}>View Contact lists</button>
                            </Link>
                        </div>
                        <div className="row" style={{padding: '2px'}}>
                            <Link to="/delete">
                                <button className={'button-85'}>Delete by Id</button>
                            </Link>
                        </div>
                        <div className="row" style={{padding: '2px'}}>
                            <Link to="/profile">
                                <button className={'button-85'}>Edit profile</button>
                            </Link>
                        </div>

                    </div>

                    <div className="col col-md-4"></div>
                    <div className="col col-md-4"></div>

                </div>


            </div>

        </>
    )
}