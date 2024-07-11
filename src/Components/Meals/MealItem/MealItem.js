import classes from './MealItem.module.css'


const MealItem = ({MealName , description , price}) => {
  
    const MealPrice = `$${price.toFixed(2)}`


    return ( 
        <li  className={classes.meal}>
            <div >
            <h3>{MealName}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{MealPrice}</div>
            </div>
            <div></div>
        </li>
     );
}
 
export default MealItem;