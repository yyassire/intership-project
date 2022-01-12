import "./newsList.scss";

function NewsList({ topNews }) {
  return (
    <div className="NewsList">
      <div className="news-list-wrapper">
        {topNews.map((news) => {
          return (
            <div key={news.publishedAt} className="single-news">
              <div className="single-news-wrapper">
                <div className="img">
                  <img src={news.urlToImage} alt="" />
                </div>
                <a href={news.url} rel="noreferrer" target={"_blank"}>
                  <div className="news-title">{news.title}</div>
                </a>
                <div className="source">Source: {news.source.name}</div>
                <div className="news-desc">{news.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsList;
