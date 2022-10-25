import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

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
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
}
