import axios from "axios";

export default {
  subjects: {
    getAll: url => axios.get(url).then(res => res.data.results)
  },
  user: {
    login: credentials =>
      axios.post("http://127.0.0.1:8000/api/users/login/", credentials).then(res => res.data)
  }
};
