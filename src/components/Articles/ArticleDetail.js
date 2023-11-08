import React, { useEffect } from 'react'
import SectionTiltle from '../Generics/SectionTiltle'
import Post from './Post'
import { useParams } from 'react-router-dom'
import Category from './Category'
import { useArticles } from '../../contexts/ArticleContext'

const ArticleDetail = () => {
    const {article, getArticle, clearArticle} = useArticles()
    
    const { id } = useParams()
    useEffect(() => {
    getArticle(id)
      
    return () => clearArticle()
  }, [id])
  
    function formatDate(inputDate) {
        const date = new Date(inputDate);
    
        const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
    
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()
        const formattedDate = `${month} ${day}, ${year}`
        return formattedDate
    }
    return article ? (
    
    <div className="article-detail">
        <div className="container ">
            <div className="title">
                {<SectionTiltle title="" description={article.title} />}
            </div>
            <div className="article-info">
                <li> {formatDate(article.published)} </li>
                <i className="fa-solid fa-circle"></i>
                <li> { article.category } </li>
                <i className="fa-solid fa-circle"></i>
                <li> {article.author} </li>
            </div>
            
            <div className='content'>
                <div className='article'>
                    <img src={article.imageUrl} alt=""/>  
                    <p>{article.content}</p> 
                </div>
                <div className='side-bar '>
                        <div className='search-box'>
                            <input placeholder='Type to search'></input>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className='recent-post'>
                            <h4> <span>Rec</span>ent Posts</h4>
                            <Post description="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020" />
                            <Post description="Design Studios That Everyone Should Know About?" date="Jan 14, 2020" />
                            <Post description="How did we get 1M+ visitors in 30 days without anything!" date="Jan 14, 2020" />
                            <Post description="Figma On Figma: How We Built Our Website Design System" date="Jan 14, 2020" />
                        </div>
                        <div className='recent-post'>
                            <h4> <span>Cat</span>egories</h4>
                            <div className='categories'>
                                <Category title="Technology" postCount="20"/>
                                <Category title="Freelancing" postCount="7"/>
                                <Category title="Writing" postCount="16"/>
                                <Category title="Marketing" postCount="11"/>
                                <Category title="Business" postCount="35"/>
                                <Category title="Education" postCount="14"/>
                            </div>
                            
                        </div>
                </div>
            </div>
            <nav className='categoryNav'>
            <a href='/'> Digitalization </a>
            <a href='/'> School </a>
            <a href='/'> IT </a>
            <a href='/'> Design </a>
            <a href='/'> Work </a>
            <a href='/'> Tech </a>
            </nav>
        </div>
   </div>
 ) : null
}

export default ArticleDetail