import React from "react";
import { Divider, Grid, Typography, Link, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomSeparator from "../../components/CustomSeperator/CustomSeperator";
import TopBanner from "../../components/TopBanner/TopBanner";

const Retail = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={() => {
        navigate("/");
      }}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/industries"
      onClick={() => {
        navigate("/industries");
      }}
    >
      Industries
    </Link>,
    <Typography key="3" color="text.primary">
      Consumer and Retail
    </Typography>,
  ];

  return (
    <div>
      <TopBanner
        title={"Consumer and Retail"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis suscipit molestiae cum cupiditate. Voluptates dolorum, sequi quae,"
        }
      />
      <Container
        style={{
          paddingTop: "20px",
        }}
      >
        <CustomSeparator breadcrumbs={breadcrumbs} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos amet placeat cum recusandae totam, hic cupiditate
                sit maiores alias eaque necessitatibus tempore. Voluptatem
                repellendus vitae aut et architecto sapiente sit?;Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Inventore tempore
                quisquam, error, mollitia est deleniti, assumenda facere at
                harum debitis voluptas corrupti tempora aperiam accusantium
                iure! Minus incidunt alias voluptatibus! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Dignissimos amet placeat cum
                recusandae totam, hic cupiditate sit maiores alias eaque
                necessitatibus tempore. Voluptatem repellendus vitae aut et
                architecto sapiente sit?;Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Inventore tempore quisquam, error, mollitia
                est deleniti, assumenda facere at harum debitis voluptas
                corrupti tempora aperiam accusantium iure! Minus incidunt alias
                voluptatibus! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Dignissimos amet placeat cum recusandae totam,
                hic cupiditate sit maiores alias eaque necessitatibus tempore.
                Voluptatem repellendus vitae aut et architecto sapiente
                sit?;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore tempore quisquam, error, mollitia est deleniti,
                assumenda facere at harum debitis voluptas corrupti tempora
                aperiam accusantium iure! Minus incidunt alias voluptatibus!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos amet placeat cum recusandae totam, hic cupiditate
                sit maiores alias eaque necessitatibus tempore. Voluptatem
                repellendus vitae aut et architecto sapiente sit?;Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Inventore tempore
                quisquam, error, mollitia est deleniti, assumenda facere at
                harum debitis voluptas corrupti tempora aperiam accusantium
                iure! Minus incidunt alias voluptatibus!
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div
              style={{
                backgroundColor: "#323232",
                height: "100%",
                padding: "20px",
                color: "#ffffff",
              }}
            >
              <h3>Global economic outlook</h3>
              <p>Trending cautiously amid risks.</p>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2}></Grid>
      </Container>
    </div>
  );
};

export default Retail;
