import React from 'react';
import ingredients from '../CSS/ingredients.css'
import { meats, veggies, spices} from './listOfIngredients';

class Ingredients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: []
    }
  }

  handleClick = (food) => {
    let foods = food.target.alt
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, foods]
    }))
}

  render () {
    let meatData = meats.map((d, i) => {
      return (
        <>
          <ul className="ulIngredients">
            <button
            key={i}
            value={d}>
            <img alt={d.food} src={d.image} height='80' width='80' onClick={this.handleClick}/>
            </button>
            {d.food}
          </ul>
        </>
      )
    })
    let veggieData = veggies.map((d, i) => {
      return (
        <>
          <ul className="ulIngredients">
            <button
            key={i}
            value={d}>
            <img alt={d.food} src={d.image} height='80' width='80' onClick={this.handleClick}/>
            </button>
            {d.food}
          </ul>
        </>
      )
    })
    let spiceData = spices.map((d, i) => {
      return (
        <>
          <ul className="ulIngredients">
            <button
            key={i}
            value={d}>
            <img alt={d.food} src={d.image} height='80' width='80' onClick={this.handleClick}/>
            </button>
            {d.food}
          </ul>
        </>
      )
    })
    return (
      <div className="IngredientsComponent">
        <div className= "IngredientsContent">
          <h3>Select the ingredients that you have:</h3>
          <div className='ingredients'>
            <div className='left'>
              <h4>Meats</h4>
            </div>
            <div className='right'>
              {meatData}
            </div>
          </div>
          <div className='ingredients'>
            <div className='left'>
              <h4>Veggies</h4>
            </div>
            <div className='right'>
              {veggieData}
            </div>
          </div>
          <div className='ingredients'>
            <div className='left'>
              <h4>Spices</h4>
            </div>
            <div className='right'>
              {spiceData}
            </div>
          </div>
          <button>Next</button>
        </div>
      </div>
    )
  }
}

export default Ingredients;
