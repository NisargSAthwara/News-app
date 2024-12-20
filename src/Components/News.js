import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>This ia a News Component
        < NewsItem />
        < NewsItem />
        < NewsItem />
        < NewsItem />
        < NewsItem />
        < NewsItem />
      </div>
    )
  }
}

export default News