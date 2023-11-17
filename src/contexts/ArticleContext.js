import { useContext, createContext, useState, useEffect } from "react"

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const apiUrl= 'https://win23-assignment.azurewebsites.net/api/articles'
    const [articles, setArticles] = useState([])
    const [article, setArticle]= useState(null)
    const [error, setError] = useState(null)
    useEffect (()=>{
        getArticles()
    }, [])

    const getArticles = async () => {
        try {
            const result = await fetch (apiUrl)
            setArticles (await result.json())
        } catch (error) {
            console.error("Error fetching articles:", error)
            setError(error.message) 
        }
    }

    const getArticle = async (id) => {
        try {
            const result = await fetch ( `${apiUrl}/${id}` )
            setArticle (await result.json())
        } catch (error) {
            console.error("Error fetching articles:", error)
            setError(error.message) 
        }
    }

    const clearArticle = () => {
        setArticle (null)
    }

    return (
        <ArticleContext.Provider value={{articles, article, getArticles, getArticle, clearArticle, error}}>
            {children}
        </ArticleContext.Provider>
    )
}

