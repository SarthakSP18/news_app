import image from "../assets/news.jpg"
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="card shadow-lg border-0 rounded-4 overflow-hidden my-3"
        style={{ maxWidth: "360px", backgroundColor: "#1c1c1e" }}
      >
        <img
          src={src?src:image}
          className="card-img-top"
          alt="News Thumbnail"
          style={{ height: "200px", objectFit: "cover" }}
        />
        {/* set color here so children inherit readable text color */}
        <div className="card-body" style={{ color: "#ddd" }}>
            {/* .slice(0,50) */}
          <h5 className="card-title fw-bold" style={{ color: "#fff" }}>{title}</h5> 
          {/* ?description.slice(0,90):"Error" */}
          <p className="card-text small">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light w-100 rounded-pill"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
