import {Link} from "react-router-dom";
import profile from "../../images/profile.jpg"

export default function AdminComponent() {
    return(
        <>
            <div className="container" style={{
                backgroundImage: `url(${profile})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '850px',

            }}>
                <br/>
                <br/><br/>
                <h1>Admin Actions</h1>
                <hr/>
                <div className="row">

                    <div className="col col-md-4" style={{textAlign: "justify"}}>
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
                            <Link to="/list-contacts">
                                <button className={'button-85'}>View Contact lists</button>
                            </Link>
                        </div>
                        <div className="row" style={{padding: '2px'}}>
                            <Link to="/delete">
                                <button className={'button-85'}>Delete by Id</button>
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