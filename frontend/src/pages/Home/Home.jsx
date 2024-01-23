import React from "react";
import "./Home.css";
import { Container, Grid } from "@mui/material";
import Services from "../../components/Home/Services";
import Footer from "../../components/Footer/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IndustriesComponent from "../../components/Home/IndustriesComponent";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

const Home = () => {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000000",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1629788950017-4b8b9b5b9b0f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHh4eHx8fHx8fDE2MzE5NjY0NjQ&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=60)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          color: "#ffffff",
          // textAlign: "center",
          // padding: "0 100px",
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
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              padding: "10px",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              style={{
                backgroundColor: "#323232",
                height: "400px",
                display: "flex",
                alignItems: "end",
                padding: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "10px",
                  width: "100%",
                  overflow: "hidden",
                  height: "170px",
                }}
              >
                <h3>Human-centric AI and the workplace: Live event</h3>
                <p>
                  Join us at 1:00pm CET to hear Brad Smith, President of
                  Microsoft on AI on actions that business can take.
                </p>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              padding: "10px",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              style={{
                backgroundColor: "#323232",
                height: "400px",
                display: "flex",
                alignItems: "end",
                padding: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "10px",
                  width: "100%",
                  height: "170px",
                  overflow: "hidden",
                }}
              >
                <h3>Global economic outlook</h3>
                <p>Trending cautiously amid risks.</p>
              </div>
            </div>
          </Grid>
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
          backgroundColor: "#000000",
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
