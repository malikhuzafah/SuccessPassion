import React from "react";
import { Divider } from "@mui/material";

const ContactCard = ({
  img,
  name,
  email,
  phone,
  profile,
  designation,
  company,
}) => {
  return (
    <div
      style={{
        border: "1px solid #000000",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <a
        href=""
        style={{
          textDecoration: "none",
        }}
      >
        <img
          src={img}
          alt=""
          height={"150px"}
          width={"150px"}
          style={{
            borderRadius: "50%",
          }}
        />
        <h3>{name}</h3>
      </a>
      <p>{designation}</p>
      <p>{company}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href={profile} style={{ textDecoration: "none" }}>
          <h3>Profile</h3>
        </a>
        <Divider orientation="vertical" variant="middle" flexItem />
        <a href={email} style={{ textDecoration: "none" }}>
          <h3>Email</h3>
        </a>
        <Divider orientation="vertical" variant="middle" flexItem />
        <a href={phone} style={{ textDecoration: "none" }}>
          <h3>Phone</h3>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
