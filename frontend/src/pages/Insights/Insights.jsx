import React from "react";
import { Container, Grid } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ZeroWidthStack from "../../components/ZeroWidthStack/ZeroWidthStack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FilterInsights from "../../components/FilterInsights/FilterInsights";
import Footer from "../../components/Footer/Footer";

const Insights = () => {
  return (
    <div>
      <div
        style={{
          height: "60vh",
          display: "flex",
          padding: "50px",
          alignItems: "center",
          backgroundColor: "#323232",
        }}
      >
        <div style={{ width: "60%", transform: "translateY(-50px)" }}>
          <h1>Insights</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            veritatis incidunt repellat quia corporis culpa quaerat sapiente eos
            aut doloribus, nihil, temporibus quas cumque est fuga veniam quos.
            In, laboriosam.
          </p>
        </div>
      </div>
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
                backgroundColor: "#323232",
                height: "400px",
                display: "flex",
                alignItems: "end",
                padding: "20px",
                position: "relative",
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
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  doloribus debitis perferendis aspernatur deserunt dolor
                </h3>
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
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <div style={{ height: "500px", overflow: "scroll" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <h2>Our impact plan</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              doloribus debitis perferendis aspernatur deserunt dolor
            </p>
          </div>
        </div>
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
            <h3>Trending Topics</h3>
            <div style={{ height: "500px", overflow: "scroll" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
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
            <h3>Most Viewed Articles</h3>
            <div style={{ height: "500px", overflow: "scroll" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img
                    src="https://picsum.photos/500/400"
                    alt=""
                    height={"100"}
                    width={"100"}
                  />
                </div>
                <div>
                  <h3>Insights on current trends in remote working</h3>
                  <p>Work from anywhere</p>
                </div>
                <div>
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <FilterInsights />
      <Footer />
    </div>
  );
};

export default Insights;
