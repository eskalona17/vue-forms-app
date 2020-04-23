import Vue from 'vue';
import Router from 'vue-router';

// import App from './App';
import Home from './Views/Home'
import Login from './Views/Login'
import Register from './Views/Register'

Vue.use(Router);

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
];

const router = new Router({
    routes
})