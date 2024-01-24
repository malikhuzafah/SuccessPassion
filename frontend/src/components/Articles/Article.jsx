import React, { useState } from "react";

const Article = ({ title, link, desc, img }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={link}
      className="article"
      style={{
        transition: "all 0.3s ease-in-out",
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        style={{
          backgroundColor: "#323232",
          height: "400px",
          display: "flex",
          alignItems: "end",
          padding: "20px",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "10px",
            width: "100%",
            overflow: "hidden",
            height: "170px",
          }}
        >
          <h3
            style={{
              textDecoration: hover ? "underline" : "none",
            }}
          >
            {title}
          </h3>
          <p>{desc}</p>
        </div>
      </div>
    </a>
  );
};

export default Article;
