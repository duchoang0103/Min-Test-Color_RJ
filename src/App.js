import React, {Component} from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import Result from './component/Result';
import Reset from './component/Reset';
import SiteSetting from './component/SiteSetting';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
        colors: 'blue',
        fontSize: 12
    };
    this.onSet=this.onSet.bind(this);
    this.onchangeSize=this.onchangeSize.bind(this);
    this.onreSet=this.onreSet.bind(this);
}
  onSet(params)
  {
    this.setState({
      colors:params
    });
  }
  onchangeSize(value){
    if(this.state.fontSize+value>=8 && this.state.fontSize+value<=36)
    {
      this.setState(
        {
          fontSize: this.state.fontSize+value
        }
      );
    }
    
  }
  onreSet(value)
  {
    if(value)
    {
      this.setState(
        {
          colors: 'blue',
          fontSize: 12
        }
      );
    }
  }
  render(){
    return(
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.colors} layVe={this.onSet}/>
          
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SiteSetting fontSize={this.state.fontSize} laySize={this.onchangeSize}/>
            <Reset reSet={this.onreSet}/>
            
          </div>
          <Result color={this.state.colors} fontSize={this.state.fontSize}/>
          
        </div>
      </div>
      
    );
  }
}

export default App;



// import React, { Component} from 'react';
// import './App.css';
// class App extends Component {
    
//   render(){

//   return (
//    <div>
       
//        hhhhhh
       
       
//    </div>
//   );
//   }
  
// }

// export default App;

