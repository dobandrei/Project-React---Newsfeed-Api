import React from 'react';
import '../main.css';

function TopStory({data}) {

  return (
    
    <div className="containerTopStory">
      <img src ={data.urlToImage} alt = {`image ${data.title}`}/>
        <title>{data.title}</title>
        <h2>Author: {data.author}</h2>
        <span>Published date: {data.publishedAt.slice(0,10)}</span> 
        <p>{data.description}</p>
        
    </div>
  );
}


export default TopStory;