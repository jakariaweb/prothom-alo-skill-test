import React from 'react'
import DiscussedTab from './DiscussedTab'
import LatestTab from './LatestTab'
import MostReadTab from './MostReadTab'

const SideBarLeft = ({ tabs, selectedTab, newsData }) => {
  return (
    <>
      <div className="row sidebar_left_tabs">
        <div className="col-4">
          <p
            className={`${
              tabs === 0
                ? 'sidebar_left_news_tabs_active'
                : 'sidebar_left_news_tabs'
            }`}
            onClick={() => selectedTab(0)}
          >
            {newsData.latest.name}
          </p>
        </div>
        <div className="col-4">
          <p
            className={`${
              tabs === 1
                ? 'sidebar_left_news_tabs_active'
                : 'sidebar_left_news_tabs'
            }`}
            onClick={() => selectedTab(1)}
          >
            {newsData.mostread.name}
          </p>
        </div>
        <div className="col-4">
          <p
            className={`${
              tabs === 2
                ? 'sidebar_left_news_tabs_active'
                : 'sidebar_left_news_tabs'
            }`}
            onClick={() => selectedTab(2)}
          >
            {newsData.discussed.name}
          </p>
        </div>
      </div>

      <div className="row">
        {tabs === 0 && (
          <div className="col-12">
            {newsData.latest.items
              .sort((a, b) => (a.sort < b.sort ? -1 : 1))
              .map((item) => (
                <LatestTab key={item.id} latestNews={item} />
              ))}
          </div>
        )}

        {tabs === 1 && (
          <div className="col-12">
            {newsData.mostread.items
              .sort((a, b) => (a.sort < b.sort ? -1 : 1))
              .map((item) => (
                <MostReadTab key={item.id} mostReadNews={item} />
              ))}
          </div>
        )}

        {tabs === 2 && (
          <div className="col-12">
            {newsData.discussed.items
              .sort((a, b) => (a.sort < b.sort ? -1 : 1))
              .map((item) => (
                <DiscussedTab key={item.id} discussedNews={item} />
              ))}
          </div>
        )}
      </div>
    </>
  )
}

export default SideBarLeft
