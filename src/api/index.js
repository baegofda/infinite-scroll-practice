import axios from 'axios'

const YOUTUBE_KEY = 'AIzaSyCP0bt4o4sUnuOSbFPW5gVek63x4AXDi_0'

export const getVideos = async pageToken => {
  const { data } = await axios({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    params: { key: YOUTUBE_KEY, chart: 'mostPopular', part: 'snippet', maxResults: '10', regionCode: 'kr', pageToken },
  })
  console.log(data)
  return data
}
