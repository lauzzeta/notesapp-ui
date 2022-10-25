import {
  Box,
  CardContent,
  CircularProgress,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { ColorButtonNH, CustomPaperNH, CustomTextField } from "../../styles";
import { createFolder, getFolder, updateFolder } from "../../api";

export default function FolderForm() {
  const [folder, setFolder] = useState({
    name: "",
  });

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editing) {
      await updateFolder(params.id, folder);
    } else {
      await createFolder({ name: folder.name });
    }

    setLoading(false);
    navigate("/");
  };

  const handleChange = (e) =>
    setFolder({ ...folder.name, [e.target.name]: e.target.value });

  const loadFolder = async (id) => {
    const res = await getFolder();
    setFolder({ name: res.name });
    setEditing(true);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      if (params.id) {
        loadFolder(params.id);
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
                {editing ? "Edit Folder" : "Create Folder"}
              </Typography>
            </Box>

            <CardContent>
              <form onSubmit={handleSubmit}>
                <CustomTextField
                  fullWidth
                  variant="filled"
                  placeholder="Name..."
                  sx={{ display: "block", margin: ".5rem 0" }}
                  name="name"
                  value={folder.name}
                  onChange={handleChange}
                  inputProps={{ maxLength: 11 }}
                />
                <ColorButtonNH
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{ mt: 2 }}
                  disabled={!folder.name}
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
        </Grid>
      </Slide>
    </Grid>
  );
}
