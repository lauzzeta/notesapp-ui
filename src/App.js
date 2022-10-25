import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { theme } from "./styles";
import Home from "./pages/home";
import NoteForm from "./pages/noteform";
import Note from "./pages/note";
import FolderForm from "./pages/folderForm";
import Folder from "./pages/folder";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notes/new" element={<NoteForm />}></Route>
          <Route path="/notes/:id/edit" element={<NoteForm />}></Route>
          <Route path="/notes/:id" element={<Note />}></Route>
          <Route path="/folder/new" element={<FolderForm />}></Route>
          <Route path="/folder/:id" element={<Folder />}></Route>
          <Route path="/folder/:id/edit" element={<FolderForm />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
