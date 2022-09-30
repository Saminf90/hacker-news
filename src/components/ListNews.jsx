import React, { useEffect, useState } from 'react';
import moment from 'moment'

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
      <section className="section is-fullheight">
        <div className="container">
          <div className="columns is-flex-wrap-wrap">
            {
              reroutetApiData.map((item) => (item.title || item.url ?
                <>
                  <div className="column is-4 mb-5" key={reroutetApiData.created_at_i}>
                    <div className="card">
                      <div className="card-content">
                        <div className="title mb-5">
                          <p>{item.title}</p>
                        </div>
                        <div className="subtitle">
                          <p>by: {item.author}</p>
                        </div>
                        <div className="content">
                          {item.story_text ? <button className="button is-success is-outlined is-rounded" onClick={() => handleReadmore(item)}>Read more</button> : ""}
                          {item.url ? <a href={`${item.url}`}><button className="button is-link is-outlined is-rounded" >Go to external Website</button></a> : ""}
                        </div>
                        <footer className="card-footer">
                          <p className="card-footer-item is-justify-content-left">
                            <span>{moment(item.created_at).format("MMMM Do YYYY, h:mm:ss a")}</span>
                          </p>
                        </footer>

                      </div>
                    </div>
                  </div>
                </>
                : null))
            }

          </div>
        </div>
      </section >


      <div className="modal">
        <div className="modal-background" onClick={handleCloseModal}></div>
        <div className="modal-card">
          <header className="modal-card-head is-align-items-flex-start">
            <p className="modal-card-title is-flex-wrap-wrap">{readMoreContent.title}</p>
          </header>
          <section className="modal-card-body">
            {readMoreContent.story_text ?
              <div dangerouslySetInnerHTML={{ __html: htmlDecode(readMoreContent.story_text) }} />
              : "this has no story"}
          </section>
          <footer className="modal-card-foot">
            <span>created on {moment(readMoreContent.created_at).format("MMMM Do YYYY, h:mm:ss a")}</span>
          </footer>
          <button className="modal-close is-large" aria-label="close" onClick={handleCloseModal}>Close</button>
        </div>
      </div>


    </>

  );
}
