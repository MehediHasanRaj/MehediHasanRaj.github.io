import '../css/style.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "../security/AuthContext";
export default function BlogDetailsComponent(){
    const {id} = useParams();
    const [data, setData] = useState([]);
    const authContext = useAuth();
    useEffect(()=> {
        authContext.apiClient.get('/api/blogs/'+id)
            .then((res) => {setData(res.data);})
            .catch((err)=>{console.log(err);});
    },[]);


    return(
        <>
            <section>
                <div className="innerPageBannerCol">
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <h1 className="xlTitle pb-md-3" style={{textAlign: 'justify'}}>{data.title}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-auto">
                                <div className="authorCol">
                                    <h4 className="smTitle pb-3" >{data.author}</h4>
                                </div>
                            </div>
                            <div className="col-md">
                                <h4 className="smTitle pb-3" style={{textAlign: 'justify'}}>{data.date}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="sectionSpaceSm">
                    <div className="container" style={{textAlign: 'left'}}>
                        <div style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{__html: data.description}}/>


                    </div>
                </div>
            </section>


        </>
    )
}