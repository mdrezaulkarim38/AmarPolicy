function BlogListComponent() {
    
  return (
    <div className="blog-list mb-4">
      <div className="blog-thumb">
        <a href="#">
          <img
            src="https://bimabdcompany.s3-ap-southeast-1.amazonaws.com/media/public/wink/images/L4algycGZh11jbA2SAGj4O4cjCnU9S4KwV2vsTxj.png"
            className="img-fluid custom-img-size"
            alt="Accident Insurance Coverage with LS2 Helmets"
            title="Accident Insurance Coverage with LS2 Helmets"
          />
        </a>
      </div>
      <div className="blog-content mt-3">
        <ul className="blog-meta list-inline">
          <li className="meta-date list-inline-item">2025-01-01 18:08:00</li>
        </ul>
        <h3 className="title">
          <a href="#">
            Accident Insurance Coverage with LS2 Helmets
          </a>
        </h3>
        <div className="reading-time">
          <span>Reading Time: </span>
          <span>1 minute</span>
        </div>
        <p>
          LS2 Helmets are now available with Accident Insurance Coverage,
          powered by Bimafy. Aziz Auto, the authorized sole distributor of LS2
          Helmets in Bangladesh, provides free accident insurance to its
          customers so they can be financially protected in case...
        </p>
      </div>
    </div>
  );
}

export default BlogListComponent;
