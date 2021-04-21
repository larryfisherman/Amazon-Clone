import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-cec91.cloudfunctions.net/api",
  // "http://localhost:5001/clone-cec91/us-central1/api",
});

export default instance;
