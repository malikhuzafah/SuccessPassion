import React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Container, Divider, Grid, Link } from "@mui/material";

const MenuBarDetails = ({ open, setOpen, anchorRef, menuBarDetails }) => {
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      {/* <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Dashboard
      </Button> */}
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        style={{
          width: "100%",
        }}
        // disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "left bottom",
            }}
          >
            <Paper>
              {/* <ClickAwayListener onClickAway={handleClose}> */}
              <Container>
                <Grid container columnSpacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    style={{
                      paddingTop: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "100%",
                      }}
                    >
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        {menuBarDetails.links.map((page) => (
                          <>
                            <MenuItem
                              key={page}
                              onClick={() => {
                                handleClose();
                              }}
                              style={{
                                color: "#000000",
                              }}
                            >
                              <Link href={page.link}>{page.name}</Link>
                              {/* <Typography textAlign="center">
                                  {page.name}
                                </Typography> */}
                            </MenuItem>
                            <Divider />
                          </>
                        ))}
                      </MenuList>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          padding: "20px",
                        }}
                      >
                        <Link href={menuBarDetails.main.link}>
                          All {menuBarDetails.main.name}
                        </Link>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    style={{
                      paddingTop: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#323232",
                        height: "350px",
                        display: "flex",
                        alignItems: "end",
                        padding: "20px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ffffff",
                          padding: "10px",
                          width: "100%",
                          overflow: "hidden",
                          height: "170px",
                        }}
                      >
                        <h3>{menuBarDetails.articles[0].name}</h3>
                        <p>{menuBarDetails.articles[0].desc}</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    style={{
                      paddingTop: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#323232",
                        height: "350px",
                        display: "flex",
                        alignItems: "end",
                        padding: "20px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ffffff",
                          padding: "10px",
                          width: "100%",
                          overflow: "hidden",
                          height: "170px",
                        }}
                      >
                        <h3>{menuBarDetails.articles[1].name}</h3>
                        <p>{menuBarDetails.articles[1].desc}</p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Container>
              {/* <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList> */}
              {/* </ClickAwayListener> */}
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default MenuBarDetails;
