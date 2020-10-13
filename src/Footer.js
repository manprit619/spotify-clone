import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";




function Footer() {
    return (
        <div className="footer">
            

            <div className="footer_left">
            <img className="footer_albumlogo" src="data:image/jpeg;base64,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" alt="" />
            <div className="footer_songInfo">
            <h4>Yeah!</h4>
            <p>Usher</p>


            </div>
            </div>
            
            <div className="footer_center">
        <ShuffleIcon className="footer_green"/>
        <SkipPreviousIcon  className="footer_icon" />
        <PlayCircleOutlineIcon
           
            fontSize="large"
            className="footer_icon"
          />
          <SkipNextIcon  className="footer_icon" />
          <RepeatIcon  className="footer_green" />
                
</div>

<div className="footer_right">

<Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
            </div>
            


        </div>
    )
}

export default Footer
