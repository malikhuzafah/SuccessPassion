import React from "react";
import { Container, Grid, Typography, Divider } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import CustomSeparator from "../../components/CustomSeperator/CustomSeperator";
import { ArrowForwardIos } from "@mui/icons-material";
import Footer from "../../components/Footer/Footer";

const BusinessProtection = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={() => {
        navigate("/");
      }}
    >
      Home
    </Link>,

    <Typography key="3" color="text.primary">
      Business Protection
    </Typography>,
  ];

  return (
    <div>
      <div>
        <Container>
          <h1>Business Protection</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis
            suscipit molestiae cum cupiditate. Voluptates dolorum, sequi quae,
            architecto accusantium nihil blanditiis id voluptas soluta culpa
            cupiditate possimus voluptatum atque?
          </p>
        </Container>
      </div>
      <Container>
        <CustomSeparator breadcrumbs={breadcrumbs} />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            exercitationem. Est odit, delectus explicabo quo velit, corporis
            facilis repellendus molestias voluptatibus saepe vitae. Expedita vel
            consectetur magni, optio eius adipisci.
          </p>
        </div>
        <Grid container spacing={2}></Grid>

        <div>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Connect with us
          </h1>

          <Grid container spacing={2}>
            <Grid item sm={12} md={3}>
              <div
                style={{
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                  textAlign: "center",
                  flexDirection: "column",
                }}
              >
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    src=""
                    alt=""
                    height={"150px"}
                    width={"150px"}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <h3>Ian Hancook</h3>
                </a>
                <p>Global head of consulting</p>
                <p>Success Passion International</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <a href="" style={{ textDecoration: "none" }}>
                    <h3>Profile</h3>
                  </a>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <a href="" style={{ textDecoration: "none" }}>
                    <h3>Email</h3>
                  </a>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <a href="" style={{ textDecoration: "none" }}>
                    <h3>Phone</h3>
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={3}>
              <div
                style={{
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                  textAlign: "center",
                  flexDirection: "column",
                }}
              >
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    src=""
                    alt=""
                    height={"150px"}
                    width={"150px"}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <h3>Ian Hancook</h3>
                </a>
                <p>Global head of consulting</p>
                <p>Success Passion International</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <a href="" style={{ textDecoration: "none" }}>
                    <h3>Profile</h3>
                  </a>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <a href="" style={{ textDecoration: "none" }}>
                    <h3>Email</h3>
                  </a>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <a href="" style={{ textDecoration: "none" }}>
                    <h3>Phone</h3>
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={3}>
              <div>
                <h2>Connect with us</h2>
                <p>Find office Locations</p>
                <Divider />
                <p>Find office Locations</p>
                <Divider />
                <p>Find office Locations</p>
              </div>
            </Grid>
            <Grid item sm={12} md={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  backgroundColor: "#323232",
                  color: "#ffffff",
                }}
              >
                <div
                  style={{
                    padding: "15px",
                  }}
                >
                  <h3>Stay up to date with what matters to you</h3>
                </div>
                <div
                  style={{
                    padding: "15px",
                  }}
                >
                  <p>
                    Gain access to personalized content based on your interests
                    by signing up today
                  </p>
                  <button
                    style={{
                      width: "100%",
                      padding: "15px",
                      backgroundColor: "#ffffff",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                  >
                    Sign up today
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Read our Client stories
          </h1>
          <a
            href=""
            style={{
              textDecoration: "none",
              color: "#000000",
            }}
          >
            <div
              style={{
                height: "400px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#323232",
                padding: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "50px",
                }}
              >
                <h3>Client Stories</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </a>
        </div>

        <div>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            A guide to the business implications of COVID-19
          </h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <a href="#" className="link2">
                <div
                  style={{
                    border: "1px solid #00338d",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>Financial Strength and reporting</div>
                    <div>
                      <ArrowForwardIos />
                    </div>
                  </div>
                </div>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <a href="#" className="link2">
                <div
                  style={{
                    border: "1px solid #00338d",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>Financial Strength and reporting</div>
                    <div>
                      <ArrowForwardIos />
                    </div>
                  </div>
                </div>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <a href="#" className="link2">
                <div
                  style={{
                    border: "1px solid #00338d",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>Financial Strength and reporting</div>
                    <div>
                      <ArrowForwardIos />
                    </div>
                  </div>
                </div>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <a href="#" className="link2">
                <div
                  style={{
                    border: "1px solid #00338d",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>Financial Strength and reporting</div>
                    <div>
                      <ArrowForwardIos />
                    </div>
                  </div>
                </div>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <a href="#" className="link2">
                <div
                  style={{
                    border: "1px solid #00338d",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>Financial Strength and reporting</div>
                    <div>
                      <ArrowForwardIos />
                    </div>
                  </div>
                </div>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <a href="#" className="link2">
                <div
                  style={{
                    border: "1px solid #00338d",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>Financial Strength and reporting</div>
                    <div>
                      <ArrowForwardIos />
                    </div>
                  </div>
                </div>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <a href="#" className="link2">
                <div
                  style={{
                    border: "1px solid #00338d",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>Financial Strength and reporting</div>
                    <div>
                      <ArrowForwardIos />
                    </div>
                  </div>
                </div>
              </a>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default BusinessProtection;
