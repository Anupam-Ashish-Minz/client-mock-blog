import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Link, useParams } from 'react-router-dom';
import './Articles.css';

const ArticlesList = ({cachedData, shareData}) => {
  const [dataFromDb, setDataFromDb] = useState(cachedData);
  const fetchData = () => {
    fetch('/api/articles-list')
      .then(data => data.json())
      .then(data => setDataFromDb(data));
  }

  useEffect(()=>{
    if(dataFromDb === null) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    shareData(dataFromDb);
  }, [dataFromDb]);

  return (
    <div className="article-list-component">
      {dataFromDb ?
        <>
          <h1>List of articles</h1>
          {dataFromDb.map((elem, index) =>
          <Link to={`/articles/${elem._id}`} className="article-shards" key={index} >
            <h2>{index+1}. {elem.title}</h2>
            <h4>{elem.body[0].slice(0, 60)}...</h4>
          </Link>
          )}
        </>
        : <ReactLoading type="bubbles" color="black" />}
    </div>
  );
}

const Article = ({data}) => {
  const {id: articleId} = useParams();
  const [dataFromDb, setDataFromDb] = useState(data ? data.find(elem => elem._id === articleId) : null);

  const fetchData = () => {
    fetch(`/api/article/${articleId}`)
      .then(data => data.json())
      .then(data => setDataFromDb(Array.isArray(data) ? data[0] : data));
  }

  useEffect(() => {
    if(!data) {
      fetchData();
    }
  }, []);

  return (
    <>
      {dataFromDb ? 
      <>
        <h1>{dataFromDb.title}</h1>
        <p>id : {dataFromDb._id}</p>
        <p>Views : {dataFromDb.views}</p>
        {dataFromDb.body.map((para, index) => <p key={index}>{para}</p>)}
      </> : <ReactLoading type="bubbles" color="black" /> }
    </>
  );
}


export {
  ArticlesList,
  Article
};
