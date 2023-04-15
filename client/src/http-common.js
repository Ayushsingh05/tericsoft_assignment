import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-type": "application/json",
  }
});

// commnad line is json-server --watch db.json --port 4000