import React from 'react'
import AvatarImages from './AvatarImages'
import HorizontalScroll from 'react-scroll-horizontal'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Slider.css'
const Slider = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="containers">
            <div className='slider'>
                <HorizontalScroll className='scroll'>
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                    <AvatarImages />
                </HorizontalScroll>
            </div>
            <div className="cards my-5">

                <Card className="my-4" sx={{ maxWidth: 614 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                A
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Frontend Developer"
                        subheader="Avgust 29, 2000"
                    />
                    <CardMedia
                        component="img"
                        height="350"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4BPQQmAhaOjJX5QGnLcj8spS7lpopLiW36_P8FTSH0mlazlJvkoQRCULvbRtHuEOJbE&usqp=CAU"
                        alt="Abdumalikov"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                <Card className="my-4" sx={{ maxWidth: 614 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                A
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Frontend Developer"
                        subheader="Avgust 29, 2000"
                    />
                    <CardMedia
                        component="img"
                        height="350"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4BPQQmAhaOjJX5QGnLcj8spS7lpopLiW36_P8FTSH0mlazlJvkoQRCULvbRtHuEOJbE&usqp=CAU"
                        alt="Abdumalikov"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                <Card className="my-4" sx={{ maxWidth: 614 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                A
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Frontend Developer"
                        subheader="Avgust 29, 2000"
                    />
                    <CardMedia
                        component="img"
                        height="350"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4BPQQmAhaOjJX5QGnLcj8spS7lpopLiW36_P8FTSH0mlazlJvkoQRCULvbRtHuEOJbE&usqp=CAU"
                        alt="Abdumalikov"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

            </div>
        </div>
    )
}

export default Slider
