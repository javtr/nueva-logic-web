import React from 'react';
import { Link } from 'react-router-dom';
import articlesData from '../assets/text/articles.json';

const ArticleList = () => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {articlesData.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <Link to={`/article/${product.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;

