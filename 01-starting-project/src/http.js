import axios from "axios";

const $apiClient = axios.create({
  baseURL: "http://localhost:3000",
  // withCredentials: true,
});

export const fetchAvailablePlaces = () =>
  $apiClient.get("/places").then(({ data }) => data.places);

export const fetchUserPlaces = () =>
  $apiClient.get("/user-places").then(({ data }) => data.places);

export const updateUserPlaces = (places) =>
  $apiClient
    .put(
      "/user-places",
      { places },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(({ data }) => {
      return data.message;
    });
    
