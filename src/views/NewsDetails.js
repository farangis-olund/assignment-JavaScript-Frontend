import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BottomFooter from '../components/BottomFooter'
import SubManuBar from '../components/SubManuBar'
import ArticlesNews from '../components/Articles/ArticlesNews'
import ArticleDetail from '../components/Articles/ArticleDetail'

const NewsDetails = () => {
  return (
    <div className='wrapper'>
    <Header/>
    <main>
      <SubManuBar url="/News" page="News" title="News & Articles" />
      <ArticleDetail/>
      <ArticlesNews sectionDescription="Get Every Single Articles & News" articleAmount={3}/>
    </main>
    <Footer/>
    <BottomFooter/>
  </div>
  )
}

export default NewsDetails