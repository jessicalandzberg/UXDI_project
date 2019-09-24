import React from 'react';
import tools from '../CSS/tools.css'
import { equipment} from './listOfTools';
import {Link} from 'react-router-dom'


class Tools extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tools: []
    }
  }

  handleClick = (tool) => {
    let tools = tool.target.alt
    this.setState((prevState) => ({
      tools: [...prevState.tools, tools]
    }))
}

  render () {
    let toolData = equipment.map((d, i) => {
      return (
        <>
          <ul className="ulTools">
            <button
            key={i}
            value={d}>
            <img alt={d.tool} src={d.image} height='80' width='80' onClick={this.handleClick}/>
            </button>
            {d.tool}
          </ul>
        </>
      )
    })
    return (
      <div className="ToolsComponent">
        <div>
          <div className= "ToolsContent">
            <h3>Select what tools you have:</h3>
            <div className='tools'>
              <div className='right'>
                {toolData}
              </div>
            </div>
          </div>

          <div className= "NextPreviousButtons">
              <button className= "NextPrevious">
                <Link to='/ingredients'>
                  Back
                </Link>
              </button>
              <button className= "NextPrevious">
                <Link to='/Time_Needed'>
                  Next
                </Link>
              </button>
          </div>
      </div>
    </div>
    )
  }
}

export default Tools;
