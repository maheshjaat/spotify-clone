import React from 'react'
import './Body.css'
// import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import DIS from './weekly.png'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow'
import { useStateValue } from "./StateProvider";

function Body({spotify}) {
    // const [{discover_weekly},dispatch]=useDataLayerValue()
    const [{ discover_weekly }, dispatch] = useStateValue();
    return (
        <div className="body">
         
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="jjj"/>
                <div className="body__infoText">
                   <strong>PLAYLISTS</strong>
                   <h2>Discover Weekly.....</h2>
                   <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
  <PlayCircleFilledIcon className="body__shuffle"/>
  <FavoriteIcon fontSize="large"/>
  <MoreHorizIcon/>
                </div>
                {/* list of songs */}
                {discover_weekly?.tracks.items.map((item)=>(
                    <SongRow track={item.track}/>
                ))}
            </div>
        </div>
    )
}

export default Body
