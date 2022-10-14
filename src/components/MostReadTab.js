import React from 'react'
import { Link } from 'react-router-dom'

const MostReadTab = ({ mostReadNews }) => {
  const banglaNum =
    mostReadNews.sort === 1
      ? '১'
      : mostReadNews.sort === 2
      ? '২'
      : mostReadNews.sort === 3
      ? '৩'
      : mostReadNews.sort === 4
      ? '৪'
      : mostReadNews.sort === 5
      ? '৫'
      : ''
  return (
    <div className="news_left_content">
      <Link
        to={`/mostread/${mostReadNews.id}`}
        className="news_left_content_link"
      >
        <h1 className="news_left_content_number">{banglaNum}</h1>
        <p className="news_left_content_heading">
          <span className="news_left_content_heading_left_main">
            {mostReadNews?.headline}
          </span>{' '}
          {mostReadNews?.subheadline === '' ? '' : '/'}{' '}
          {mostReadNews?.subheadline}
        </p>
      </Link>
    </div>
  )
}

export default MostReadTab
