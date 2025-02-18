import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import ActivationForm from '../../components/users/ActivationForm';
import GearLogo from "../../assets/users/assets/img/gearx6330518644810.png";
function Gearx(){
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Origine Helmets Warranty and Insurance Activation" />
            <div className="container content_padding_top content_padding_bottom mt-4">
                <div className="p-3 card">
                    <div className="card-img-top">
                        <img
                            src={GearLogo}
                            style={{ maxWidth: '250px', maxHeight: '150px' }}
                            alt="Origine Helmet"
                        />
                    </div>
                    <h1 className="pt-3 h3">GearX Assurance Activation</h1>
                    <span className="pt-3 h6">
                        For more details regarding this insurance policy, please{' '}
                        <a href="" target="_blank" rel="noopener noreferrer">
                            click here
                        </a>
                        .
                    </span>
                    <span className="pt-3 h6">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Please read the Warranty Policy here.
                        </a>
                    </span>
                    <hr />
                    <ActivationForm />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gearx;