import React, { useState, useEffect } from 'react'
import SectionTiltle from '../generics/SectionTiltle'
import Post from './Post'
import { useParams } from 'react-router-dom'
import Category from './Category'


const ArticleDetail = () => {
    const { articleId } = useParams()
    const [article, setArticle] = useState(null)
    useEffect(() => {
        async function fetchArticle() {
            try {
                const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleId}`)
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const data = await response.json()
                setArticle(data)
            } catch (error) {
            console.log("Error")
            }
        }

    fetchArticle()
  }, [articleId])
  
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
    return (
    
    <div className="article-detail">
        <div className="container section-padding">
            <div className="title">
                {article ? <SectionTiltle title="" description={article.title} /> : null }
            </div>
            <div className="article-info">
                <li> { article ? formatDate(article.published) : null } </li>
                <i className="fa-solid fa-circle"></i>
                <li> { article ? article.category : null } </li>
                <i className="fa-solid fa-circle"></i>
                <li> { article ? article.author: null } </li>
            </div>
            
            <div className='content'>
                <div className='article'>
                    <img src={article ? article.imageUrl : null } alt=""/>  
                    <p>{article ? article.content : null}</p> 
                </div>
                <div className='side-bar '>
                        <div className='search-box'>
                            <input placeholder='Type to search'></input>
                            <i class="fa-solid fa-magnifying-glass"></i>
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
                            <div className='post categories'>
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
 )
}

export default ArticleDetail