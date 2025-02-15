import Breadcrumb from "../../components/users/Breadcrumb";
import Contact from "../../components/users/Contact";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import InsuranceList from "../../components/users/InsuranceList";
import OurClient from "../../components/users/OurClient";
import SmeCorporate from "../../components/users/SmeCorporate";

function Product(){
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Product" />
            <InsuranceList />
            <SmeCorporate />
            <Contact contactTile="Get In Touch!" />
            <OurClient />
            <Footer />
        </div>
    );
}

export default Product;