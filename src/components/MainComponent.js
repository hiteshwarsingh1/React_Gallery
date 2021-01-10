import React,{Component} from 'react';
import ImageDisplay from "./imageDisplay";
import ThumbnailDisplay from './thumbnailDisplay';
import {GALLERY} from '../shared/ImageDetail';
import '../App.css';
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            gallery:GALLERY,
            selectedDish:GALLERY[0]
        };
    }
    onDishSelect(dish){
        this.setState({
            selectedDish:dish
        });
    }
   
    render(){
        return(
            <div className="contain">
                <h3 style={{textAlign:"center",color:"white"}} className="mb-3 mt-2">Image Gallery App</h3>
                {/* {this.defaultDish()} */}
                <div className="selectedContain">
                <ImageDisplay dish={this.state.selectedDish} />
                </div>
                <div className="thumbContain mb-2">
                <ThumbnailDisplay gallery={this.state.gallery} onClick={(dishId) => this.onDishSelect(dishId)}/>
                </div>
                {/* this onclick function recives the value from Thumbnail.js function onlcik and return as dishId and we pass in ondishselect*/}
            </div>
        );
    }
}
export default Main;
