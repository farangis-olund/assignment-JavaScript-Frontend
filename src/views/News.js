import React from 'react'
import SubManuBar from '../components/SubManuBar'
import ArticlesNews from '../components/Articles/ArticlesNews'
import GetUpdate from '../components/GetUpdate'
const News = () => {
  return (
    <main>
        <SubManuBar url="/News" page="News" title="News & Articles" />
        <ArticlesNews sectionDescription="Our News & Articles" articleAmount={9}/>
        <GetUpdate/>
    </main>
  )
}

export default News