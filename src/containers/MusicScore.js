import React from 'react'
import Embed from 'flat-embed'

class MusicScore extends React.Component {

  componentDidMount() {
    let container = document.getElementById("embed-container");
    let embed = new Embed(container, {
          "width": "1000",
          "height": "1000",
          "score": "5e5d4756c36a982b33b89373",
          "embedParams": {
              "mode": "edit",
              "controlsPosition": "top",
              "branding": false,
              "appId": "5e5d8d05f9a7d640446f88b4"
          }})

}
  render(){
  return (
    <div>
      <div>
        <div id="embed-container"></div>
      </div> 
    </div>
  )
}
}
export default MusicScore;