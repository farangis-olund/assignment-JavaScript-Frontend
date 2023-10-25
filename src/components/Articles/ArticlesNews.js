import React from 'react'
import SectionTiltle from '../generics/SectionTiltle'
import Button from '../generics/Button'
import classroom from '../../assets/images/classroom.png'
import chatGPT from '../../assets/images/chatGPT.png'
import modernCSS from '../../assets/images/modernCSS.png'
import implementFiveS from '../../assets/images/implementFiveS.png'
import endUser from '../../assets/images/endUser.png'
import officeStockholm from '../../assets/images/officeStockholm.png'
import case4 from '../../assets/images/case4.png'
import case2 from '../../assets/images/case2.png'
import case3 from '../../assets/images/case3.png'
import ArticleBox from './ArticleBox'

const ArticlesNews = ({sectionDescription, articleAmount}) => {
    
    const articles =[
        {imgSrc: classroom, imgAlt: "a woman is sitting in classroon", date: "25", month: "Mar", title: "How To Use Digitalization In The Classroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {imgSrc: chatGPT, imgAlt: "chatGPT in the screen", date: "17", month: "Mar", title: "How To Implement Chat GPT In Your Projects", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {imgSrc: modernCSS, imgAlt: "modernCSS book", date: "13", month: "Mar", title: "The Guide To Support Modern CSS Design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {imgSrc: implementFiveS, imgAlt: "implementFiveS", date: "12", month: "Mar", title: "Why You Need To Implement The Five S's", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {imgSrc: endUser, imgAlt: "endUser", date: "07", month: "Mar", title: "Get More Involved With Your End Users", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {imgSrc: officeStockholm, imgAlt: "officeStockholm", date: "02", month: "Mar", title: "Guided Tour Of Our New Head Office In Stockholm", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {imgSrc: case4, imgAlt: "BusinessIntelig", date: "28", month: "Feb", title: "Using Business Intelligence To Get Insights Into Our Businesses", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {imgSrc: case2, imgAlt: "AppleBook", date: "18", month: "Feb", title: "Apple Has Released New Products. Are They Any Good?", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {imgSrc: case3, imgAlt: "BetterResult", date: "11", month: "Feb", title: "How To Improve Your Teams And Get A Better Result", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."}
    
    ]
    const displayedArticles = articles.slice(0, articleAmount);
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
                {
                    displayedArticles.map((article, index)=>(
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