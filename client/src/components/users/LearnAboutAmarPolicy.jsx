import ImageAboutUs from "../../assets/users/assets/img/2965738.jpg";
const LearnAboutAmarPolicy = () => {
  return (
    <div className="pt-5 pb-5">
      <div className="container">
        <div className="learn_about_Amar Policy_area_inner">
          <div className="row">
            <div className="col-md">
              <h3 className="text-black font-weight-normal">
                Know more about <span className="text-primary font-weight-bold">Amar Policy Limited</span>
              </h3>
              <p className="card p-2 border border-primary">
                Amar Policy is the first digital insurance platform in Bangladesh, aimed to increase the everyday use of insurance and other financial services in people&apos;s lives. The platform provides digital solutions for insurance to the people of Bangladesh with a prime focus on transparency, convenience, mass reach, and ease of use.
              </p>
              <p className="card p-2 border border-primary">
                Amar Policy started its operations in March 2019, with the vision of improving financial inclusion and empowering people with financial stability, access, and security - all through digital solutions in the insurance and financial industry.
              </p>
              <p className="card p-2 border border-primary">
                Amar Policy is the smart and easy way to get financial coverage against your risks. We offer a wide range of coverage options, and our expert team is always available to help you choose the right policies for you or your organization. If you&apos;re looking for reliable, affordable insurance and financial solutions, then Amar Policy is the right place for you.
              </p>
            </div>
            <div className="col-md">
              <div className="learn_about_Amar Policy_image text-center">
                <img
                  src={ImageAboutUs}
                  alt="About Amar Policy"
                  className="img-fluid"
                />
              </div>
              <p className="card p-2 border border-primary">
                We work with multiple reputed insurance companies to offer the best insurance products and solutions on the platform. We digitize the existing insurance value chain, and work together to develop and roll out innovative insurance solutions that are on demand.
              </p>
              <p className="card p-2 border border-primary">
                With our website & mobile app, we aim to ease access and enable insurance solutions from multiple companies, simplify acquisition of insurance policies, and ease risk underwriting. The platform also allows users to easily understand and manage their insurance policies, get claim assistance, emergency support, and much more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAboutAmarPolicy;
