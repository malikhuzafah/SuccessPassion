import React from "react";
import { Container, Grid, Typography, Divider } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import CustomSeparator from "../../components/CustomSeperator/CustomSeperator";
import { ArrowForwardIos } from "@mui/icons-material";
import Footer from "../../components/Footer/Footer";
import TopBanner from "../../components/TopBanner/TopBanner";
import AtricleTag from "../../components/Articles/ArticleTag";
import ContactCard from "../../components/Contact/ContactCard";

const BusinessProtection = () => {
  const navigate = useNavigate();

  const articles = [
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
    {
      title: "Insights on current trends in remote working",
      desc: "Work from anywhere",
      link: "/insights",
      img: "https://picsum.photos/500/400",
    },
  ];

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
      <TopBanner
        title={"Business Protection"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis suscipit molestiae cum cupiditate. Voluptates dolorum, sequi quae, architecto accusantium nihil blanditiis id voluptas soluta culpa cupiditate possimus voluptatum atque?"
        }
      />
      <Container
        style={{
          paddingTop: "20px",
        }}
      >
        <CustomSeparator breadcrumbs={breadcrumbs} />
        <div
          style={{
            padding: "40px 0",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            exercitationem. Est odit, delectus explicabo quo velit, corporis
            facilis repellendus molestias voluptatibus saepe vitae. Expedita vel
            consectetur magni, optio eius adipisci.
          </p>
        </div>
        <Grid container spacing={2}>
          {articles.map((article, index) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <AtricleTag
                  title={article.title}
                  desc={article.desc}
                  img={article.img}
                  link={article.link}
                />
              </Grid>
            );
          })}
        </Grid>

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
              <ContactCard
                name={"Ian Hancook"}
                designation={"Global head of consulting"}
                company={"Success Passion International"}
                profile={"/insights"}
                email={"/insights"}
                phone={"/insights"}
                img={"/assets/slide-1.jpg"}
              />
            </Grid>
            <Grid item sm={12} md={3}>
              <ContactCard
                name={"Ian Hancook"}
                designation={"Global head of consulting"}
                company={"Success Passion International"}
                profile={"/insights"}
                email={"/insights"}
                phone={"/insights"}
                img={"/assets/slide-1.jpg"}
              />
            </Grid>
            <Grid item sm={12} md={3}>
              <div>
                <h2>Connect with us</h2>
                <p>Find office Locations</p>
                <Divider
                  style={{
                    background: "transparent",
                    height: "2px",
                    margin: "20px 0",
                    border: "none",
                    borderTop: "3px dotted #999",
                  }}
                />
                <p>Find office Locations</p>
                <Divider
                  style={{
                    background: "transparent",
                    height: "2px",
                    margin: "20px 0",
                    border: "none",
                    borderTop: "3px dotted #999",
                  }}
                />
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
