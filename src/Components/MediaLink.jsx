import React from 'react';

export default function MediaLink(props) {
    const { urlToImage } = props;

    return <img src={urlToImage} alt="alt text" />
}
