import React, {Component} from 'react';

class SiteSetting extends Component{
    changeSize(value){
        this.props.laySize(value);
    }
    render(){
        return(     
            <div className="panel panel-warning">
                  <div className="panel-heading">
                        <h3 className="panel-title">Site: {this.props.fontSize} px</h3>
                  </div>
                  <div className="panel-body">
                        <button type="button" className="btn btn-success" onClick={()=>this.changeSize(+2)}>Tang</button>
                        &nbsp;
                        <button type="button" className="btn btn-success" onClick={()=>this.changeSize(-2)}>Giam</button>                  
                  </div>
            </div>
            
        );
    }
}
export default SiteSetting;
