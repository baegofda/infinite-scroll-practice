import React, { useCallback, useState } from 'react'
import { getVideos } from '../api'
import InfiniteScroll from './InfiniteScroll'
import VideoItem from './VideoItem'

const Videos = () => {
  const [videos, setVideos] = useState([])
  const [pageToken, setPageToken] = useState('')

  const getVideosData = useCallback(async () => {
    try {
      const data = await getVideos(pageToken)

      setPageToken(data.nextPageToken)
      setVideos(prev => [...prev, ...data.items])
    } catch (err) {
      console.error(err)
    }
  }, [pageToken])

  return (
    <main className="max-w-[70%] mx-auto py-[16px]">
      <h1 className="text-[#fff] mb-[16px] font-extrabold">YOUTUBE</h1>
      <section>
        <h2 className="sr-only">YOUTUBE VIDEOS</h2>
        <InfiniteScroll callback={getVideosData} trigger={ref => <div ref={ref} className="h-[60px]" />}>
          <ul>
            {videos.map(video => (
              <VideoItem key={video.id} data={video} />
            ))}
          </ul>
        </InfiniteScroll>
      </section>
    </main>
  )
}

export default Videos
