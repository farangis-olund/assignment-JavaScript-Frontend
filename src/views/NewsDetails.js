import React from 'react'
import SubManuBar from '../components/SubManuBar'
import ArticlesNews from '../components/Articles/ArticlesNews'
import ArticleDetail from '../components/Articles/ArticleDetail'

const NewsDetails = () => {
  return (
   <main>
      <SubManuBar url="/News" page="News" title="News & Articles" />
      <ArticleDetail/>
      <ArticlesNews sectionDescription="Get Every Single Articles & News" articleAmount={3}/>
    </main>
  )
}

export default NewsDetails