import React from "react";
import { Container, Grid } from "@mui/material";

const IndustriesComponent = ({ home }) => {
  return (
    <div
      style={{
        backgroundColor: home ? "#f0f0f0" : "#ffffff",
        padding: "50px 0",
      }}
    >
      <Container
        style={
          !home
            ? {
                transform: "translateY(-100px)",
                padding: "10px",
                backgroundColor: "#ffffff",
              }
            : {}
        }
      >
        {home && (
          <h1 style={{ textAlign: "center", color: "#00338d" }}>Industries</h1>
        )}
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                padding: "20px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#00338d",
                }}
              ></div>
              <div>
                <h3>Asset Management</h3>
                <p>
                  Working with asset management firms, from institutional
                  investors to wealth management, helping themm make bold
                  decisions required for future success.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                padding: "20px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#00338d",
                }}
              ></div>
              <div>
                <h3>Banking and Capital Markets</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  doloribus debitis perferendis aspernatur deserunt dolor
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                padding: "20px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#00338d",
                }}
              ></div>
              <div>
                <h3>Financial Services</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  doloribus debitis perferendis aspernatur deserunt dolor
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                padding: "20px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#00338d",
                }}
              ></div>
              <div>
                <h3>Financial Services</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  doloribus debitis perferendis aspernatur deserunt dolor
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                padding: "20px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#00338d",
                }}
              ></div>
              <div>
                <h3>Financial Services</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  doloribus debitis perferendis aspernatur deserunt dolor
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                padding: "20px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#00338d",
                }}
              ></div>
              <div>
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
          <button className="allBtn">All Industries</button>
        </div>
      </Container>
    </div>
  );
};

export default IndustriesComponent;
