import BannerComponent from "./BannerComponent";
import KeySkillComponent from "./KeySkillComponent";
import CertificateComponent from "./CertificateComponents";
import FeatureWorkComponents from "./FeatureWorkComponents";
import RecentPostComponent from "./RecentPostComponent";


export default function HomeComponent() {
    return(
        <>
            <BannerComponent/>
            <KeySkillComponent/>
            <CertificateComponent/>
            <FeatureWorkComponents/>
            <RecentPostComponent/>
        </>

    )
}