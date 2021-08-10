import axios from 'axios';

const api = axios.create({
    baseURL: ' http://training.pixbit.in',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
    },
});

api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// let token = document.head.querySelector('meta[name="csrf-token"]') as HTMLMetaElement;

// if (token) {
//     api.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

export default api;