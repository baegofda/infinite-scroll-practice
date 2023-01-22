import React from 'react'

const VideoItem = ({ data }) => {
  const { snippet } = data
  const { title, channelTitle, description, tags, thumbnails } = snippet
  const {
    medium: { url, width, height },
  } = thumbnails

  return (
    <li className="flex flex-col gap-[8px] mb-[10px] last:mb-0 border-[1px] border-gray-500 py-[8px] px-[12px] rounded-[4px]">
      <header className="flex items-end gap-[8px] flex-wrap">
        <h3 className="text-[#fff] font-bold">{title}</h3>
        <strong className="text-[#aaa] text-[12px] font-medium">{channelTitle}</strong>
      </header>
      <div className="flex gap-[8px] items-center">
        <img className="rounded-[4px]" src={url} alt="" style={{ width, height }} width={width} height={height} />
        <pre className="text-[14px] self-start h-[180px] overflow-y-auto text-[#f1f1f1]">{description}</pre>
      </div>
      {tags && (
        <ul className="flex gap-x-[4px] text-[12px] text-[#aaa] overflow-x-auto">
          {tags.map((tag, idx) => (
            <li className="shrink-0 font-medium flex items-center" key={idx}>
              {tag}
              {tags.length !== idx + 1 && <div className="ml-[4px] w-[1px] h-[45%] bg-gray-400" />}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default VideoItem
