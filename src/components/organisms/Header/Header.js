import { Box, Container, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate } from "react-router-dom";

const actions = [
  {
    icon: <NoteAddIcon />,
    name: "New Note",
    link: "/notes/new",
  },
  {
    icon: <CreateNewFolderIcon />,
    name: "New Folder",
    link: "/folder/new",
  },
];

export default function Header({ name }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Typography
          color="primary.dark"
          sx={{
            fontSize: { xs: 40, sm: 40, lg: 50 },
            fontWeight: "500",
          }}
        >
          {name}'s notes
        </Typography>
        <Box
          sx={{
            display: "flex",
            alginItems: "center",
            justifyContent: "center",
          }}
        >
          {actions.map((el, i) => (
            <Tooltip title={el.name} disableInteractive key={i}>
              <IconButton
                onClick={() => {
                  navigate(el.link);
                }}
                sx={{ color: "primary.main" }}
              >
                {el.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
