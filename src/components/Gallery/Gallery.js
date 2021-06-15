import { Component } from 'react'
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
      <>
        {this.state.gallery.map((elem) => {
          return (
            <li key={elem.id}>
              <img src={elem.image} width="200px" alt={elem.title} />
              <h3>{elem.title}</h3>
              <h4>{elem.price}</h4>
              <p>{elem.category}</p>
            </li>
          )
        })}
      </>
    )
  }
}

export default Gallery
