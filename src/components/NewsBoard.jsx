import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error("Error fetching news:", err));
  }, [category]);

  // 👉 Group news into chunks of 3 for each slide
  const chunkedArticles = [];
  for (let i = 0; i < articles.length; i += 3) {
    chunkedArticles.push(articles.slice(i, i + 3));
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        <span className="badge bg-danger fs-5">Latest News</span>
      </h2>

      {articles.length > 0 ? (
        <div
          id="newsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {chunkedArticles.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
              >
                <div className="row justify-content-center">
                  {group.map((news, index) => (
                    <div className="col-md-4 d-flex justify-content-center " key={index}>
                      <NewsItem
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#newsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#newsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      ) : (
        <p className="text-center text-white">
          Some API Error, Back to you soon...
        </p>
      )}
    </div>
  );
};

export default NewsBoard;
