/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function BlogListComponent({ posts }) {
    return (
      <>
        {posts.map((post, index) => (
          <div className="blog-list mb-4" key={index}>
            <div className="blog-thumb">
              <a href={post.link}>
                <img
                  src={post.imageUrl}
                  className="img-fluid custom-img-size"
                  alt={post.title}
                  title={post.title}
                />
              </a>
            </div>
            <div className="blog-content mt-3">
              <ul className="blog-meta list-inline">
                <li className="meta-date list-inline-item">{post.date}</li>
              </ul>
              <h3 className="title">
                <a href={post.link}>{post.title}</a>
              </h3>
              <div className="reading-time">
                <span>Reading Time: </span>
                <span>{post.readingTime}</span>
              </div>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
  
  export default BlogListComponent;
  