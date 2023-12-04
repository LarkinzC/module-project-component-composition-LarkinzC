import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import Figure from './Figure'

const api_key = 'DEMO_KEY'
const URL= `https://api.nasa.gov/planetary/apod?api_key=${api_key}`







function App() {
  const [apod, setApod] = useState({})
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      }).catch(err => console.log(err))
    }
    // fetchPhoto()
    setApod({
      "copyright": "\nJuned Patel\n",
      "date": "2023-12-04",
      "explanation": "No, the Moon is not a bow, and no, it did not shoot out a plane like an arrow. What is pictured is a chance superposition.  The plane's contrail would normally appear white, but the large volume of air toward the rising Sun preferentially knocked away blue light, not only making the sky blue, but giving the reflected trail a bright red hue.  Far in the distance, well behind the plane, the crescent Moon also appears slightly reddened. Captured early last month from Bolton, UK, the featured image ...",
      "hdurl": "https://apod.nasa.gov/apod/image/2312/BowArrow_Patel_2895.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Plane Crossing Crescent Moon",
      "url": "https://apod.nasa.gov/apod/image/2312/BowArrow_Patel_960.jpg"
    })
  }, [])

  if (!apod) return 'Fetching photo of the day..'

  return (
      <section>
        <Card 
        title={apod.title} 
        text={apod.explanation} 
         />
         <Figure 
         imgUrl={apod.url} 
         date={apod.date}/>
      </section>
  )
}

export default App
