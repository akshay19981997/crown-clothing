import './category-item.component.scss';

const CategoryItem = (props) => {
    return (
        <div key={props.category.id} className='category-containers' style={{
            backgroundImage:`url('${props.category.imageUrl})`
          }}>
            <div className='categories-body-container'>
              <h2>
                {props.category.title}
             </h2>
              <p>Shop Now</p></div>
          </div>
    )
}
export default CategoryItem