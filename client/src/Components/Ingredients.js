import React from 'react';
import General from '../CSS/General.css'
import { meats, grains, veggies, spices} from './listOfIngredients';

class Ingredients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: []
    }
  }

  handleClick = (food) => {
    let foods = food.target.value
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, foods]
    }), () => console.log(this.state.ingredients))
}

  render () {
    let meatData = meats.map((d, i) => {
      return (
        <>
          <ul>
            <button
            key={i}
            value={d}
            onClick={this.handleClick}>
            {d}
            </button>
          </ul>
        </>
      )
    })
    let grainData = grains.map((d, i) => {
      return (
        <>
          <ul>
            <button
            key={i}
            value={d}
            onClick={this.handleClick}>
            {d}
            </button>
          </ul>
        </>
      )
    })
    let veggieData = veggies.map((d, i) => {
      return (
        <>
          <ul>
            <button
            key={i}
            value={d}
            onClick={this.handleClick}>
            {d}
            </button>
          </ul>
        </>
      )
    })
    let spiceData = spices.map((d, i) => {
      return (
        <>
          <ul>
            <button
            key={i}
            value={d}
            onClick={this.handleClick}>
            {d}
            </button>
          </ul>
        </>
      )
    })
    return (
      <nav className="IngredientsComponent">
        <h2>Ingredients</h2>
        <h3>What ingredients do you have? Select all that apply</h3>
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
            <h4>Grains</h4>
          </div>
          <div className='right'>
            {grainData}
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
      </nav>
    )
  }
}

export default Ingredients;
