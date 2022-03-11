import { createContext, useState } from "react"
import youtube from "../apis/youtube"
import getLatestVideos from "../apis/getLatestVideos"

const VideosContext = createContext()
const initialVideos = []

const VideosProvider = ({children})=> {
  const [videos, setVideos] = useState(initialVideos)
  const [latestVideos, setLatestVideos] = useState([])

  const youtubeSearch = async (termFromSearchBar) =>{
    const response = await youtube.get('/search',{
        params: {
        q: termFromSearchBar
        }
    })
  setVideos(response.data.items)
  }
const recentVideos = async ()=> {
  const response = await getLatestVideos.get("/search")
  setLatestVideos(response.data.items)
  return response.data.items
}

  const data = {
    videos,
    setVideos,
    youtubeSearch,
    recentVideos,
    latestVideos,
    setLatestVideos,
  }
  
  return (
    <VideosContext.Provider value={data}>{children}</VideosContext.Provider>
  )
}

export {VideosProvider}
export default VideosContext
