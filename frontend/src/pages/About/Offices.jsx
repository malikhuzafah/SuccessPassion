import React from "react";
import { TextField, InputAdornment, Divider, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BasicTabs from "../../components/BasicTabs/BasicTabs";

const Offices = () => {
  return (
    <div>
      <div>
        <Container>
          <h1>Office Locations</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            repellendus voluptate libero quibusdam? Dolorem iusto recusandae
          </p>
        </Container>
      </div>
      <div>
        <Container>
          <TextField
            id="input-with-icon-textfield"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                  <Divider orientation="vertical" flexItem />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </div>
      <Container>
        <BasicTabs />
      </Container>
    </div>
  );
};

export default Offices;
