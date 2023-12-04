import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";
import Loding from "./Loding";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitalizefirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = capitalizefirst(props.category) + " - NewsMonkey";
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loding, setLoding] = useState(true);

  const update = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

    setLoding(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoding(false);
    props.setProgress(100);
  };

  useEffect(() => {
    update();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);

    setLoding(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoding(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "80px" }}>
        NewsMonkey- Top {capitalizefirst(props.category)} headlines
      </h1>
      <div className="container">
        <InfiniteScroll
          dataLength={articles.length ? articles.length : 0}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={
            <h4>
              <Loding />
            </h4>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "business",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
