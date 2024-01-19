import React from "react";
import { Grid, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwipeableTextMobileStepper from "../../components/Carousel/SwipeableTextMobileStepper";
import Footer from "../../components/Footer/Footer";

const Careers = () => {
  return (
    <div>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 0",
          alignItems: "center",
        }}
      >
        <div>
          <a href="#" className="careersLink">
            Who we are
          </a>
          <a href="#" className="careersLink">
            Working at Success Passion
          </a>
          <a href="#" className="careersLink">
            What we do
          </a>
        </div>
        <div>
          <button className="careersBtn">Job Search</button>
        </div>
      </Container>
      <div
        style={{
          padding: "0 100px",
        }}
      >
        <div
          style={{
            height: "400px",
            backgroundColor: "red",
            backgroundImage:
              "url('https://www.successpassion.com/wp-content/uploads/2021/10/AdobeStock_190166713-1024x683.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <div style={{ transform: "translateY(200px)" }}>
              <div
                style={{
                  width: "40%",
                  backgroundColor: "#ffffff",
                  padding: "100px 50px",
                }}
              >
                <h1>Success Passion Careers</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  fugiat officia, unde culpa quos delectus doloremque fugit
                  officiis exercitationem et perferendis, quidem sint obcaecati.
                  Inventore facilis accusamus quam eligendi reprehenderit?
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container
        style={{
          marginTop: "200px",
        }}
      >
        <div
          style={{
            backgroundColor: "#1e49e2",
            color: "#ffffff",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  padding: "100px",
                }}
              >
                <p>About Success Passion</p>
                <h2>We are a people business at heart</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus exercitationem dicta distinctio reprehenderit nam
                  recusandae autem? Neque repudiandae at debitis quidem? Facilis
                  voluptates magni veritatis similique. A velit ullam similique.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti magni, molestiae atque culpa voluptas dolores aut
                  placeat dolore libero rem eum. Quia eius aperiam reprehenderit
                  fuga dolore nam voluptate ipsa.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              color: "#000000",
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  borderLeft: "1px solid #1e49e2",
                  borderBottom: "1px solid #1e49e2",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#1e49e2",
                  }}
                ></div>
                <div>
                  <h3>Financial Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    doloribus debitis perferendis aspernatur deserunt dolor
                  </p>
                </div>
                <a href="#" className="careersLink2">
                  Learn More{" "}
                  <ArrowForwardIosIcon
                    style={{
                      fontSize: "12px",
                    }}
                  />
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  borderLeft: "1px solid #1e49e2",
                  borderBottom: "1px solid #1e49e2",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#1e49e2",
                  }}
                ></div>
                <div>
                  <h3>Financial Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    doloribus debitis perferendis aspernatur deserunt dolor
                  </p>
                </div>
                <a href="#" className="careersLink2">
                  Learn More{" "}
                  <ArrowForwardIosIcon
                    style={{
                      fontSize: "12px",
                    }}
                  />
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  borderLeft: "1px solid #1e49e2",
                  borderBottom: "1px solid #1e49e2",
                  borderRight: "1px solid #1e49e2",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#1e49e2",
                  }}
                ></div>
                <div>
                  <h3>Financial Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    doloribus debitis perferendis aspernatur deserunt dolor
                  </p>
                </div>
                <a href="#" className="careersLink2">
                  Learn More{" "}
                  <ArrowForwardIosIcon
                    style={{
                      fontSize: "12px",
                    }}
                  />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div
        style={{
          padding: "0 100px",
        }}
      >
        <div
          style={{
            height: "400px",
            backgroundColor: "red",
            backgroundImage:
              "url('https://www.successpassion.com/wp-content/uploads/2021/10/AdobeStock_190166713-1024x683.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <div style={{ transform: "translateY(200px)" }}>
              <div
                style={{
                  width: "40%",
                  backgroundColor: "#ffffff",
                  padding: "100px 50px",
                }}
              >
                <h1>Success Passion Careers</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  fugiat officia, unde culpa quos delectus doloremque fugit
                  officiis exercitationem et perferendis, quidem sint obcaecati.
                  Inventore facilis accusamus quam eligendi reprehenderit?
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container
        style={{
          marginTop: "200px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f0f0f0",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  padding: "100px",
                }}
              >
                <p>About Success Passion</p>
                <h2>We are a people business at heart</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus exercitationem dicta distinctio reprehenderit nam
                  recusandae autem? Neque repudiandae at debitis quidem? Facilis
                  voluptates magni veritatis similique. A velit ullam similique.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti magni, molestiae atque culpa voluptas dolores aut
                  placeat dolore libero rem eum. Quia eius aperiam reprehenderit
                  fuga dolore nam voluptate ipsa.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>

      <div
        style={{
          padding: "0 50px",
        }}
      >
        <div
          style={{
            height: "600px",
            backgroundColor: "#000000",
          }}
        ></div>
      </div>

      <div
        style={{
          padding: "0 50px",
        }}
      >
        <div
          style={{
            height: "400px",
            backgroundColor: "#f0f0f0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "85%",
            padding: "0 50px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              height: "100%",
            }}
          >
            <div>
              <h3>Apply Now</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                temporibus, dolore impedit deserunt quam accusamus autem quis,
                architecto ipsa tempore nihil! Sequi dolorum consectetur commodi
                dolorem amet. Eos, at inventore.
              </p>
              <button
                style={{
                  backgroundColor: "#1e49e2",
                  color: "#ffffff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "25px",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Job Search{" "}
                  <ArrowForwardIosIcon
                    style={{
                      fontSize: "12px",
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            transform: "translateY(-200px) translateX(-100px)",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <div
            style={{
              width: "40%",
              backgroundColor: "#1e49e2",
              color: "#ffffff",
              padding: "20px",
              paddingBottom: "100px",
            }}
          >
            <h2>Success Passion Careers</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              fugiat officia, unde culpa quos delectus doloremque fugit officiis
              exercitationem et perferendis, quidem sint obcaecati. Inventore
              facilis accusamus quam eligendi reprehenderit?
            </p>
          </div>
        </div>
      </div>

      <Footer />

      {/* <Grid
        container
        style={{
          marginTop: "100px",
        }}
      >
        <Grid item xs={12} sm={6}>
          <div>
            <p>About Success Passion</p>
            <h2>We are a people business at heart</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              exercitationem dicta distinctio reprehenderit nam recusandae
              autem? Neque repudiandae at debitis quidem? Facilis voluptates
              magni veritatis similique. A velit ullam similique. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Corrupti magni,
              molestiae atque culpa voluptas dolores aut placeat dolore libero
              rem eum. Quia eius aperiam reprehenderit fuga dolore nam voluptate
              ipsa.
            </p>
          </div>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Careers;
