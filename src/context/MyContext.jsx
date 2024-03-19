import { createContext, useState } from 'react';

export const MyContext = createContext("");

export const MyContextProvider=({children})=>{
    const [notificationcount, setNotificationCount] = useState(0);
    const [notificationId, setNotificationId] = useState(null)
    const [description, setDescription]=useState('')
    const [timestamp, setTimestamp] = useState('')
 

    const mycontextData = {
        notificationcount,
        notificationId,
        description,
        timestamp,
        setNotificationCount,
        setNotificationId,
        setDescription,
        setTimestamp, 
    };

    return (
        <MyContext.Provider value={mycontextData}>
            {children}
        </MyContext.Provider>
    );
};


// import { createContext, useState } from "react";

// export const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [totalResults, setTotalResults] = useState(0);
//     const [pagination, setPagination] = useState({});
//     const [currentPage, setCurrentPage] = useState(1);
//     const [suggestedSearch, setSuggestedSearch] = useState('');

//     // const cleanHtmlTags = (html) => {
//     //     return html.replace(/<[^<>]*>[^<]*<\/[^<>]*>/gm, '');

//     const extractHtmlContent = (html) => {
//         const htmlRegex = /<[^>]*>(.*?)<\/[^>]*>/gs;
//         const extractedContent = html.replace(htmlRegex, function(match, group1) {
//             return group1;
//         });
    
//         return extractedContent;
//     };

//     const handleSetSearchTerm = (term) => {
//         const cleanedTerm = extractHtmlContent(term);
//         setSearchTerm(cleanedTerm);
//     };

//     const contextData = {
//         searchTerm,
//         searchResults,
//         totalResults,
//         pagination,
//         currentPage,
//         suggestedSearch,
//         setSearchTerm: handleSetSearchTerm,
//         setSearchResults,
//         setTotalResults,
//         setPagination,
//         setCurrentPage,
//         setSuggestedSearch,
//     };

//     return (
//         <SearchContext.Provider value={contextData}>
//             {children}
//         </SearchContext.Provider>
//     );
// };
