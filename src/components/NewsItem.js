import React from "react";

function NewsItem(props) {
  let btnClr = "dark";
  if (props.mode==="light") {
    btnClr="dark";
  }
  else{
    btnClr="light";
  }
    let { title, description, imgUrl, newsUrl, source, date } = props;
    return (
      <div className={`card my-2 bg-${props.mode}`}>
        <div className="container">
          <span
            className="badge bg-success"
            style={{display: "flex", justifyContent: "flex-end", right: "0", position: "absolute"}}
          >
            {source}
          </span>
        </div>
        <img
          src={
            !imgUrl
              ? "https://images.pexels.com/photos/3953481/pexels-photo-3953481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              : imgUrl
          }
          className="card-img-top"
          alt="Loading..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              Last updated on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className={`btn btn-sm btn-${btnClr}`}
          >
            Read More
          </a>
        </div>
      </div>
    );
}
export default NewsItem
