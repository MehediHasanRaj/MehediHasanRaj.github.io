
import SwipperCertificateComponent from "./SwipperCertificateComponent";

import {Link} from "react-router-dom";
export default function CertificateComponents() {
    return(
        <section>
            <div className="sectionSpaceSm lightBg">
                <div className="container">
                    <div className="row pb-3">
                        <div className="col">
                            <h4 className="smText regular" style={{textAlign: 'left',fontWeight:'bolder'}}>Certificates</h4>
                        </div>
                        <div className="col-auto">
                            {/*<a href="javascript:void(0)" className="simpleLink">View all</a>*/}
                            <Link to={"/certificate-lists"} className="simpleLink">View all</Link>
                        </div>
                        <SwipperCertificateComponent/>
                    </div>
                </div>
            </div>
        </section>
    )
}