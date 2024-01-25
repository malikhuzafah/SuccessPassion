import React from "react";
import { Container, Grid } from "@mui/material";
import IndusItem from "./IndusItem";

const IndustriesComponent = ({ home }) => {
  const industries = [
    {
      title: "Asset Management",
      desc: "Shifting regulation, customer demands, and technologies are transforming the energy sector. Together we can tackle difficult issues",
      img: "/assets/home-assets.png",
      link: "/industries",
    },
    {
      title: "Banking and Capital Markets",
      desc: "A global network of professionals who deliver meaningful results through a deep understanding of the issues and operations of the public sector.",
      img: "/assets/home-stats.png",
      link: "/industries",
    },
    {
      title: "Energy",
      desc: "Shifting regulation, customer demands, and technologies are transforming the energy sector. Together we can tackle difficult issues",
      img: "/assets/home-energy.png",
      link: "/industries",
    },
    {
      title: "Government",
      desc: "A global network of professionals who deliver meaningful results through a deep understanding of the issues and operations of the public sector.",
      img: "/assets/home-government.png",
      link: "/industries",
    },
    {
      title: "Life Sciences",
      desc: "Building, reforming and transforming world-class biotechnology, pharmaceutical and medical device corporations to meet the demands of patients.",
      img: "/assets/home-life.png",
      link: "/industries",
    },
    {
      title: "Insurance",
      desc: "Helping the world’s largest insurers dealing with regulatory changes, operational pressures and demands to digitize, prepare for the future.",
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
