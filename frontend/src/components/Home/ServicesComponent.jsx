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
                    backgroundImage: "url(/assets/s1.jpg)",
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
                  <h3>Audit and Assurance</h3>
                  <p>
                    We are committed to serving the public interest by providing
                    objective assurance over data on which investors rely.
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
                    backgroundImage: "url(/assets/s2.jpg)",
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
                  <h3>Tax & Legal</h3>
                  <p>
                    You face steep compliance demands and complex changes; we
                    help you transform your function to make a greater impact.
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
                    backgroundImage: "url(/assets/s3.jpg)",
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
                  <h3>Advisory</h3>
                  <p>
                    Together, we help you create lasting value and responsible
                    growth to make your business fit for tomorrow.
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
                    backgroundImage: "url(/assets/s4.jpg)",
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
                  <h3>Private Enterprise</h3>
                  <p>
                    Helping entrepreneurs build great businesses. We know what
                    it takes to be successful at each stage of your business.
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
