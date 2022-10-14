import React from 'react'
import newsData from '../assests/data/sample-data1.json'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

const NewsDetails = () => {
  let { type, id } = useParams()

  const allowed = [type]

  const filtered = Object.keys(newsData)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = newsData[key]
      return obj
    }, {})

  const matchData = filtered[type].items.filter(
    (news) => news.id.toString() === id
  )

  const { headline, descriptions, subheadline, thumb } = matchData[0]

  return (
    <div className="app-home">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 news_details">
            <p>{filtered[type].name}</p>
            <h3 className="news_details_heading">
              {headline} {subheadline}
            </h3>
            <img className="news_details_img" src={thumb} alt="" />
            <p className="news_details_desc">
              {descriptions.replace(/<(.|\n)*?>/g, '')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetails
