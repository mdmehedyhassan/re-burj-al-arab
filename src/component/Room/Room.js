import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone';
import FamilyRestroomTwoToneIcon from '@mui/icons-material/FamilyRestroomTwoTone';
import PriceChangeTwoToneIcon from '@mui/icons-material/PriceChangeTwoTone';
import { Link } from 'react-router-dom';

const Room = (props) => {
    const { title, description, imgUrl, bed, capacity, bedType, avatar, price } = props.room;
    return (
        <div>
            <Card style={{ margin: '10px' }} sx={{ maxWidth: 345 }}>
                <Typography gutterBottom variant="h5" component="div">
                    <span style={{ borderRadius: '20px', padding: '5px', margin: '10px', background: 'orange', color: 'white' }}>{avatar}</span> {title}
                </Typography>
                <CardMedia
                    component="img"
                    height="140"
                    image={imgUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div style={{display:'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                        <p><HotelTwoToneIcon />: {bed}</p>
                        <p><FamilyRestroomTwoToneIcon />: {capacity}</p>
                        <p><PriceChangeTwoToneIcon />: {price}</p>
                        <Link to={`/book/${bedType}`}><Button variant="contained" >Book</Button></Link>
                    </div>
                </CardActions>
            </Card>
        </div>
    );
};

export default Room;