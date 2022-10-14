import React from 'react'
import { Link } from 'react-router-dom'

const LatestTab = ({ latestNews }) => {
  const banglaNum =
    latestNews.sort === 1
      ? '১'
      : latestNews.sort === 2
      ? '২'
      : latestNews.sort === 3
      ? '৩'
      : latestNews.sort === 4
      ? '৪'
      : latestNews.sort === 5
      ? '৫'
      : ''
  return (
    <div className="news_left_content">
      <Link to={`/latest/${latestNews.id}`} className="news_left_content_link">
        <h1 className="news_left_content_number">{banglaNum}</h1>
        <p className="news_left_content_heading">
          <span className="news_left_content_heading_left_main">
            {latestNews?.headline}
          </span>{' '}
          {latestNews?.subheadline === '' ? '' : '/'} {latestNews?.subheadline}
        </p>
      </Link>
    </div>
  )
}

export default LatestTab
