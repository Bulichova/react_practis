import { Component } from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'
import s from "./Gallery.module.css"
class Gallery extends Component {
  state = { gallery: [] }
  async componentDidMount() {
    //   метод рождения компонента
    // здесь делаем запрос в базу данных
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    console.log(data)
    this.setState({ gallery: data })
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    console.log(this.state.gallery)
    return (
      <ul className = {s.list}>
        {this.state.gallery.map((elem) => {
          return <GalleryItem elem={elem} key={elem.id} />
        })}
      </ul>
    )
  }
}

export default Gallery
