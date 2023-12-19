import { createContext, useState } from "react";
import { baseUrl } from '../baseURL.jsx';

//step-1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling pending
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        const url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPageCount(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log('Error in fetching data');
            setPageCount(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlerPageChange(page) {
        setPageCount(page);
        fetchBlogPosts(page)
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        pageCount,
        setPageCount,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlerPageChange,
    }

    //step-2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}