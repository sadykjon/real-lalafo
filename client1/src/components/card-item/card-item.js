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
import moment from 'moment'
import ClearIcon from '@mui/icons-material/Clear';
import styles from "./cart-item.module.css"
import CreateIcon from '@mui/icons-material/Create'

const CartItem = (props) => {
    // console.log("props>>>", props)
    const {title, brand, price, description,image,created,_id, user, removePost, updatePost} = props
    const date=created
  const formatDate = (date) => moment(date).format('DD, MMMM YYYY');
  const deletePost=()=>{
    removePost(_id)
  }
  const updateHandlePost = ()=>{
    updatePost(_id)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={user.avatarUrl} sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ClearIcon onClick={deletePost} />
          </IconButton>
        }
        title={user.fullName}
        subheader={formatDate(date)}
      />
      <CardMedia
        component="img"
        height="194"
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
      <CardActions style={{display:"flex", justifyContent:"space-around"}} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <CreateIcon onClick={updateHandlePost} />
        </IconButton>
        
      </CardActions>
    </Card>
  )
}

export default CartItem