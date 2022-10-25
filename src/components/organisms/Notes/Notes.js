import { Box, Container, Grid, Typography, Zoom } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomPaper } from "../../../styles";

export default function Notes({ notes }) {
  const navigate = useNavigate();
  return (
    <Container sx={{ mb: 2 }}>
      <Grid container spacing={2}>
        {notes.length > 0 ? (
          notes.map((note, i) => (
            <Zoom in {...(true ? { timeout: 500 } : {})} key={i}>
              <Grid item xs={6} sm={6} md={3} xl={3}>
                <CustomPaper
                  onClick={() => navigate(`/notes/${note.id}`)}
                  sx={{
                    padding: ".5rem",
                    cursor: "pointer",
                    height: 150,
                    color: "black",
                    backgroundColor: "#f8d053",
                  }}
                >
                  <Container
                    sx={{ display: "flex", gap: "1rem" }}
                    style={{ padding: "0" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        padding: ".25rem 1rem",
                        maxWidth: "100%",
                        overflow: "hidden",
                        gap: ".25rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          mr: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: ".5rem",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            color="primary.dark"
                            sx={{
                              fontSize: { xs: 13, sm: 15, lg: 16 },
                              fontWeight: "700",
                            }}
                          >
                            {note.title}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", mr: 1, maxHeight: "6rem" }}>
                        <Typography
                          color="primary.dark"
                          sx={{
                            fontSize: { xs: 12, sm: 14, lg: 15 },
                            fontWeight: "400",
                            overflow: "hidden",
                            lineHeight: "1.25",
                            textOverflow: "ellipsis",
                            wordBreak: "break-all",
                          }}
                        >
                          {note.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Container>
                </CustomPaper>
              </Grid>
            </Zoom>
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              mt: 5,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Typography
              color="primary.dark"
              sx={{
                fontSize: { xs: 13, sm: 15, lg: 16 },
                fontWeight: "700",
              }}
            >
              You don't have notes yet :(
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
}
