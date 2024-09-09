import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useAuth} from "../security/AuthContext";

export default function RecentPostComponent() {
    let [data, setData] = useState([]);
    const authContext = useAuth()
    useEffect(() => {
        authContext.apiClient.get('/api/blogs')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    data = data.slice(data.length - 2) // taking the last 2 element



    return (
        <section>
            <div className="sectionSpaceSm lightBg">
                <div className="container">
                    <div className="row pb-3">
                        <div className="col">
                            <h4 className="smText regular">Recent posts</h4>
                        </div>
                        <div className="col-auto">
                            {/*<a href="javascript:void(0)" className="simpleLink">View all</a>*/}
                            <Link to={"/blog"} className="simpleLink">View all</Link>

                        </div>
                    </div>
                    <div className="row g-3">
                        {data.length > 0 ? (
                            data.map((ob,index) => (
                                <div className="col-lg-6">
                                    <div className="cardStyle1">
                                        <h4 className="mdTitle cs1Title">
                                            <Link to={`/blog-details/${ob.id}`} className="simpleLink">{ob.title}</Link>

                                        </h4>
                                        <ul className="cardOptionCol">
                                            <li>{ob.date}</li>
                                            <li>{ob.tag}</li>
                                        </ul>
                                        <p>{ob.summary}</p>
                                    </div>
                                </div>
                            ))

                        ) : (
                            <p>Loading Recent works....</p>
                        )}


                    </div>
                </div>
            </div>
        </section>
    )
}