import React, { useEffect, useState } from 'react';

export default function ListNews(props) {

  const reroutetApiData = props.data.hits;
  const [readMoreContent, setReadMoreContent] = useState([])

  function handleReadmore(item) {
    setReadMoreContent(item);
    console.log(readMoreContent)
    document.querySelector('.modal').classList.add('is-active')
  }

  function handleCloseModal() {
    document.querySelector('.modal').classList.remove('is-active')
  }

  function htmlDecode(str) {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.documentElement.innerHTML
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns"></div>

          {reroutetApiData.map((item) => (
            <>
              <div className="card" key={item.objectID}>
                <div className="card-content">
                  <div className="title">
                    <p>{item.title}</p>
                  </div>
                  <div className="subtitle">
                    <p>{item.author}</p>
                  </div>
                  <div className="content">
                    {item.story_text ? <button className="button is-success is-outlined is-rounded" onClick={() => handleReadmore(item)}>Read more</button> : ""}
                    {item.url ? <a href={`${item.url}`}><button className="button is-link is-outlined is-rounded" >Go to external Website</button></a> : ""}
                    {/* <button className={`button ${item.story_text ? "is-success" : "is-danger"}`} disabled={item.story_text ? false : "disabled"} onClick={() => item.story_text ? handleReadmore(item) : null}> Read more </button>
                    <a className={`button ${item.url ? "is-success" : "is-danger"}`} disabled={item.url ? false : "disabled"} href={item.url ? item.url : ""} > Go to article </a> */}
                  </div>
                  <footer className="card-footer">
                    <p className="card-footer-item">
                      <span>{item.created_at}</span>
                    </p>
                  </footer>

                </div>
              </div>
            </>
          ))}
        </div>
      </section >


      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{readMoreContent.title}</p>
          </header>
          <section className="modal-card-body">
            {readMoreContent.story_text ?
              <div dangerouslySetInnerHTML={{ __html: htmlDecode(readMoreContent.story_text) }} />
              : "this has no story"}
          </section>
          <footer className="modal-card-foot">
            <span>{readMoreContent.created_at}</span>

            <span><button onClick={handleCloseModal}>Close</button></span>
          </footer>
        </div>
      </div>


    </>

  );
}
