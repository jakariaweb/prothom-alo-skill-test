import React from 'react'
import { Link } from 'react-router-dom'

const SideBarRightNews = ({ latestNews }) => {
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
    <Link to={`/latest/${latestNews.id}`} className="news_left_content_link">
      <div className="sidebar_right_news_row row">
        <div className="col-8">
          <p className="sidebar_right_news_heading">
            <span className="sidebar_right_news_heading_impt">
              {banglaNum} {latestNews?.headline}
            </span>{' '}
            {latestNews?.subheadline === '' ? '' : '/'}{' '}
            {latestNews?.subheadline}
          </p>
        </div>
        <div className="col-4">
          <img
            src={latestNews?.thumb}
            alt="Thumbnail"
            className="sidebar_right_advertimg"
          />
        </div>

        <div className="sidebar_right_new_time_ago row">
          <div className="col-12">
            <p className="sidebar_right_time">১৬ মিনিট আগে</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SideBarRightNews
