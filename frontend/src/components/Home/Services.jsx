import React from "react";
import { Container, Grid, Link } from "@mui/material";

const Services = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px 0",
      }}
    >
      <Container>
        <h1
          style={{
            color: "#00338d",
          }}
        >
          Services
        </h1>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="serviceLink"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <Link underline="none" href="/services" color="#000000">
              <div>
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    backgroundImage: "url(/assets/slide-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  style={{
                    padding: "10px",
                  }}
                >
                  <h3>Financial Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    doloribus debitis perferendis aspernatur deserunt dolor
                  </p>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="serviceLink"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <Link underline="none" href="/services" color="#000000">
              <div>
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    backgroundImage: "url(/assets/slide-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  style={{
                    padding: "10px",
                  }}
                >
                  <h3>Financial Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    doloribus debitis perferendis aspernatur deserunt dolor
                  </p>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="serviceLink"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <Link underline="none" href="/services" color="#000000">
              <div>
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    backgroundImage: "url(/assets/slide-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  style={{
                    padding: "10px",
                  }}
                >
                  <h3>Financial Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    doloribus debitis perferendis aspernatur deserunt dolor
                  </p>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="serviceLink"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <Link underline="none" href="/services" color="#000000">
              <div>
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    backgroundImage: "url(/assets/slide-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  style={{
                    padding: "10px",
                  }}
                >
                  <h3>Financial Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    doloribus debitis perferendis aspernatur deserunt dolor
                  </p>
                </div>
              </div>
            </Link>
          </Grid>
        </Grid>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <button className="allBtn">All Services</button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
