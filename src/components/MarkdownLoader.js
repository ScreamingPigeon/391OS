import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import PropTypes from "prop-types";

// dynamically loading markdown content
const MarkdownLoader = ({markDownPath}) => { 
    const [markdownContent, setMarkdownContent] = useState('Hello');

    // fetch content from public folder
    useEffect(()=>{
        fetch(markDownPath)
        .then((res) => res.text())
        .then((text) => setMarkdownContent(text))
        .catch(error => {
            console.log('Error fetching markdown', error);
        })
    }, [markDownPath]);

    return (
        <div className='checkpoint-markdowns-container'>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
}

MarkdownLoader.propTypes = {
    markDownPath: PropTypes.string.isRequired,
}

export default MarkdownLoader