
export default function ({ app, req, redirect, route }) {
    const axios = app.$axios;

    // Supporting V2 api version
    axios.interceptors.request.use(function (request) {
       console.log("Log this before any request");
       return request;
    }, function (error) {
        return Promise.reject(error);
    });

    // temporarily intercept 401 errors, clear cookies and authorization and redirect users to home page
    axios.interceptors.response.use(function (response) {
        console.log("no error, happy");
        return response;
    }, function (error) {
        console.log("Log if there is an error ", error);
    });
}