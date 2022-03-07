import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews=async()=>{
    document.title = `${(props.category)[0].toUpperCase() + (props.category).substring(1)} - Apna News`;
    setLoading(true);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=8`
    );
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
  useEffect(() => {
   updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData=async()=>{
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=8`
      );
    setPage(page+1)  
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }
    return (
      <>
        <div className="container my-4 ">
        {loading && <Spinner mode={props.mode}/>} 
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length!==totalResults}
            loader={<Spinner mode={props.mode}/>}
          >
            <div className="row my-4">
              {articles.map((element) => {
                  return (
                    <div className="col-md-3" key={element.url}>
                      <NewsItem
                        mode={props.mode}
                        title={element.title}
                        description={element.description}
                        imgUrl={element.urlToImage}
                        newsUrl={element.url}
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
}

export default News