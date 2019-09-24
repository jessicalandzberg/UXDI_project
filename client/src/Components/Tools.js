import React from 'react';
import tools from '../CSS/tools.css'
import { equipment} from './listOfTools';

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
          <ul className="ulIngredients">
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
        <div className= "ToolsContent">
          <h3>Select what tools that you have:</h3>
          <div className='tools'>
            <div className='left'>
              <h4>Tools</h4>
            </div>
            <div className='right'>
              {toolData}
            </div>
          </div>
          <button>Next</button>
        </div>
      </div>
    )
  }
}

export default Tools;
