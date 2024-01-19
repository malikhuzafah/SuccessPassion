import React from "react";
import { Container, Grid } from "@mui/material";

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
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <div>
              <div
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  backgroundColor: "#00338d",
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
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <div>
              <div
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  backgroundColor: "#00338d",
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
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <div>
              <div
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "0 auto",
                  backgroundColor: "#00338d",
                  borderRadius: "50%",
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
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <div>
              <div
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  backgroundColor: "#00338d",
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
          </Grid>
        </Grid>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <button className="allBtn">All Services</button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
