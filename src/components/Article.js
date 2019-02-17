import React from 'react';

const Article = ({article}) => {
    
    return(
        <div>
            {article.title}
            {article.author}
        </div>
    )
}

export default Article;
