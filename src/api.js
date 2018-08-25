import axios from "axios";

export default {
  subjects: {
    getAll: url => axios.get(url).then(res => res.data.results)
  },
  comments: {
    getAll: url => axios.get(url).then(res => res.data),
    create: data =>
      axios
        .post("http://127.0.0.1:8000/api/frontboard/comments/create/", data)
        .then(res => res.data)
  },
  user: {
    login: credentials =>
      axios
        .post("http://127.0.0.1:8000/api/users/login/", credentials)
        .then(res => res.data),
    signup: data =>
      axios
        .post("http://127.0.0.1:8000/api/users/signup/", data)
        .then(res => res.data)
  }
};
