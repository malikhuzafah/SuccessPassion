import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import TopBanner from "../../components/TopBanner/TopBanner";
import Article from "../../components/Articles/Article";
import ArticleTag from "../../components/Articles/ArticleTag";
import ContactCard from "../../components/Contact/ContactCard";
import Connect from "../../components/Contact/Connect";
import SignUpCard from "../../components/Contact/SignupCard";
import ArticleFull from "../../components/Articles/ArticleFull";
import BottomNav from "../../components/BottomNav/BottomNav";

const ESG = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBanner
        title={"Environmental, social and governance (ESG)"}
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      />
      <Container
        style={{
          paddingTop: "20px",
        }}
      >
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
        <div
          style={{
            padding: "40px 0",
          }}
        >
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Featured Content
          </h1>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                backgroundColor: "#ffffff",
              }}
            >
              <Article
                title={"Human-centric AI and the workplace: Live event"}
                desc={
                  "Join us at 1:00pm CET to hear Brad Smith, President of Microsoft on AI on actions that business can take."
                }
                img={"/assets/slide-1.jpg"}
                link={"/"}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                backgroundColor: "#ffffff",
              }}
            >
              <Article
                title={"Human-centric AI and the workplace: Live event"}
                desc={
                  "Join us at 1:00pm CET to hear Brad Smith, President of Microsoft on AI on actions that business can take."
                }
                img={"/assets/slide-1.jpg"}
                link={"/"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ArticleTag
                title={"Financial Strength and reporting"}
                desc={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id architecto autem, blanditiis labore velit quis,"
                }
                img={"/assets/slide-1.jpg"}
                link={"/"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ArticleTag
                title={"Financial Strength and reporting"}
                desc={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id architecto autem, blanditiis labore velit quis,"
                }
                img={"/assets/slide-1.jpg"}
                link={"/"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ArticleTag
                title={"Financial Strength and reporting"}
                desc={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id architecto autem, blanditiis labore velit quis,"
                }
                img={"/assets/slide-1.jpg"}
                link={"/"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ArticleTag
                title={"Financial Strength and reporting"}
                desc={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id architecto autem, blanditiis labore velit quis,"
                }
                img={"/assets/slide-1.jpg"}
                link={"/"}
              />
            </Grid>
          </Grid>
        </div>

        <div>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Connect with us
          </h1>

          <Grid container spacing={2}>
            <Grid item sm={12} md={3}>
              <ContactCard
                name={"Ian Hancook"}
                designation={"Global head of consulting"}
                company={"Success Passion International"}
                profile={"/insights"}
                email={"/insights"}
                phone={"/insights"}
                img={"/assets/slide-1.jpg"}
              />
            </Grid>
            <Grid item sm={12} md={3}>
              <ContactCard
                name={"Ian Hancook"}
                designation={"Global head of consulting"}
                company={"Success Passion International"}
                profile={"/insights"}
                email={"/insights"}
                phone={"/insights"}
                img={"/assets/slide-1.jpg"}
              />
            </Grid>
            <Grid item sm={12} md={3}>
              <Connect />
            </Grid>
            <Grid item sm={12} md={3}>
              <SignUpCard />
            </Grid>
          </Grid>
        </div>

        <div>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Read our Client stories
          </h1>
          <ArticleFull
            title={"Client Stories"}
            desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
            img={"/assets/slide-2.jpg"}
            link={"/insights"}
          />
        </div>

        <div>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            A guide to the business implications of COVID-19
          </h1>
          <BottomNav />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ESG;
