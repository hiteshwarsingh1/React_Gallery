import React,{Component} from 'react';

import '../App.css';

class ThumbnailDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };
    }
    
    render(){
        const menu=this.props.gallery.map((dish)=>{
            return (
                <div className="col-12 col-md-2 mb-1 d-flex justify-content-center"  key={dish.id}  >
                    <img 
                        width="85px" 
                        height="120px"
                        src={dish.image} 
                        
                        onClick={() => this.props.onClick(dish)}//empty function return the dish id that is clicked
                    />
                    
                </div>
            )
        });
        return(
            <div className="container" >
                <div className="row no-gutters imgSmall" >
                        
                            {menu}
                        
                </div>
                    
            </div>
        );
    }
}
export default ThumbnailDisplay;