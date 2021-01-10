import React,{Component} from 'react';

class ImageDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };
    }
    renderDish(dish){
        if(dish!=null){
            return(
                <div className="row justify-content-center" style={{padding:"20px 0px"}}>
                
                        <img 
                            width="80%"
                            heigh="60%"
                            src={dish.image} 
                        />
                </div>
                
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
    render(){
        return(
            <div className="container" >
                
                {this.renderDish(this.props.dish)} 
                
                
            </div>
        );
    }
}
export default ImageDisplay;