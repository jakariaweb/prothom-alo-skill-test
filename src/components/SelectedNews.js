import React from 'react'
import { Link } from 'react-router-dom'

const SelectedNews = ({ newsData }) => {
  const selectedData = newsData.items.sort((a, b) => (a.sort < b.sort ? -1 : 1))

  const selectedRestData = selectedData.slice(1, 3)
  const banglaNum =
    selectedData[0].sort === 1
      ? '১'
      : selectedData[0].sort === 2
      ? '২'
      : selectedData[0].sort === 3
      ? '৩'
      : selectedData[0].sort === 4
      ? '৪'
      : selectedData[0].sort === 5
      ? '৫'
      : ''
  return (
    <div className="selected_news">
      <div className="selected_news_thumb_main">
        <div className="selected_news_heading">
          <p className="selected_news_heading_text">
            {' '}
            <span className="selected_news_selected_dot"></span> {newsData.name}
          </p>
        </div>
        <Link
          to={`/selected/${selectedData[0].id}`}
          className="news_left_content_link"
        >
          <div className="selected_news_thumb">
            <img
              src={selectedData[0].thumb}
              alt="Thumbnail"
              className="selected_news_thumb_img"
            />
          </div>
          <div className="selected_news_thum_heading_main">
            <h3 className="selected_news_thumb_heading">
              <span className="selected_news_thumb_heading_text">
                {banglaNum} {selectedData[0]?.headline}
              </span>{' '}
              {selectedData[0]?.subheadline === '' ? '' : '/'}{' '}
              {selectedData[0]?.subheadline}
            </h3>
          </div>
        </Link>
      </div>

      <div className="selected_news_sub_thum_main">
        <div className="row">
          {selectedRestData.map((item) => {
            const banglaNumNew =
              item.sort === 1
                ? '১'
                : item.sort === 2
                ? '২'
                : item.sort === 3
                ? '৩'
                : item.sort === 4
                ? '৪'
                : item.sort === 5
                ? '৫'
                : ''
            return (
              <div
                className="col-6 selected_news_sub_thum_content"
                key={item.id}
              >
                <div className="selected_news_sub_content">
                  <Link
                    to={`/selected/${item.id}`}
                    className="news_left_content_link"
                  >
                    <img src={item.thumb} alt="" />
                    <h3 className="selected_news_sub_thumb_heading">
                      <span className="selected_news_sub_thumb_heading_text">
                        {banglaNumNew} {item?.headline}
                      </span>{' '}
                      {item?.subheadline === '' ? '' : '/'} {item?.subheadline}
                    </h3>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SelectedNews
