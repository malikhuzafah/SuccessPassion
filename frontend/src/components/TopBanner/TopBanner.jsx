import React from "react";
import { Container } from "@mui/material";

const TopBanner = ({ title, desc }) => {
  return (
    <div
      style={{
        height: "400px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#323232",
        padding: "20px",
        color: "#ffffff",
      }}
    >
      <Container>
        <h1>{title}</h1>
        <p>{desc}</p>
      </Container>
    </div>
  );
};

export default TopBanner;
