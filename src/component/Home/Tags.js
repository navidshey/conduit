import React from 'react'
import { Link } from 'react-router-dom'

const Tags = props => {
    const tags = props.tags;
    if (tags) {
        return (
                <div className="tag-list">
                    {
                        tags.map((item) => {
                            return (
                                <Link key={item} className="tag-default tag-pill" to="" >
                                    {item}
                                </Link>
                            )
                        })
                    }

                    <p  className="tag-default tag-pill">dragons</p>
                </div>
        );
    }else{
        return(
            <div>Loading Tags ...</div>
        )
    }
}

export default Tags;





