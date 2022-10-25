import {
  Box,
  CardContent,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomPaperNH } from "../../styles";
import { deleteNote, getNote } from "../../api";

export default function Note() {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();
  const params = useParams();

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const loadNote = async (id) => {
    const res = await getNote(id);
    setNote({ title: res.title, description: res.description });
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      if (params.id) {
        loadNote(params.id);
      }
    } else {
      navigate("/sign-in");
    }
  }, [navigate, params.id]);

  return (
    <Grid
      container
      derection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Slide in direction="up" {...(true ? { timeout: 300 } : {})}>
        <Grid item xs={10} sm={9} md={7} xl={5}>
          <CustomPaperNH
            sx={{ backgroundColor: "primary.main", padding: "1rem", mt: 5 }}
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
                    fontSize: { xs: 15, sm: 15, lg: 16 },
                    fontWeight: "600",
                  }}
                >
                  {note.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mr: 1,
                    gap: ".25rem",
                  }}
                >
                  <IconButton
                    variant="contained"
                    onClick={() => navigate(`/notes/${params.id}/edit`)}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".25rem",
                  }}
                >
                  <IconButton
                    variant="contained"
                    onClick={() => handleDelete(params.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", maxHeight: "6rem" }}>
                <Typography
                  color="primary.dark"
                  sx={{
                    fontSize: { xs: 15, sm: 15, lg: 15 },
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
            </CardContent>
          </CustomPaperNH>
        </Grid>
      </Slide>
    </Grid>
  );
}
