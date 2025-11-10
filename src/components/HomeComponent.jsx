import BannerComponent from "./BannerComponent";
import KeySkillComponent from "./KeySkillComponent";
import CertificateComponent from "./CertificateComponents";
import FeatureWorkComponents from "./FeatureWorkComponents";
import ExperienceComponent from "./Experience Component";



export default function HomeComponent() {
    return(
        <>
            <BannerComponent/>
            <KeySkillComponent/>
            <ExperienceComponent/>
            <CertificateComponent/>
            {/*<ResearchCardComponent/>*/}
            <FeatureWorkComponents/>
            {/*<RecentPostComponent/>*/}
        </>

    )
}