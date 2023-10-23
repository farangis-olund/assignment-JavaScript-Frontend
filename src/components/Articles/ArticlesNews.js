import React from 'react'
import SectionTiltle from '../generics/SectionTiltle'
import Button from '../generics/Button'
import classroom from '../../assets/images/classroom.png'
import chatGPT from '../../assets/images/chatGPT.png'
import modernCSS from '../../assets/images/modernCSS.png'
import ArticleBox from './ArticleBox'

const ArticlesNews = () => {
    const articles =[
        {imgSrc: classroom, imgAlt: "a woman is sitting in classroon", date: "25", month: "Mar", title: "How To Use Digitalization In The Classroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {imgSrc: chatGPT, imgAlt: "chatGPT in the screen", date: "17", month: "Mar", title: "How To Implement Chat GPT In Your Projects", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {imgSrc: modernCSS, imgAlt: "modernCSS book", date: "13", month: "Mar", title: "The Guide To Support Modern CSS Design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."}
        ]
  
return (
    <div class="article-news">
        <div class="container section-padding">
            <div class="title">
                <SectionTiltle title="Article & News" description="Get Every Single Articles & News" />
                <div class="content-center">
                    <Button url="/services" title="Browse Article" />
                </div>
            </div>
            
            <div class="boxes">
                {
                   articles.map((article, index)=>(
                        <ArticleBox key={index} 
                        imgSrc={article.imgSrc} 
                        imgAlt={article.imgAlt} 
                        date={article.date} 
                        month={article.month} 
                        title={article.title} 
                        description={article.description}/>
                   ))} 
            </div>
        </div>
   </div>
  )
}

export default ArticlesNews