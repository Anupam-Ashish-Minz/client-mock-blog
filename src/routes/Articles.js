import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

const Articles = () => {

  const [dataFromDb, setDataFromDb] = useState(null);

  const fetchData = () => {
    fetch('/api/', {
      method: "get"
    })
      .then(data => data.json())
      .then(data => setDataFromDb(data));
  }

  useEffect(()=>{
    fetchData();
  }, [])


  return (
    <div>
      {dataFromDb ? 
      <>
        {dataFromDb.map((elem, index) => 
          <div className="article-shards" key={index} onClick={()=>console.log("this article has been clicked")}>
          <h1>{elem.title}</h1>
          <p>{elem.author}</p>
        </div>
        )}
      </>
      : <ReactLoading type="bubbles" color="black" />}
    </div>
  );
}

export default Articles;
