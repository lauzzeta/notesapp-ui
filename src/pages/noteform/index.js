import {
  Box,
  CardContent,
  CircularProgress,
  Grid,
  IconButton,
  Slide,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import {
  ColorButtonNH,
  CustomPaper,
  CustomPaperNH,
  CustomTextField,
} from "../../styles";
import CloseIcon from "@mui/icons-material/Close";
import { createNote, getFolders, getNote, updateNote } from "../../api";

export default function NoteForm() {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selected, setSelected] = useState(null);
  const [folderName, setFolderName] = useState();
  const navigate = useNavigate();
  const params = useParams();

  const [folders, setFolders] = useState([]);

  const loadFolders = async () => {
    const resFold = await getFolders();
    setFolders(resFold);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editing) {
      await updateNote(params.id, { note, selected });
    } else {
      await createNote({ note, selected });
    }

    setLoading(false);
    navigate("/");
  };
  const handleChange = (e) =>
    setNote({ ...note, [e.target.name]: e.target.value });

  const loadNote = async (id) => {
    const res = await getNote(id);
    setNote({ title: res.title, description: res.description });
    setEditing(true);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      if (params.id) {
        loadNote(params.id);
        loadFolders();
      }
      loadFolders();
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
            sx={{ mt: 5 }}
            style={{ backgroundColor: "#cfcfcf", padding: "1rem" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{
                  fontSize: { xs: 13, sm: 15, lg: 16 },
                  fontWeight: "600",
                  ml: 1,
                }}
              >
                {editing ? "Edit Note" : "Create Note"}
              </Typography>
            </Box>

            <CardContent>
              <form onSubmit={handleSubmit}>
                <CustomTextField
                  fullWidth
                  variant="filled"
                  placeholder="Title..."
                  sx={{ display: "block", margin: ".5rem 0" }}
                  name="title"
                  value={note.title}
                  onChange={handleChange}
                  inputProps={{ maxLength: 12 }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  placeholder="New note..."
                  multiline
                  rows={4}
                  sx={{ display: "block", margin: ".5rem 0" }}
                  name="description"
                  value={note.description}
                  onChange={handleChange}
                />
                <ColorButtonNH
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{ mt: 2 }}
                  disabled={!note.title || !note.description}
                >
                  {loading ? (
                    <CircularProgress
                      color="inherit"
                      size={24}
                    ></CircularProgress>
                  ) : (
                    <CheckIcon />
                  )}
                </ColorButtonNH>
              </form>
            </CardContent>
          </CustomPaperNH>
          {folders.length > 0 && (
            <Box
              sx={{
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 13, sm: 15, lg: 16 },
                  fontWeight: "600",
                  ml: 1,
                }}
              >
                Add to folder {folderName}
              </Typography>
              <Tooltip title="Delete from Folder" disableInteractive>
                <IconButton
                  onClick={() => {
                    setSelected(null);
                    setFolderName();
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          <Grid container spacing={2}>
            {folders.length > 0 &&
              folders.map((el, i) => (
                <Grid item xs={6} sm={6} md={4} xl={4} key={i}>
                  <CustomPaper
                    onClick={() => {
                      setSelected(el.id);
                      setFolderName(el.name);
                    }}
                    sx={{
                      backgroundColor: "primary.main",
                      display: "flex",
                      cursor: "pointer",
                      p: 1,
                    }}
                  >
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
              ))}
          </Grid>
        </Grid>
      </Slide>
    </Grid>
  );
}
