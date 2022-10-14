import React from 'react'
import { Link } from 'react-router-dom'

const DiscussedTab = ({ discussedNews }) => {
  const banglaNum =
    discussedNews.sort === 1
      ? '১'
      : discussedNews.sort === 2
      ? '২'
      : discussedNews.sort === 3
      ? '৩'
      : discussedNews.sort === 4
      ? '৪'
      : discussedNews.sort === 5
      ? '৫'
      : ''
  return (
    <div className="news_left_content">
      <Link
        to={`/discussed/${discussedNews.id}`}
        className="news_left_content_link"
      >
        <h1 className="news_left_content_number">{banglaNum}</h1>
        <p className="news_left_content_heading">
          <span className="news_left_content_heading_left_main">
            {discussedNews?.headline}
          </span>{' '}
          {discussedNews?.subheadline === '' ? '' : '/'}{' '}
          {discussedNews?.subheadline}
        </p>
      </Link>
    </div>
  )
}

export default DiscussedTab
