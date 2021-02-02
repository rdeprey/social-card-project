import React, { useEffect, useState } from 'react';
import CardWrapper from './CardWrapper';

function NewsWrapper() {
    const [news, newsFlash] = useState();

    useEffect(() => {
        async function getData() {
            var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=us&pageSize=5&' +
            `apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
            var req = new Request(url);
            var response = await fetch(req)
            var json = await response.json();
            newsFlash(json.articles);
        }
        getData();
    }, [])

    useEffect(()=>{
        console.log(news);
    }, [news])

    return  <>
            {news && news.map((article, index) => {
                return <CardWrapper article={article} key={index} />
            })}
        </>
}

export default NewsWrapper;