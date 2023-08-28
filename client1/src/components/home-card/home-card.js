import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment'
import styles from "./home-card.module.css"
import {useSelector, useDispatch} from 'react-redux'
import {increment, } from '../../redux/actions/like-action'

const HomeCard = (props) => {
    // console.log("props>>>", props)
    const {title, brand, price, description,image,created,_id, user,removePost} = props
    const date=created
  const formatDate = (date) => moment(date).format('DD, MMMM YYYY');

  const dispatch = useDispatch()
  const {likes} = useSelector(state => state.LikeReducer)
  console.log("likes", likes);

  return (
    <div className={styles.card}>
        <Card sx={{ maxWidth: 400 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title=''
        subheader={formatDate(date)}
      />
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="Paella dish"
      />
      <div className={styles.card_content}>
        <p>{title}</p>
        <p>{brand}</p>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <div className={styles.price}>
        <p>{price} $</p>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={() => dispatch(increment())} /> <span> {likes} </span>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card>
    </div>
  )
}

export default HomeCard