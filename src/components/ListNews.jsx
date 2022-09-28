import React, { useEffect, useState } from 'react';

export default function ListNews(props) {

const data = props.data.hits
    console.log("Data arrived at ListNews", data[1].author);
    
    return (
      <>
        {data.map((item) => (
          //   <div className="card" key={item.objectID}>
          //     <div className="card-title">
          //       <h3>{item.title}</h3>
          //     </div>
          //     <div className="card-author">
          //       <p>{item.author}</p>
          //     </div>
          //     <div className="card-story">
          //       <p>{ item.story_text ? item.story_text : item.url}</p>
          //     </div>
          //     <div className="card-date">
          //       <p>{item.created_at}</p>
          //     </div>~
          //     <div className="card-comments">
          //       <p>{item.comments}</p>
          //     </div>
          //   </div>

          <div className="card" key={item.objectID}>
            <div className="card-content">
              <p className="title">{item.title}</p>
              <p className="subtitle">{item.author}</p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <span>
                  <a href={item.story_text ? item.story_text : item.url}>
                    Read more
                  </a>
                </span>
              </p>
              <p className="card-footer-item">
                <span>{item.created_at}</span>
              </p>
            </footer>
          </div>
        ))}
      </>
      // "title, author, story, date, comments"
    );
  }
