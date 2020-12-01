import React, { useState, useEffect } from 'react';

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

    return <div>CardWrapper</div>
}

export default CardWrapper;