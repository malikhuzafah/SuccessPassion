import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "@mui/material";

const ArticleArrow = ({ title, desc, img, link }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={link}
      style={{
        textDecoration: "none",
        color: "black",
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
          display: "flex",
          alignItems: "center",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={img} alt="" height={"100"} width={"100"} />
        </div>
        <div
          style={{
            padding: "0 0 0 20px",
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
        <div>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </a>
  );
};

export default ArticleArrow;
