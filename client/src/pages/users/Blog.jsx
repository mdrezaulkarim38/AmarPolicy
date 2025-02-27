import Breadcrumb from "../../components/users/Breadcrumb";
import Footer from "../../components/users/Footer";
import Header from "../../components/users/Header";
import BlogListComponent from "../../components/users/BlogListComponent";
import AccidentImage01 from "../../assets/users/assets/img/istockphoto-1226082621-612x612.jpg"
import AccidentImage02 from "../../assets/users/assets/img/istockphoto-1409928874-1024x1024.jpg"


function Blog() {
  const blogPosts = [
    {
      title: "Accident Insurance Coverage with LS2 Helmets",
      link: "#",
      imageUrl: AccidentImage01,
      date: "2025-01-01 18:08:00",
      readingTime: "1 minute",
      description:
        "LS2 Helmets are now available with Accident Insurance Coverage, powered by Amar Policy...",
    },
    {
      title: "Top Destinations for Bangladeshi Travelers",
      link: "#",
      imageUrl:AccidentImage02,
      date: "2024-09-19 15:30:00",
      readingTime: "3 minutes",
      description:
        "As global travel becomes more accessible, many Bangladeshi travelers are exploring destinations both near and far...",
    },
    {
      title: "Frequently Asked Questions About Insurance in Bangladesh",
      link: "#",
      imageUrl: AccidentImage01,
      date: "2024-09-05 11:36:00",
      readingTime: "4 minutes",
      description:
        "Insurance plays a crucial role in safeguarding your health, assets, and financial well-being. However, many people in Bangladesh often find it confusing or overwhelming to choose the right insurance plan. At Amar Policy, we aim to make insurance simple an...",
    },
    {
      title: "Travel Insurance Purchasing Guide - Which policy suits you best?",
      link: "#",
      imageUrl:AccidentImage02,
      date: "2024-08-01 12:38:00",
      readingTime: "4 minutes",
      description:
        "Amar Policy offers a range of travel insurance policies to cater to various types of travelers. These policies include:1. Travel Insurance for Business &amp; Holiday: This policy is suitable for individuals traveling for both business and leisure purposes...",
    },
  ];

  return (
    <div className="main-wrapper">
      <Header />
      <Breadcrumb pageName="Blog" />

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <BlogListComponent posts={blogPosts} />
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="blog-sidebar">
              <h5 className="widget-title">Tags</h5>
              <ul className="list-unstyled">
                <li className="pl-3 mt-2">
                  <a href="travel-insurance" className="">
                    Travel Insurance
                  </a>
                </li>
                <li className="pl-3 mt-2">
                  <a href="certified-helmet" className="">
                    Certified Helmet
                  </a>
                </li>
                <li className="pl-3 mt-2">
                  <a href="travel-policy" className="">
                    Travel Policy
                  </a>
                </li>
                <li className="pl-3 mt-2">
                  <a href="health-coverage" className="">
                    Health Coverage
                  </a>
                </li>
                <li className="pl-3 mt-2">
                  <a href="origine-helmets" className="">
                    Origine Helmets
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
