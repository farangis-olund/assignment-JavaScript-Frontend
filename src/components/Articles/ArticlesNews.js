import React from 'react'
import SectionTiltle from '../Generics/SectionTiltle'
import Button from '../Generics/Button'
import ArticleBox from './ArticleBox'
import { useArticles } from '../../contexts/ArticleContext'

const ArticlesNews = ({sectionDescription, articleAmount}) => {
    
    const { articles, error } = useArticles()
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
            
            {error ? (
                <div>
                    <p>Error: {error}</p>
                    <p>Connection to server is failed. Please check your internet connection and try again.</p>
                </div>
            ) : (
                <div className="boxes">
                    {articles && articles.length > 0 ? (
                        displayedArticles.map(article => (
                            <ArticleBox 
                                key={article.id} 
                                id={article.id} 
                                imgSrc={article.imageUrl} 
                                imgAlt={article.author} 
                                date={formatDate(article.published).day} 
                                month={formatDate(article.published).month} 
                                title={article.title} 
                                description={article.content}
                                category={article.category}
                            />
                        ))
                    ) : (
                        <p>No articles available.</p>
                    )}
                </div>
            )}
        </div>
   </div>
  ) 
}

export default ArticlesNews