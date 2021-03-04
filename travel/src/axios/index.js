import axios from "axios";
const instance = axios.create(config);
let config = {
  // baseURL: "http://localhost:8888",
  timeout: 3000,
  withCredentials: true,
  headers: {'Content-Type': 'application/json'}
};
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = window.localStorage.getItem("token");
    token && (config.headers.Authorization = token);
    // token||this.$message.error("你还没有登录");
    return config;
  },
  err => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  response => {
  
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
          case 401:
              // 这里写清除token的代码
              router.replace({
                  path: 'login',
                  query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
              })
      }
  }
  return Promise.reject(error.response.data) 
  }
);
export default instance;
