import React, { useState, useEffect } from 'react';
import MediaLink from "./MediaLink";

function CardWrapper() {
    const [news, newsFlash] = useState();

    useEffect(() => {
        async function getData() {
            var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=us&pageSize=1&' +
            `apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
            var req = new Request(url);
            var response = await fetch(req)
            var json = await response.json();
            newsFlash(json.articles[0]);
        }
        getData();
    }, [])

    useEffect(()=>{
        console.log(news);
    }, [news])

    return <div> 
        {news && <div><h1>{news.source.name}</h1> 
                <h2>{news.title}</h2>
                <h3>{news.author}</h3> 
                <MediaLink urlToImage={news.urlToImage} />
                </div> 
                }
                </div>
}

export default CardWrapper;