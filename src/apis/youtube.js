import axios from 'axios';
const KEY = 'AIzaSyBXZtNWAIPt_UFPzWBjbmkoacjsN9sR4QM'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        channelId: "UClc-WtzXW7a9hn1tflskRoA",
        maxResults: 10,
        key: KEY
    }
})