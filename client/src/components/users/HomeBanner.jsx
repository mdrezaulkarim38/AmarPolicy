function HomeBanner(){
    return (
        <section className="section section-search">
            <div className="container-fluid">
                <div className="banner-wrapper">
                    <div className="banner-header text-center">
                        <h1>Simply compare, order, and covered.</h1>
                        <p>Reliable digital insurance solutions for you.</p>
                    </div>

                    <div className="search-box">
                        <form>
                            <div className="form-group search-location">
                                <input type="text" className="form-control" placeholder="Search Insurance" />
                                <span className="form-text">Based on your Choice</span>
                            </div>
                            <div className="form-group search-info">
                                <input type="text" className="form-control" placeholder="Search by Insurance Name you are looking about" />
                                <span className="form-text">Ex : Life insurance or Health etc</span>
                            </div>
                            <button type="submit" className="btn btn-primary search-btn">
                                <i className="fas fa-search"></i> <span>Search</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;