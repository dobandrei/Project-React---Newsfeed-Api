import React from 'react';
import '../main.css';

function News({data}) {
  const handleClick = () => window.open(data.url)
  
  return (
    <div className="container">
        <img src ={data.urlToImage} alt = {`image ${data.title}`}/>
        <title>{data.title}</title>
        <h2>Author: {data.author != null ? data.author : 'No Author' }</h2>
        <span>Published date: {data.publishedAt.slice(0,10)}</span>  
        <p onClick = {handleClick}>{data.description}</p>
            
    </div>
  );
}

export default News;