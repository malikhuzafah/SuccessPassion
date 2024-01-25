import React from "react";
import { Container, Grid } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import Footer from "../../components/Footer/Footer";
import TopBanner from "../../components/TopBanner/TopBanner";
import ServicesComponent from "../../components/Home/ServicesComponent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Services = () => {
  return (
    <div>
      <TopBanner
        title={"Services"}
        desc={
          "Our collective business commitments and the actions we are taking to make an even more positive impact on the world"
        }
        img={"/assets/services.jpg"}
      />
      <Container
        style={{
          textAlign: "center",
        }}
      >
        <ServicesComponent />
      </Container>

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
            <div
              style={{
                height: "400px",
                display: "flex",
                alignItems: "end",
                padding: "20px",
                position: "relative",
                backgroundImage: "url(/assets/sbpro.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
                <h3>Business Performance</h3>
                <p>
                  Our business has achieved remarkable financial success, driven
                  by increased profits and a focus on customer satisfaction. We
                  stand out with innovative solutions, streamlined operations,
                  successful market expansion, and a highly engaged team, all
                  contributing to our outstanding business performance.
                </p>
              </div>
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
            <div
              style={{
                height: "400px",
                display: "flex",
                alignItems: "end",
                padding: "20px",
                position: "relative",
                backgroundImage: "url(/assets/sbper.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
                <h3>Business Protection</h3>
                <p>
                  Our business prioritizes security through robust measures,
                  risk mitigation, legal compliance, data confidentiality,
                  insurance coverage, and continuity planning, ensuring
                  comprehensive protection against potential threats and
                  uncertainties.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

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
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            background: "linear-gradient(#1e49e2, #00338d)",
            color: "#ffffff",
          }}
        >
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
              Check out our global website. That could be a good place to start.
            </p>
            <a href="#" className="link">
              Visit global site
            </a>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            background: "linear-gradient(#00338d, #0c233c)",
            color: "#ffffff",
          }}
        >
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
              Check out our global website. That could be a good place to start.
            </p>
            <a href="#" className="link">
              Visit global site
            </a>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            background: "linear-gradient(#1e49e2, #00338d)",
            color: "#ffffff",
          }}
        >
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
              Check out our global website. That could be a good place to start.
            </p>
            <a href="#" className="link">
              Visit global site
            </a>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Services;
