import { Divider, Grid } from "@mui/material";
import React from "react";
import CustomSeparator from "../../components/CustomSeperator/CustomSeperator";

const WhoWeAre = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={4}>
          <div>
            <h2>Who We Are</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero
              dolorem illo asperiores consectetur itaque. Cum porro sit
              obcaecati, similique vitae magnam provident aut inventore dolores
              totam. Distinctio, debitis aperiam.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div></div>
        </Grid>
      </Grid>

      <CustomSeparator />
      <Grid container>
        <Grid item xs={12} md={3}>
          <div>
            <h2>About</h2>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <p>
              Through helping other organizations mitigate risks and grasp
              opportunities, we can drive positive, sustainable change for
              clients, our people and society at large. KPMG firms operate in
              143 countries and territories, and in FY23, collectively employed
              more than 270,000 partners and people, serving the needs of
              business, governments, public-sector agencies, not-for-profits and
              through KPMG firms' audit and assurance practices, the capital
              markets. KPMG is committed to quality and service excellence in
              all that we do, bringing our best to clients and earning the
              public's trust through our actions and behaviors both
              professionally and personally. We lead with a commitment to
              quality and integrity across the KPMG global organization,
              bringing a passion for client success and a purpose to serve and
              improve the communities in which KPMG firms operate. In a world
              where rapid change and unprecedented disruption are the new
              normal, we inspire confidence and empower change in all we do.
            </p>
            <div
              style={{
                height: "200px",
                backgroundColor: "#000000",
                width: "100%",
              }}
            ></div>
            <a href="#">Alliances</a>
            <p>
              Working together to address your toughest business challenges.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div>
            <a href="">Share</a>
            <a href="#">Print Friendly Version</a>
            <div
              style={{
                border: "1px solid #000000",
                padding: "20px",
              }}
            >
              <h2>Connect with us</h2>
              <a href="#">Find Office Locations</a>
              <Divider />
              <a href="#">Email Us</a>
              <Divider />
              <a href="#">Social Media @ Success Passion</a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhoWeAre;
