import * as axios from "axios";

const instanseAxios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "b6cf161d-46fc-49b3-9661-bfc785dfaab3"
  }})

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instanseAxios.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },

  followAPI: (userId) => {
    return instanseAxios.post(`follow/${userId}`).then(response => response.data);
  },

  unFollowAPI: (userId) => {
    return instanseAxios.delete(`follow/${userId}`).then(response => response.data);
  }
}

export const profileAPI = {
  getProfile: (userId) => {
    return instanseAxios.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus: (userId) => {
    return instanseAxios.get(`profile/status/${userId}`).then(response => response.data);
  },
  updateStatus(status) {
    return instanseAxios.put(`profile/status`, {status: status}).then(response => response.data);
  }
}

export const authAPI = {
  me() {
    return instanseAxios.get(`auth/me`);
  }
}