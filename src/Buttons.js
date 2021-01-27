import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import "./Buttons.css"

const Buttons = () => {
    return (
        <div className="buttons-container">
            <div className="buttons">
<IconButton>
                <ReplayIcon className="buttons__replay" fontSize="large"/>
            </IconButton>

            <IconButton>
                <CloseIcon className="buttons__close" fontSize="large"/>
            </IconButton>

            <IconButton>
                <StarRateIcon className="buttons__star" fontSize="large"/>
            </IconButton>

            <IconButton>
                <FavoriteIcon className="buttons__fav" fontSize="large"/>
            </IconButton>
            </div>
            
        </div>
    )
}

export default Buttons
