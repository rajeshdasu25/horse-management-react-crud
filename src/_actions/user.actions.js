import { userService } from '../_services/';
import { history } from '../_helpers';
import config from '../config/config';

export const userActions = {
    login,
    logout
};

function login(username, password){
    return dispatch => {
        let apiEndpoint = config.userApiUrl;
        let payload = {
            email: username,
            password: password
        }
        userService.post(apiEndpoint, payload)
        .then((response) => { 
            let responseStatus = response.status;
            let responseData = response.data.data;
            if(responseStatus === 200) {
                if (responseData) { 
                    localStorage.setItem('user', JSON.stringify(responseData));
                    localStorage.setItem('token', responseData.access_token);
                    localStorage.setItem('auth', responseData.access_token);
                    dispatch(setUserDetails(responseData));
                    history.push('/horses');
                }
            }
        })
    };
}

function logout(){
    return dispatch => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        dispatch(logoutUser());
        history.push('/');
    }
}

export function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        auth: user.auth,
        token: user.token,
        user: user
    }
}

export function logoutUser(){
    return{
        type: "LOGOUT_SUCCESS",
        auth: false,
        token: '',
        user: {}
    }
}