import React from "react";
import { Container, Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import TopBanner from "../../components/TopBanner/TopBanner";
import Article from "../../components/Articles/Article";
import SignUpCard from "../../components/Contact/SignupCard";
import Connect from "../../components/Contact/Connect";
import ContactCard from "../../components/Contact/ContactCard";
import BottomNav from "../../components/BottomNav/BottomNav";
import ArticleFull from "../../components/Articles/ArticleFull";

const RegulatoryChanges = () => {
  return (
    <div>
      <TopBanner
        title={"Regulatory Changes"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis suscipit molestiae cum cupiditate. Voluptates dolorum, sequi quae,"
        }
      />
      <Container>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            exercitationem. Est odit, delectus explicabo quo velit, corporis
            facilis repellendus molestias voluptatibus saepe vitae. Expedita vel
            consectetur magni, optio eius adipisci.
          </p>
        </div>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <Article
              title={"Human-centric AI and the workplace: Live event"}
              desc={
                "Join us at 1:00pm CET to hear Brad Smith, President of Microsoft on AI on actions that business can take."
              }
              img={"/assets/slide-1.jpg"}
              link={"/"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <Article
              title={"Human-centric AI and the workplace: Live event"}
              desc={
                "Join us at 1:00pm CET to hear Brad Smith, President of Microsoft on AI on actions that business can take."
              }
              img={"/assets/slide-1.jpg"}
              link={"/"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <Article
              title={"Human-centric AI and the workplace: Live event"}
              desc={
                "Join us at 1:00pm CET to hear Brad Smith, President of Microsoft on AI on actions that business can take."
              }
              img={"/assets/slide-1.jpg"}
              link={"/"}
            />
          </Grid>
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
              <Connect />
            </Grid>
            <Grid item sm={12} md={3}>
              <SignUpCard />
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
          <ArticleFull
            title={"Client Stories"}
            desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
            img={"/assets/slide-2.jpg"}
            link={"/insights"}
          />
        </div>

        <div>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            A guide to the business implications of COVID-19
          </h1>
          <BottomNav />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default RegulatoryChanges;
