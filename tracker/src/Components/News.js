import React from 'react';
import '../News.css'


const News = ({title, url, description, date}) => {
    return (
        <>
        <div className='news-container'>
            <div className='news-information'>
                <h1 className='news-title'>{title}</h1>
                <h4>{description}</h4>
                <h4>{date}</h4>
                <a href={url} className='news-article'>Article Link</a>
                <hr className='line-break'/>
            </div>
        </div>
        </>
    )
}

export default News;