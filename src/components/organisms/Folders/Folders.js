import { Container, Grid, Icon, Slide, Typography } from "@mui/material";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import { CustomPaper } from "../../../styles";
import { useNavigate } from "react-router-dom";

export default function Folders({ folders }) {
  const navigate = useNavigate();
  return (
    <Container sx={{ mb: 2 }}>
      <Grid container spacing={2}>
        {folders?.map((el, i) => (
          <Slide
            in
            direction="left"
            {...(true ? { timeout: i + 500 } : {})}
            key={i}
          >
            <Grid item xs={6} sm={4} md={3} xl={2}>
              <CustomPaper
                onClick={() => {
                  navigate(`/folder/${el.id}`);
                }}
                sx={{
                  backgroundColor: "primary.main",
                  display: "flex",
                  cursor: "pointer",
                  p: 1,
                }}
              >
                <Icon>
                  <FolderIcon />
                </Icon>
                <Typography
                  color="primary.dark"
                  sx={{
                    fontSize: { xs: 13, sm: 15, lg: 16 },
                    fontWeight: "500",
                    ml: 1,
                  }}
                >
                  {el.name}
                </Typography>
              </CustomPaper>
            </Grid>
          </Slide>
        ))}
      </Grid>
    </Container>
  );
}
