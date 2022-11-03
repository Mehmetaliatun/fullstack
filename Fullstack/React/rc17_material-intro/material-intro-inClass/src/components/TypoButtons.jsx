import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          mt={4}
          color="primary"
        >
          MUI Typography
        </Typography>
        <Typography
          variant="body2"
          align="justify"
          mt={4}
          sx={{ background: "lightgreen", color: "#eee", fontSize: "1.4rem" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          vitae repellendus aspernatur dicta ex suscipit commodi autem et natus
          magni, quasi excepturi quibusdam, fugit rerum.
        </Typography>
        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          fugit eveniet, deleniti est ex cumque repellendus sint natus neque.
          Non, esse dignissimos reprehenderit a incidunt placeat molestiae earum
          autem illo.
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "2rem",
            // alignItems: "center",
            width: "50%",
            margin: "0 auto",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
