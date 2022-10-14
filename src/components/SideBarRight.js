import React from 'react'
import SideBarRightNews from './SideBarRightNews'

const SideBarRight = ({ newslatest }) => {
  return (
    <div className="row">
      <div className="sidebar_right_main">
        <div className="sidebar_right_advert">
          <p className="sidebar_right_advert_text">বিজ্ঞাপন</p>
          <div className="col-12 sidebar_right_sidebar_advertisement">
            <img
              src="https://dummyimage.com/580x340/eee/888&text=AD-1"
              alt="advertisment"
              className="sidebar_right_advertimg small_screen_sidebar_advert"
            />
          </div>
        </div>
        <div className="sidebar_right_ads_and_content">
          {newslatest.items
            .sort((a, b) => (a.sort < b.sort ? -1 : 1))
            .slice(0, 3)
            .map((item) => (
              <SideBarRightNews key={item.id} latestNews={item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default SideBarRight
