import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import CustomSeparator from "../../components/CustomSeperator/CustomSeperator";
import Footer from "../../components/Footer/Footer";
import TopBanner from "../../components/TopBanner/TopBanner";
import ArticleFull from "../../components/Articles/ArticleFull";
import Article from "../../components/Articles/Article";
import ArticleTag from "../../components/Articles/ArticleTag";
import ContactCard from "../../components/Contact/ContactCard";
import Connect from "../../components/Contact/Connect";
import SignUpCard from "../../components/Contact/SignupCard";
import BottomNav from "../../components/BottomNav/BottomNav";

const DigitalAdoption = () => {
  const navigate = useNavigate();

  const articles = [
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

  const articleTags = [
    {
      title: "Business Protection",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://picsum.photos/500/400",
      link: "/insights",
    },
    {
      title: "Business Performance",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://picsum.photos/500/400",
      link: "/insights",
    },
    {
      title: "Digital Adoption And Transformation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://picsum.photos/500/400",
      link: "/insights",
    },
    {
      title: "Business Protection",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://picsum.photos/500/400",
      link: "/insights",
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
      Digital Adoption And Transformation
    </Typography>,
  ];

  return (
    <div>
      <TopBanner
        title={"Digital Adoption And Transformation"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis suscipit molestiae cum cupiditate. Voluptates dolorum, sequi quae, architecto accusantium nihil blanditiis id voluptas soluta culpa cupiditate possimus voluptatum atque?"
        }
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
          <Grid item xs={12}>
            <ArticleFull
              title={"Make the difference"}
              desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
              link={"/insights"}
              img={"/assets/slide-2.jpg"}
            />
          </Grid>
          {articles.map((article, index) => {
            return (
              <Grid item sm={12} md={4} key={index}>
                <Article
                  title={article.title}
                  desc={article.desc}
                  img={article.img}
                  link={article.link}
                />
              </Grid>
            );
          })}
          {articleTags.map((article, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ArticleTag
                  title={article.title}
                  desc={article.desc}
                  img={article.img}
                  link={article.link}
                />
              </Grid>
            );
          })}
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

export default DigitalAdoption;
