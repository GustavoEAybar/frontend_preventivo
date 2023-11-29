import axios from 'axios';

const instance = axios.create ({
    baseURL: import.meta.env.Apex_Gym
});

export default instance;