import React from "react";

const ArticleTag = ({ title, desc, img, link }) => {
  return (
    <a href={link} className="link2">
      <div
        style={{
          height: "200px",
          backgroundColor: "#323232",
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div
        style={{
          padding: "5px",
        }}
      >
        <div>{title}</div>
        <p
          style={{
            fontWeight: "normal",
          }}
        >
          {desc}
        </p>
      </div>
    </a>
  );
};

export default ArticleTag;
