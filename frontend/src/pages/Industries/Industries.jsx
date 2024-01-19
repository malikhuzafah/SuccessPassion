import React from "react";
import { Container, Grid } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IndustriesComponent from "../../components/Home/IndustriesComponent";

const Industries = () => {
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
          <h1>Industries</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            veritatis incidunt repellat quia corporis culpa quaerat sapiente eos
            aut doloribus, nihil, temporibus quas cumque est fuga veniam quos.
            In, laboriosam.
          </p>
        </div>
      </div>
      {/* <Container>
        <Grid
          container
          style={{
            backgroundColor: "#eeef56",
            transform: "translateY(-100px)",
          }}
        >
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
                  backgroundColor: "#323232",
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
                  backgroundColor: "#323232",
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
                  backgroundColor: "#323232",
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
                  backgroundColor: "#323232",
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
                  backgroundColor: "#323232",
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
                  backgroundColor: "#323232",
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
          <button
            style={{
              padding: "10px 20px",
              fontSize: "20px",
              fontWeight: "bold",
              backgroundColor: "#323232",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            All Industries
          </button>
        </div>
      </Container> */}
      <IndustriesComponent home={false} />

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

      <Container>
        <div
          style={{
            padding: "20px",
          }}
        >
          <div
            style={{
              padding: "50px 5px",
              backgroundColor: "#1e49e2",
              color: "#ffffff",
            }}
          >
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="link">
              Read More <ArrowForwardIosIcon />
            </a>
          </div>
        </div>
      </Container>

      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#DDD0C8",
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
            <a href="#" className="btn2">
              Visit global site
            </a>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#DDD0C8",
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
            <a href="#" className="btn2">
              Visit global site
            </a>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#DDD0C8",
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
            <a href="#" className="btn2">
              Visit global site
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Industries;
