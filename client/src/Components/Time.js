import React from 'react';
import '../CSS/Time.css'
import {Link} from 'react-router-dom'


function Time() {
    return(
      <nav className="TimeComponent">
        <div>
          <h3>Select how much time you have:</h3>
          <form>
            <div className= "formRow">
              <input id="fifteen" type="radio" />
              <label for="fifteen"> less than 15 minutes </label>
            </div>

            <div className= "formRow">
              <input id="thirty" type="radio" />
              <label for="thirty"> 15-30 minutes </label>
            </div>

            <div className= "formRow">
              <input id="fortyfive" type="radio" />
              <label for="fortyfive"> 30-45 minutes </label>
            </div>

            <div className= "formRow">
              <input id="hour" type="radio" />
              <label for="hour"> 45-60 minutes </label>
            </div>

            <div className= "formRow">
              <input id="overhour" type="radio" />
              <label for="overhour"> 60+ minutes </label>
            </div>
          </form>

          <div className= "NextPreviousButtons">
            <button className= "NextPrevious">
              <Link to='/Time_Needed'>
                Previous
              </Link>
            </button>
            <button className= "NextPrevious">
              <Link to='/Time_Needed'>
                Find me a recipe
              </Link>
            </button>
          </div>
        </div>
      </nav>
    )
}

export default Time;
