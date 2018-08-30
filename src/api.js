import axios from "axios";

export default {
  subjects: {
    getAll: url => axios.get(url).then(res => res.data.results),
    starSubject: slug =>
      axios
        .get(`/api/frontboard/actions/star/?subject_slug=${slug}`)
        .then(res => res.data)
  },
  comments: {
    getAll: slug =>
      axios
        .get(`/api/frontboard/comments/?subject_slug=${slug}`)
        .then(res => res.data),
    create: data =>
      axios.post("/api/frontboard/comments/", data).then(res => res.data)
  },
  user: {
    login: credentials =>
      axios.post("/api/users/login/", credentials).then(res => res.data),
    signup: data =>
      axios.post("/api/users/signup/", data).then(res => res.data),
    refreshToken: token =>
      axios.post("/api/auth/token/refresh/", token).then(res => res.data)
  }
};
