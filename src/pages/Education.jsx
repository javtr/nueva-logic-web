import React from 'react'
import ArticleList from '../components/education/ArticleList';
import EdHeader from '../components/education/EdHeader';

export default function Education() {
  return (
    <div className='education'>
     <EdHeader/>
      <ArticleList/>
    </div>
  )
}
