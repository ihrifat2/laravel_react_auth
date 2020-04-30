import axios from 'axios';

const baseurl = "http://localhost:8000"

export const register = newUser => {
    return axios.post(baseurl + '/api/register', newUser, {
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        if (res.status === 200) {
            console.log(res)
        }
    }).catch(err => {
        return err
    })
};

export const login = user => {
    return axios.post(baseurl + '/api/login', {
        email: user.email,
        password: user.password
    }, {
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        const token = res.data.token
        localStorage.setItem('access_token', token)
        return token
    }).catch(err => {
        // return err
        console.log(err)
    })
};

export const getProfile = newUser => {
    return axios.post(baseurl + '/api/profile', {
        headers: { Authorization: `Bearer ${localStorage.access_token}` }
    }).then(res => {
        console.log(res)
        return res.data
    }).catch(err => {
        // return err
        console.log(err)
    })
};