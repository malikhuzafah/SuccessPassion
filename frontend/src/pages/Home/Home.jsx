import React from "react";
import "./Home.css";
import { Container, Grid } from "@mui/material";
import ServicesContent from "../../components/Home/ServicesComponent";
import Footer from "../../components/Footer/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IndustriesComponent from "../../components/Home/IndustriesComponent";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import Article from "../../components/Articles/Article";

const Home = () => {
  const articles = [
    {
      title: "Transforming IT in a cloud and AI-enabled era",
      desc: "The Future of IT",
      img: "/assets/h-1.jpg",
      link: "/blog",
    },
    {
      title: "Shaping the workforce of the future with AI",
      desc: "The future of work",
      img: "/assets/h-2.jpg",
      link: "/blog",
    },
  ];

  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000000",
          color: "#ffffff",
        }}
      >
        <HomeCarousel />
      </div>
      <Container>
        <Grid
          container
          style={{
            transform: "translateY(-50px)",
            padding: "10px",
            backgroundColor: "#ffffff",
          }}
        >
          {articles.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                padding: "10px",
                backgroundColor: "#ffffff",
              }}
            >
              <Article
                title={item.title}
                desc={item.desc}
                img={item.img}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <IndustriesComponent home={true} />
      <ServicesContent />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            background: "linear-gradient(#00338d, #0c233c)",
            color: "#ffffff",
          }}
        >
          <Container>
            <div
              style={{
                padding: "100px 50px",
              }}
            >
              <h2>Stay up to date with what matters to you</h2>
              <p
                style={{
                  marginBottom: "40px",
                }}
              >
                Gain access to personalized content based on your interests by
                signing up today Stay up to date with what matters to you.
              </p>
              <a href="#" className="btn2">
                Read more
              </a>
            </div>
          </Container>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            background: "linear-gradient(#1e49e2, #00338d)",
            color: "#ffffff",
          }}
        >
          <Container>
            <div
              style={{
                padding: "100px 50px",
              }}
            >
              <h2>Welcome to the Success Passion base of research.</h2>
              <p
                style={{
                  marginBottom: "40px",
                }}
              >
                Discover our thought leadership
              </p>
              <a href="#" className="btn2">
                Read more
              </a>
            </div>
          </Container>
        </Grid>
      </Grid>
      <div
        style={{
          padding: "100px 50px",
          backgroundImage: "url(/assets/hblog.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#000000",
        }}
      >
        <Container>
          <h1>Success Passion Blogs</h1>
          <p>
            Viewpoints from Success Passion leaders and subject matter experts
            from around the world.
          </p>
          <a
            href="#"
            className="link"
            style={{
              color: "#000000",
            }}
          >
            Read Our Blogs{" "}
            <ArrowForwardIosIcon
              style={{
                fontSize: "20px",
                transform: "translateY(4px)",
              }}
            />
          </a>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
