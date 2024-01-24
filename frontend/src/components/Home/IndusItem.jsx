import { Link } from "@mui/material";
import React from "react";

const IndusItem = ({ title, desc, img, link }) => {
  return (
    <Link href={link} underline="none" color="inherit">
      <div
        style={{
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default IndusItem;
