import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4c301c14293a43a79d047d5c16da644a'
  }
})