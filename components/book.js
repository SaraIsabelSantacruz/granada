import React, { Component } from 'react';

function Book (props){
  let publishDate = props.publishDate;
  return(
    <div className="container-book">
      <div className="container-image">
        <img
          src={`http://picsum.photos/200/300/?image=${props.id}`}
          alt=""
          width={200}
          height={300}
        />
      </div>
      <h3>{props.title}</h3>
      <span>{publishDate}</span>
      <p>{props.description}</p>
      <p>{props.excerpt}</p>
      <style jsx>{`
        h3 {
          margin:4px;
        }
        img{
          cursor:pointer;
        }
        .container-book{
          margin-top:2%;
        }
        .container-image{
          text-align:center;
        }
      `}</style>
    </div>
  )
}

export default Book;
