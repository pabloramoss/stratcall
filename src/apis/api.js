import axios from 'axios';
const KEY = 'AIzaSyBXZtNWAIPt_UFPzWBjbmkoacjsN9sR4QM'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        channelId: "UCjg1YvYLP3KbPPdEZ57GJuA",
        maxResults: 3,
        key: KEY
    }
})

export default {
  return axios.get("https://www.googleapis.com/youtube/v3/").then((response)=> {
    console.log(response.data)
  })
}