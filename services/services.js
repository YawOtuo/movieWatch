import axios from "axios";

const apiUrl = 'https://api.themoviedb.org/3'
const apiKey = '0accb6bc5586b0fbb012f5f464eb38ad'
//get popular movies
export const getPopularMovies = async () => {
    const resp = await axios.get(
        `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    // console.log(resp.data.results, 'respa')
    return resp.data.results;
  }

  export const getUpcomingMovies = async () => {
    const resp = await axios.get(
        `${apiUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
    // console.log(resp.data.results, 'respa')
    return resp.data.results;
  }

  export const getPopularTv = async () => {
    const resp = await axios.get(
        `${apiUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
    // console.log(resp.data.results, 'respa')
    return resp.data.results;
  }
  
  export const getFamilyMovies = async () => {
    const resp = await axios.get(
        `${apiUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=10751`)
    // console.log(resp.data.results, 'respa')
    return resp.data.results;
  }

  export const getDocumentaries = async () => {
    const resp = await axios.get(
        `${apiUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=99`)
    // console.log(resp.data.results, 'respa')
    return resp.data.results;
  }

  export const getMovie = async (id) => {
    const resp = await axios.get(
        `${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
    // console.log(resp.data.results, 'respa')
    return resp.data;
  }

  //search for movie or tv by keyword
  export const searchMovieTv = async (query, type) => {
    const resp = await axios.get(
      `${apiUrl}/search/${type}?api_key=${apiKey}&query=${query}`)
      // console.log(resp.data.results, 'respa')
    return resp.data.results;
  }