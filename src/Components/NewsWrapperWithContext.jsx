import React, { useEffect, useState, createContext } from 'react';
import CardWrapper from './CardWrapper';

export const NewsContext = createContext();

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

    return( <NewsContext.Provider value={news}>
                <CardWrapper /> 
            </NewsContext.Provider>)
}
export default NewsWrapper;