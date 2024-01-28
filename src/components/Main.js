import React from 'react'
import { Fragment } from 'react'
import Home from '../components/Home/Home'
import Content from '../components/content/Content'
import Crousel from '../components/crousel/crousel'
import Imagegallery from '../components/ImageGallery/Imagegallery'
import Imageview from './Imageview/Imageview'
const Main = () => {
  return (
   <Fragment>
    
    <Home/>
    <Imageview/>
    <Content/>
    <Imagegallery/>
    <Crousel/>
   </Fragment>
  )
}

export default Main