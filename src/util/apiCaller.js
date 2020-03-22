import axios from "axios";

export let callApi = (method, url, data) => {
  axios({
    method: `${method}`,
    url: `${url}`,
    data: `${data}`
  })
} 