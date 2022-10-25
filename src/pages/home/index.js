import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFolders, getNotes } from "../../api";
import { Notes, Header, Folders } from "../../components/organisms";

export default function Home() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [folders, setFolders] = useState([]);
  const [name, setName] = useState();

  const loadFolderNotes = async () => {
    const resNote = await getNotes();
    setNotes(resNote);
    const resFold = await getFolders();
    setFolders(resFold);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      loadFolderNotes();
      setName(localStorage.getItem("name"));
    } else {
      navigate("/sign-in");
    }
  }, [navigate]);
  return (
    <>
      <Header name={name} />
      <Folders folders={folders} />
      <Notes notes={notes} />
    </>
  );
}
