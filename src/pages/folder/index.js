import { Box, Container, IconButton, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Notes } from "../../components/organisms";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteFolder, getFolder } from "../../api";

export default function Folder() {
  const navigate = useNavigate();
  const params = useParams();
  const [notes, setNotes] = useState([]);
  const [folderName, setFolderName] = useState([]);

  const loadFolderNotes = async (id) => {
    const resNote = await getFolder(id);
    setNotes(resNote.result);
    setFolderName(resNote.name);
  };

  const handleDelete = async (id) => {
    try {
      await deleteFolder(id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      if (params.id) {
        loadFolderNotes(params.id);
      }
    } else {
      navigate("/sign-in");
    }
  }, [navigate, params.id]);

  return (
    <>
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
            {folderName}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alginItems: "center",
              justifyContent: "center",
            }}
          >
            <Tooltip disableInteractive title="Edit Folder">
              <IconButton
                onClick={() => {
                  navigate(`/folder/${params.id}/edit`);
                }}
                sx={{ color: "primary.main" }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip disableInteractive title="Delete Folder">
              <IconButton
                onClick={() => handleDelete(params.id)}
                sx={{ color: "primary.main" }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
      <Notes notes={notes} />
    </>
  );
}
