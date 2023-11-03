import React, { useState, useEffect } from 'react'
import SectionTiltle from '../Generics/SectionTiltle'
import Button from '../Generics/Button'
import ArticleBox from './ArticleBox'

const ArticlesNews = ({sectionDescription, articleAmount}) => {
    
    const [articles, setArticles] = useState([])
    
    async function fetchArticles() {
        try {
          const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles'); 
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
       
        } catch (error) {
            console.error('Error fetching articles:', error)
          throw error
        }
    }
    
    useEffect(() => {
        async function fetchArticlesData() {
        try {
            setArticles( await fetchArticles())
            
        } catch (error) {
           console.log(error)
        }
        }
        fetchArticlesData()
    }, [])

    const displayedArticles = articles.slice(0, articleAmount)

    function formatDate(publishedDate) {
        const date = new Date(publishedDate)
        const day = date.getDate()
        const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date)
        return { day, month }
    }

return (
    <div className="article-news">
        <div className="container section-padding">
            
            <div className="title">
                {articleAmount === 9 ? (
                    <SectionTiltle title="" description={sectionDescription} />
                ) : (
                    <SectionTiltle title="Article & News" description={sectionDescription} />
                )}
                
                <div className="content-center">
                {articleAmount === 3 ? (
                    <Button url="/news" title="Browse Article" />
                ) : null}
                
                </div>
            </div>
            
            <div className="boxes">
                {   displayedArticles.map((article, index) => (
                    <ArticleBox key={index} 
                        articleId={article.id} 
                        imgSrc={article.imageUrl} 
                        imgAlt={article.author} 
                        date={formatDate(article.published).day} 
                        month={formatDate(article.published).month} 
                        title={article.title} 
                        description={article.content}
                        category={article.category}/>
                   ))} 
            </div>
        </div>
   </div>
  )
}

export default ArticlesNews