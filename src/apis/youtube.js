import axios from "axios";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3", //dont add slash after v3 in baseURL
});
