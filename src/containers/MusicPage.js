



import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import ScoreComments from '../components/ScoreComments'
// import { Column } from 'mui-flex-layout'
// import { makeStyles } from '@material-ui/core/styles';
import MusicScore from './MusicScore'


class MusicPage extends React.Component {

  
render() {
   

  
    return (
  

      <div className="music-score-container">
        <div className="comments-container">
          <ScoreComments />
          <ScoreComments />
          <ScoreComments />
          <ScoreComments />
          <ScoreComments />
          <ScoreComments />
          <ScoreComments />
          <ScoreComments />
        </div>
        <div>
           <MusicScore />
        </div>
      </div>   

    )
  }
}

export default MusicPage