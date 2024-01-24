import React from "react";
import { Container, Grid } from "@mui/material";
import FilterInsights from "../../components/FilterInsights/FilterInsights";
import Footer from "../../components/Footer/Footer";
import Article from "../../components/Articles/Article";
import ArticleArrow from "../../components/Articles/ArticleArrow";

const Insights = () => {
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

  const trendingTopics = [
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      img: "https://picsum.photos/500/400",
    },
  ];

  const mostViewedArticles = [
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      img: "https://picsum.photos/500/400",
    },
  ];

  return (
    <div>
      <div
        style={{
          height: "60vh",
          display: "flex",
          padding: "50px",
          alignItems: "center",
          backgroundImage: "url(/assets/slide-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ width: "60%", transform: "translateY(-50px)" }}>
          <h1>Insights</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            veritatis incidunt repellat quia corporis culpa quaerat sapiente eos
            aut doloribus, nihil, temporibus quas cumque est fuga veniam quos.
            In, laboriosam.
          </p>
        </div>
      </div>
      <Container>
        <Grid
          container
          style={{
            transform: "translateY(-50px)",
            padding: "20px",
            backgroundColor: "#ffffff",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <Article
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus debitis perferendis aspernatur deserunt dolor"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus debitis perferendis aspernatur deserunt dolor"
              link="/insights"
              img="https://picsum.photos/500/400"
            />
            {/* <div
              style={{
                backgroundColor: "#323232",
                height: "400px",
                display: "flex",
                alignItems: "end",
                padding: "20px",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: "5px", right: "5px" }}>
                <BookmarkAddIcon />
              </div>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "5px",
                }}
              >
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  doloribus debitis perferendis aspernatur deserunt dolor
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  doloribus debitis perferendis aspernatur deserunt dolor
                </p>
              </div>
            </div> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <div
              style={{
                height: "500px",
                overflow: "scroll",
                overflowX: "hidden",
              }}
            >
              {articles.map((article) => (
                <ArticleArrow
                  title={article.title}
                  desc={article.desc}
                  link={article.link}
                  img={article.img}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            padding: "20px",
            backgroundImage: "url(/assets/slide-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h2>Our impact plan</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              doloribus debitis perferendis aspernatur deserunt dolor
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <Grid
          container
          spacing={2}
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <h3>Trending Topics</h3>
            <div
              style={{
                height: "500px",
                overflow: "scroll",
                overflowX: "hidden",
              }}
            >
              {trendingTopics.map((article) => (
                <ArticleArrow
                  title={article.title}
                  desc={article.desc}
                  link={article.link}
                  img={article.img}
                />
              ))}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <h3>Most Viewed Articles</h3>
            <div
              style={{
                height: "500px",
                overflow: "scroll",
                overflowX: "hidden",
              }}
            >
              {mostViewedArticles.map((article) => (
                <ArticleArrow
                  title={article.title}
                  desc={article.desc}
                  link={article.link}
                  img={article.img}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
      <FilterInsights />
      <Footer />
    </div>
  );
};

export default Insights;
