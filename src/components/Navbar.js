import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, mb: 10 }}>
        <AppBar sx={{ backgroundColor: "#f2f1f6" }}>
          <Container>
            <Toolbar>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1 }}
                style={{ justifyContent: "center", display: "flex" }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <HomeIcon />
                </Link>
              </Typography>
              <IconButton component="a" href={"https://github.com/lauzzeta"}>
                <GitHubIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
}
