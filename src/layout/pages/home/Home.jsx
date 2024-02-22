import Sections from "../../../component/Sections.jsx";
import OurTeam from "../../../component/OurTeam.jsx";
import LogoClouds from "../../../component/LogoClouds.jsx";
import CTASections from "../../../component/CTASections.jsx";
import FeatureSections from "../../../component/FeatureSections.jsx";
import PricingSections from "../../../component/PricingSections.jsx";
import Footer from "../../../component/Footer.jsx";

const Home = () => {
    return (
        <>

            <FeatureSections/>
            <CTASections/>
            <Sections/>
            <PricingSections/>
            <OurTeam/>
            <LogoClouds/>
            <Footer/>
        </>
    );
};
export default Home;