import React from 'react';
import {Route , Switch} from "react-router-dom"
import Ingredients from "./Ingredients"
import Tools from "./Tools"
import Time from "./Time"
import Recipe from "./Recipe"
import Home from "./Home"



class Main extends React.Component {
    render () {
        return(
          <div className="MainComponent">
          <Switch>
            <Route path= "/ingredients"
            render = {() => <Ingredients
                            /> } />
            <Route path= "/Cooking_Utensils"
            render = {() => <Tools
                            /> } />
            <Route path= "/Time_Needed"
            render = {() => <Time
                            />} />
            <Route path= "/recipe"
            render = {() => <Recipe
                            />} />
            <Route path= "/" component= {Home} />
          </Switch>
          </div>
        )
      }
    }

export default Main;
