const API_URL = "https://notesapp-api-production.up.railway.app";

export const post = async (route = "", body = {}) => {
  try {
    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("x-access-token", localStorage.getItem("access_token"));
    const raw = JSON.stringify(body);
    const requestOptions = {
      method: "POST",
      headers,
      body: raw,
    };
    const res = await fetch(`${API_URL}${route}`, requestOptions);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const put = async (route = "", body = {}) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-access-token", localStorage.getItem("access_token"));

    const raw = JSON.stringify(body);
    const requestOptions = {
      method: "PUT",
      headers,
      body: raw,
    };
    const res = await fetch(`${API_URL}${route}`, requestOptions);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const get = async (route = "") => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-access-token", localStorage.getItem("access_token"));

    const requestOptions = {
      method: "GET",
      headers,
    };

    const res = await fetch(`${API_URL}${route}`, requestOptions);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const del = async (route = "") => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-access-token", localStorage.getItem("access_token"));

    const requestOptions = {
      method: "DELETE",
      headers,
    };

    const res = await fetch(`${API_URL}${route}`, requestOptions);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
