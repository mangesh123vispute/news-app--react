import React from "react";

const NewItem = (props) => {
  let { title, desc, imageUrl, url, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <div>
          <span
            className=" badge rounded-pill bg-danger"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {source}
          </span>
        </div>

        <img
          className="card-img-top"
          src={
            !imageUrl
              ? "https://image.cnbcfm.com/api/v1/image/107340518-1701263040125-gettyimages-1161832563-PHILLIPS_66.jpeg?v=1701263068&w=1920&h=1080"
              : imageUrl
          }
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Published by <strong>{!author ? "Unknown" : author}</strong> on
              {new Date(date).toDateString()}
            </small>
          </p>

          <a href={url} target="_blank" className="btn btn-sm btn-dark">
            Know more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
