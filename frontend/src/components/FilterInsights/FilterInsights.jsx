import React from "react";
import FilterButton from "../FilterButton/FilterButton";
import { Container, Grid } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

const FilterInsights = () => {
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h1>FilterInsights</h1>
        <p>Filter Success Passion insights using the options below</p>
      </div>
      <FilterButton />
      <div>
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "red",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                  }}
                >
                  <BookmarkAddIcon />
                </div>
              </div>
              <div>
                <h2>Motor Finance</h2>
                <p>12 January 2024</p>
                <p>
                  FCA ramps up activity on legacy discretionary comission
                  arrangements (DCA)
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "red",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                  }}
                >
                  <BookmarkAddIcon />
                </div>
              </div>
              <div>
                <h2>Motor Finance</h2>
                <p>12 January 2024</p>
                <p>
                  FCA ramps up activity on legacy discretionary comission
                  arrangements (DCA)
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "red",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                  }}
                >
                  <BookmarkAddIcon />
                </div>
              </div>
              <div>
                <h2>Motor Finance</h2>
                <p>12 January 2024</p>
                <p>
                  FCA ramps up activity on legacy discretionary comission
                  arrangements (DCA)
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "red",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                  }}
                >
                  <BookmarkAddIcon />
                </div>
              </div>
              <div>
                <h2>Motor Finance</h2>
                <p>12 January 2024</p>
                <p>
                  FCA ramps up activity on legacy discretionary comission
                  arrangements (DCA)
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default FilterInsights;
