import React from 'react';
import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import ActivationForm from '../../components/users/ActivationForm';

function FreedConn() {
    return (
        <div className="main-wrapper">
            <Header />
            <Breadcrumb pageName="Origine Helmets Warranty and Insurance Activation" />
            <div className="container content_padding_top content_padding_bottom mt-4">
                <div className="p-3 card">
                    <div className="card-img-top">
                        <img
                            src="https://bimabdcompany.s3-ap-southeast-1.amazonaws.com/media/79515/logo-freedconn-bd.jpg"
                            style={{ maxWidth: '250px', maxHeight: '150px' }}
                            alt="Origine Helmet"
                        />
                    </div>
                    <h1 className="pt-3 h3">FreedConn Bangladesh Warranty and Insurance Activation</h1>
                    <span className="pt-3 h6">
                        For more details regarding this insurance policy, please{' '}
                        <a href="https://bimafy.com/channel/speedoz/plans" target="_blank" rel="noopener noreferrer">
                            click here
                        </a>
                        .
                    </span>
                    <span className="pt-3 h6">
                        <a href="https://bimabdcompany.s3-ap-southeast-1.amazonaws.com/media/64034/warranty-policy-for-helmets.pdf" target="_blank" rel="noopener noreferrer">
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

export default FreedConn;