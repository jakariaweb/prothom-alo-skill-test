import React, { useState } from 'react'
import Header from '../components/Header'
import newsData from '../assests/data/sample-data1.json'
import SideBarRight from '../components/SideBarRight'
import SideBarLeft from '../components/SideBarLeft'
import SelectedNews from '../components/SelectedNews'

const Home = () => {
  const [tabs, setTabs] = useState(0)

  const selectedTab = (num) => {
    setTabs(num)
  }

  return (
    <div className="app-home">
      <Header />
      <div className="container">
        <div className="row main">
          <div className="col-3 sidebar_left">
            <SideBarLeft
              tabs={tabs}
              selectedTab={selectedTab}
              newsData={newsData}
            />
          </div>
          <div className="col-6">
            <SelectedNews newsData={newsData.selected} />
          </div>
          <div className="col-3 sidebar_right">
            <SideBarRight newslatest={newsData.latest} />
          </div>
        </div>

        <div className="row home_bottom">
          <div className="col-12">
            <img
              src="https://dummyimage.com/1200x440/eee/888&text=AD-2"
              alt="Ads-2"
              className="home_bottom_ads"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
