import React from "react";
import Button from "@material-ui/core/Button";
import { Provider, connect } from "react-redux";
import { store } from "./../_helpers/store.js";
import Menu from "../Menu/Manu.js";

const mapStateToProps = ( state )=> {
  return{
      'buttonColor': state.buttonColor,
      'buttonText' : state.buttonText,
      'source': state.source
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    handleClick: () =>{
      //check if user have audio and video devices
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video:  {
          width: { min: 1024, ideal: 1280, max: 1920 },
          height: { min: 776, ideal: 720, max: 1080 }
        }
      }).then( ( stream ) => {
          //assign stream url to video Element as a source url
          dispatch( {type:'undefined', source: window.URL.createObjectURL(stream)}  );
      }).catch( (error) => {
          alert( 'No Media Device found! Check If you have connected webcam correctly' );
      });
    } 
  };
};

export function App(props) {
  const {buttonColor, buttonText, handleClick, source } = props;
    return (
      <div>
        <div>
          <Menu />
        </div>
        <div>
          <video id="videoId" width="400" height="400" autoPlay controls src={source} />
        </div>
        <div>
          <Button onClick = {(e) => handleClick()} variant="contained" color={ buttonColor } >{buttonText}</Button>
        </div>
      </div>
    );
}

//connect react component to store
const ConnectedComponent  =  connect(mapStateToProps, mapDispatchToProps)(App); 
export  const AppComp = ()  =>  {
  return(
    // make store available to the HOC ConnectedComponent*/}
    <Provider store={store}> 
      <ConnectedComponent/> 
    </Provider>
  )
}