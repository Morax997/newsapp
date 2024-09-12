import {useEffect, useState} from "react";
import NewsItem from "./NewsItem.jsx";

const NewsBoard = ({category}) => {

  const [articles,setArticles] = useState([])

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6ded6cfd7e84436ca8837594ef7bb229`;
    fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles))


    },[category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        console.log(news)
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}

    </div>
  )
}

export default NewsBoard;