import React from 'react'



export default function Figure({imgUrl, date}) {
    return (
      <figure>
              <img src={imgUrl}></img>
              <figcaption>Space is neat, taken on {date}</figcaption>
            </figure>
    )
  }