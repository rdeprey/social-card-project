import React from 'react';
import MediaLink from "./MediaLink";
import styles from "./CardWrapper.module.css";

function CardWrapper(props) {
    const { article } = props;
    return <div className={styles.cardWrapper}> 
        {article &&
            <><h1>{article.source.name}</h1> 
            <h2><a href={article.url}>{article.title}</a></h2>
                <h3>{article.author}</h3> 
                <MediaLink urlToImage={article.urlToImage} />
            </>
        }
    </div>
}

export default CardWrapper;