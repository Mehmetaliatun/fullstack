// import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import { TextField } from "@mui/material";

const TextFieldComp = () => {
  return (
    <div>
      <Container>
        <Typography variant="h4" color="error" align="center" mt={4}>
          TEXT FIELD
        </Typography>
        <Box>
          <TextField />
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;