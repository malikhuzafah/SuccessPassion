import React from "react";
import { Container, Grid } from "@mui/material";
import IndusItem from "./IndusItem";

const IndustriesComponent = ({ home }) => {
  const industries = [
    {
      title: "Asset Management",
      desc: "Working with asset management firms, from institutional investors to wealth management, helping themm make bold decisions required for future success.",
      img: "/assets/home-assets.png",
      link: "/industries",
    },
    {
      title: "Banking and Capital Markets",
      desc: "From the world’s largest banks to fintech’s, we help them create a future that is interconnected, secure and frictionless for their clients.",
      img: "/assets/home-stats.png",
      link: "/industries",
    },
    {
      title: "Financial Services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus debitis perferendis aspernatur deserunt dolor",
      img: "/assets/home-energy.png",
      link: "/industries",
    },
    {
      title: "Government",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus debitis perferendis aspernatur deserunt dolor",
      img: "/assets/home-government.png",
      link: "/industries",
    },
    {
      title: "Life Sciences",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus debitis perferendis aspernatur deserunt dolor",
      img: "/assets/home-life.png",
      link: "/industries",
    },
    {
      title: "Insurance",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus debitis perferendis aspernatur deserunt dolor",
      img: "/assets/home-insurance.png",
      link: "/industries",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: home ? "#f0f0f0" : "#ffffff",
        padding: "50px 0",
      }}
    >
      <Container
        style={
          !home
            ? {
                transform: "translateY(-100px)",
                padding: "10px",
                backgroundColor: "#ffffff",
              }
            : {}
        }
      >
        {home && (
          <h1 style={{ textAlign: "center", color: "#00338d" }}>Industries</h1>
        )}
        <Grid container>
          {industries.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              className="serviceLink"
              style={{
                height: "100%",
              }}
            >
              <IndusItem
                title={item.title}
                desc={item.desc}
                img={item.img}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <button className="allBtn">All Industries</button>
        </div>
      </Container>
    </div>
  );
};

export default IndustriesComponent;
