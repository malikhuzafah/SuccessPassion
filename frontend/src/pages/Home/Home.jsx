import React from "react";
import "./Home.css";
import { Container, Grid } from "@mui/material";
import Services from "../../components/Home/Services";
import Footer from "../../components/Footer/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IndustriesComponent from "../../components/Home/IndustriesComponent";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import Article from "../../components/Articles/Article";

const Home = () => {
  const articles = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
      img: "/assets/slide-2.jpg",
      link: "/blog",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
      img: "/assets/slide-2.jpg",
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
      <Services />
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
              <h2>Don’t see your location?</h2>
              <p
                style={{
                  marginBottom: "40px",
                }}
              >
                Check out our global website. That could be a good place to
                start.
              </p>
              <a href="#" className="btn2">
                Visit global site
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
              <h2>Don’t see your location?</h2>
              <p
                style={{
                  marginBottom: "40px",
                }}
              >
                Check out our global website. That could be a good place to
                start.
              </p>
              <a href="#" className="btn2">
                Visit global site
              </a>
            </div>
          </Container>
        </Grid>
      </Grid>
      <div
        style={{
          padding: "100px 50px",
          backgroundImage: "url(/assets/slide-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#ffffff",
        }}
      >
        <Container>
          <h1>Success Passion Blogs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            odio, in sit earum repellat dicta doloribus vitae cumque quod
            consequuntur veritatis magni voluptatum accusamus est tenetur modi,
            atque ad accusantium!
          </p>
          <a href="#" className="link">
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
