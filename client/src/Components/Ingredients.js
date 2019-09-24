import React from 'react';
import { meats, grains, veggies, spices} from './listOfIngredients';

class Ingredients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meat: [],
      grain: [],
      veggie: [],
      spice: []
    }
  }
  render () {
    let meatData = meats.map((d, i) => {
      return (
        <>
          <ul>
          <li key={i}>{d}</li>
          </ul>
        </>
      )
    })
    let grainData = grains.map((d, i) => {
      return (
        <>
          <ul>
          <li key={i}>{d}</li>
          </ul>
        </>
      )
    })
    let veggieData = veggies.map((d, i) => {
      return (
        <>
          <ul>
          <li key={i}>{d}</li>
          </ul>
        </>
      )
    })
    let spiceData = spices.map((d, i) => {
      return (
        <>
          <ul>
          <li key={i}>{d}</li>
          </ul>
        </>
      )
    })
    return(
      <nav className="IngredientsComponent">
        <h2>Ingredients</h2>
        <h3>What ingredients do you have? Select all that apply</h3>
        <div className='gredients'>
          <div className='in'>
            <h4>Meats</h4>
            {meatData}
          </div>
        </div>
        <div className='gredients'>
          <div className='in'>
            <h4>Grains</h4>
            {grainData}
          </div>
        </div>
        <div className='gredients'>
          <div className='in'>
            <h4>Veggies</h4>
            {veggieData}
          </div>
        </div>
        <div className='gredients'>
          <div className='in'>
            <h4>Spices</h4>
            {spiceData}
          </div>
        </div>
      </nav>
    )
  }
}

export default Ingredients;
