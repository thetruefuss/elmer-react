import axios from "axios";

export default {
  subjects: {
    getAll: url => axios.get(url).then(res => res.data.results)
  }
};
