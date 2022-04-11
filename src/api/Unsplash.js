import axios from "axios";

export default axios.create({
   baseURL: "https://api.unsplash.com",
   headers: {
      Authorization: "Client-ID JeI5NXdUeYnureWn5si-oPAHP9p7y1N0Tb7XSgbCnrQ"
   }
});