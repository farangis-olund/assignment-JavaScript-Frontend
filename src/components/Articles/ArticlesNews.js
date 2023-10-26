import React, { useState, useEffect } from 'react'
import SectionTiltle from '../generics/SectionTiltle'
import Button from '../generics/Button'
import ArticleBox from './ArticleBox'

const ArticlesNews = ({sectionDescription, articleAmount}) => {
    
    async function fetchArticles() {
        try {
          const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles'); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching articles:', error);
          throw error;
        }
    }
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticlesData() {
        try {
            const data = await fetchArticles();
            setArticles(data);
        } catch (error) {
            // Handle errors here
        }
        }

        fetchArticlesData();
    }, []);

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
                    <Button url="/services" title="Browse Article" />
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