import s from './GalleryItem.module.css'
function GalleryItem({ elem }) {
  return (
    <li className={s.item}>
      <div className={s.imgWrapper}>
        <img src={elem.image} width="200px" alt={elem.title} />
      </div>
      <div className={s.description}>
        <h3 className={s.title}>{elem.title}</h3>
        <h4 className = {s.price}>{elem.price}</h4>
        <p>{elem.category}</p>
      </div>
    </li>
  )
}
export default GalleryItem
