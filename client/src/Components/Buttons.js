import React from 'react';
import '../CSS/Buttons.css';
import {Link} from 'react-router-dom'



function Buttons(props) {
    return(
      <div className="ButtonsComponent">
        <p> Tell us what you have: </p>
        <div className="ButtonsColumn">
          <button className=
          {
            props.currentPath==="/ingredients" ? "activeButton": ""
          }>
            <Link to='/ingredients'>
              Ingredients
            </Link>
          </button>

          <button className=
          {
            props.currentPath==="/Cooking_Utensils" ? "activeButton": ""
          }>
            <Link to='/Cooking_Utensils'>
              Cooking Utensils
            </Link>
          </button>

          <button className=
          {
            props.currentPath==="/Time_Needed" ? "activeButton": ""
          }>
            <Link to='/Time_Needed'>
              Time Needed
            </Link>
          </button>

        </div>

      </div>
    )
}

export default Buttons;
