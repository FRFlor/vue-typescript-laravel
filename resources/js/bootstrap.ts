import 'bootstrap';
import Axios, {AxiosStatic} from 'axios';

declare global {
    // Extending the DOM Window Interface
    interface Window {
        axios: AxiosStatic;
    }

    // Extending querySelector Element
    interface Element {
        content: string;
    }
}

declare var window: Window;
window.axios = Axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const token: Element | null = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}
