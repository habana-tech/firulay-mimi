// Change to bootstrap.min in production
import '../css/app.scss';
//import '@fortawesome/fontawesome-free/css/all.min.css';

import Vue from 'vue';


new Vue({
    el: '#app',
    methods: {
        openNavMenu: function (e) {
            const button = e.target.parentElement;
            const menu = document.getElementById(button.dataset.target);
            menu.classList.toggle('show');
        }
    }
});