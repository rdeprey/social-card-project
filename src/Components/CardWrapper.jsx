import React, { useContext } from 'react';
import MediaLink from "./MediaLink";

function CardWrapper(props) {
    const { article } = props;
    console.log(article);
    return <div> 
        {article && <div><h1>{article.source.name}</h1> 
                <h2>{article.title}</h2>
                <h3>{article.author}</h3> 
                <MediaLink urlToImage={article.urlToImage} />
                </div> 
                }
                </div>
}

export default CardWrapper;