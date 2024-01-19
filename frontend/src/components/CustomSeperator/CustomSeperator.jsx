import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";

export default function CustomSeparator({ breadcrumbs }) {
  // const breadcrumbs = [
  //   <Link
  //     underline="hover"
  //     key="1"
  //     color="inherit"
  //     href="/"
  //     onClick={handleClick}
  //   >
  //     MUI
  //   </Link>,
  //   <Link
  //     underline="hover"
  //     key="2"
  //     color="inherit"
  //     href="/material-ui/getting-started/installation/"
  //     onClick={handleClick}
  //   >
  //     Core
  //   </Link>,
  //   <Typography key="3" color="text.primary">
  //     Breadcrumb
  //   </Typography>,
  // ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
