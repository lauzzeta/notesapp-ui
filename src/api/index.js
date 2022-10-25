import { post, put, get, del } from "./api-utils";

export const signUp = async (body) => post("/signUp", body);

export const signIn = async (body) => post("/signIn", body);

export const getNotes = async () => get("/notes");

export const createNote = async (body) => post("/notes", body);

export const createFolder = async (body) => post("/folder", body);

export const getNote = async (id) => get(`/notes/${id}`);

export const getFolders = async () => get("/folders");

export const getFolder = async (id) => get(`/folder/${id}`);

export const updateFolder = async (id, body) => put(`/folder/${id}`, body);

export const updateNote = async (id, body) => put(`/notes/${id}`, body);

export const deleteNote = async (id) => del(`/notes/${id}`);

export const deleteFolder = async (id) => del(`/folder/${id}`);

export const host = "https://notesapp-lz.herokuapp.com";
