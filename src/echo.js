import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'reverb',
    key: process.env.REACT_APP_REVERB_APP_KEY,
    cluster: process.env.REACT_APP_REVERB_CLUSTER,
    wsHost: process.env.REACT_APP_REVERB_HOST,
    wsPort: parseInt(process.env.REACT_APP_REVERB_PORT, 10) || 80,
    wssPort: parseInt(process.env.REACT_APP_REVERB_PORT, 10) || 443,
    forceTLS: process.env.REACT_APP_REVERB_SCHEME === 'https',
    encrypted: true,
    authEndpoint: 'https://localhost:8000/api/broadcasting/auth',
    auth: {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            'Accept': 'application/json'
        },
    },
});

export default echo;