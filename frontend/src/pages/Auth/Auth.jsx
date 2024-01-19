import React, { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  Grid,
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Login from "../../components/Auth/Login";
import Signup from "../../components/Auth/Signup";

const Auth = ({ handleLogin, handleSignup }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleFNameChange = (event) => {
    setFName(event.target.value);
  };

  const handleLNameChange = (event) => {
    setLName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCPasswordChange = (event) => {
    setCPassword(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <div>
      <div>
        <h1>Register</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          debitis, quibusdam alias, obcaecati fugit soluta iure, rerum dolorum
          exercitationem molestias mollitia adipisci deserunt numquam excepturi.
          Voluptatibus molestiae voluptas quia perferendis?
        </p>
      </div>
      <div>
        <div>
          <h1>Create an account</h1>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fName"
            label="First Name"
            name="fName"
            autoComplete="fName"
            autoFocus
            sx={{ marginBottom: 2 }}
            value={fName}
            onChange={handleFNameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lName"
            label="Last Name"
            name="lName"
            autoComplete="lName"
            sx={{ marginBottom: 2 }}
            value={lName}
            onChange={handleLNameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            sx={{ marginBottom: 2 }}
            value={email}
            onChange={handleEmailChange}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password" required>
              Password
            </InputLabel>
            <OutlinedInput
              onChange={handlePasswordChange}
              value={password}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            name="cPassword"
            label="Confirm Password"
            type="password"
            id="cPassword"
            autoComplete="cPassword"
            sx={{ marginBottom: 4 }}
            value={cPassword}
            onChange={handlePasswordChange}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-autowidth-label">
              Select Country / Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={country}
              onChange={handleCountryChange}
              // autoWidth
              label="Country"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="normal"
            fullWidth
            id="company"
            label="Company (Optional)"
            name="company"
            autoComplete="company"
            sx={{ marginBottom: 4 }}
            value={company}
            onChange={handleCompanyChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginBottom: 2 }}
          >
            Continue
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginBottom: 2 }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
    //  <Grid container component="main" sx={{ height: "100vh" }}>
    //     <Grid
    //       item
    //       xs={false}
    //       sm={4}
    //       md={7}
    //       sx={{
    //         backgroundImage: "url(https://source.unsplash.com/random)",
    //         backgroundRepeat: "no-repeat",
    //         backgroundColor: (t) =>
    //           t.palette.mode === "light"
    //             ? t.palette.grey[50]
    //             : t.palette.grey[900],
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //       }}
    //     />
    //     <Grid
    //       item
    //       xs={12}
    //       sm={8}
    //       md={5}
    //       component={Paper}
    //       elevation={6}
    //       square
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         backgroundColor: "#ddd0c8",
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           my: 8,
    //           mx: 4,
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Typography component="h1" variant="h3" sx={{ marginBottom: 4 }}>
    //           Title
    //         </Typography>
    //         {showLogin ? (
    //           <Login handleLogin={handleLogin} />
    //         ) : (
    //           <Signup handleSignup={handleSignup} />
    //         )}
    //         <Button onClick={toggleForm} color="primary" sx={{ marginTop: 2 }}>
    //           {showLogin ? "Switch to Sign Up" : "Switch to Login"}
    //         </Button>
    //       </Box>
    //     </Grid>
    //   </Grid>
  );
};

export default Auth;
