import React from "react";
import { Divider, Grid, Typography, Link, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomSeparator from "../../components/CustomSeperator/CustomSeperator";

const Retail = () => {
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
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/industries"
      onClick={() => {
        navigate("/industries");
      }}
    >
      Industries
    </Link>,
    <Typography key="3" color="text.primary">
      Retail
    </Typography>,
  ];

  return (
    <div>
      <div>
        <Container>
          <h1>Retail</h1>
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <div>
              <h2>Email</h2>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <p>
                Through helping other organizations mitigate risks and grasp
                opportunities, we can drive positive, sustainable change for
                clients, our people and society at large. KPMG firms operate in
                143 countries and territories, and in FY23, collectively
                employed more than 270,000 partners and people, serving the
                needs of business, governments, public-sector agencies,
                not-for-profits and through KPMG firms' audit and assurance
                practices, the capital markets. KPMG is committed to quality and
                service excellence in all that we do, bringing our best to
                clients and earning the public's trust through our actions and
                behaviors both professionally and personally. We lead with a
                commitment to quality and integrity across the KPMG global
                organization, bringing a passion for client success and a
                purpose to serve and improve the communities in which KPMG firms
                operate. In a world where rapid change and unprecedented
                disruption are the new normal, we inspire confidence and empower
                change in all we do.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <h2>Connect with us</h2>
              <a href="#">Find Office Locations</a>
              <Divider />
              <a href="#">Email Us</a>
              <Divider />
              <a href="#">Social Media @ Success Passion</a>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2}></Grid>
      </Container>
    </div>
  );
};

export default Retail;
