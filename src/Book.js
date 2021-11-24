import React from 'react'

const Book = function (props) {
    const { img, title, author } = props

    return (
        <article className="book">
            <img src={img} alt="" />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
        </article>
    )
}


export default Book
