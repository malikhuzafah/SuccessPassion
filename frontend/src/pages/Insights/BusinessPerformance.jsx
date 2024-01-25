import React from "react";
import { Container, Grid, Typography, Divider } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import CustomSeparator from "../../components/CustomSeperator/CustomSeperator";
import { ArrowForwardIos } from "@mui/icons-material";
import Footer from "../../components/Footer/Footer";
import TopBanner from "../../components/TopBanner/TopBanner";
import Article from "../../components/Articles/Article";
import ContactCard from "../../components/Contact/ContactCard";
import Connect from "../../components/Contact/Connect";
import SignUpCard from "../../components/Contact/SignupCard";
import ArticleFull from "../../components/Articles/ArticleFull";
import ArticleTag from "../../components/Articles/ArticleTag";
import BottomNav from "../../components/BottomNav/BottomNav";

const BusinessPerformance = () => {
  const navigate = useNavigate();

  const smallArticles = [
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
  ];

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

    <Typography key="3" color="text.primary">
      Business Performance
    </Typography>,
  ];

  return (
    <div>
      <TopBanner
        title={"Business Performance"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis suscipit molestiae cum cupiditate. Voluptates dolorum, sequi quae, architecto accusantium nihil blanditiis id voluptas soluta culpa cupiditate possimus voluptatum atque?"
        }
        img={"/assets/slide-1.jpg"}
      />
      <Container
        style={{
          paddingTop: "20px",
        }}
      >
        <CustomSeparator breadcrumbs={breadcrumbs} />
        <div
          style={{
            padding: "40px 0",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            exercitationem. Est odit, delectus explicabo quo velit, corporis
            facilis repellendus molestias voluptatibus saepe vitae. Expedita vel
            consectetur magni, optio eius adipisci.
          </p>
        </div>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              backgroundColor: "#ffffff",
              // padding: "0 5px 0 0",
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
              // padding: "0 0 0 5px",
              backgroundColor: "#ffffff",
            }}
          >
            <Article
              title={"Global economic outlook"}
              desc={"Trending cautiously amid risks."}
              img={"/assets/slide-1.jpg"}
              link={"/"}
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            style={
              {
                // padding: "10px 5px 0 0",
              }
            }
          >
            <Article
              title={"Global economic outlook"}
              desc={"Trending cautiously amid risks."}
              img={"/assets/slide-1.jpg"}
              link={"/"}
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            style={
              {
                // padding: "10px 5px 0 5px",
              }
            }
          >
            <Article
              title={"Global economic outlook"}
              desc={"Trending cautiously amid risks."}
              img={"/assets/slide-1.jpg"}
              link={"/"}
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            style={
              {
                // padding: "10px 0 0 5px",
              }
            }
          >
            <Article
              title={"Global economic outlook"}
              desc={"Trending cautiously amid risks."}
              img={"/assets/slide-1.jpg"}
              link={"/"}
            />
          </Grid>
          {smallArticles.map((article) => (
            <Grid item xs={12} sm={6} md={3}>
              <ArticleTag
                title={article.title}
                desc={article.desc}
                img={article.img}
                link={article.link}
              />
            </Grid>
          ))}
        </Grid>

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

export default BusinessPerformance;
