
import Box from '@mui/material/Box';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import s1 from '../../img/singer1.png';
import s2 from '../../img/singer2.png';
import s3 from '../../img/singer3.png';
import s4 from '../../img/singer4.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const UpcomingShows = () => {
    return (
        <Box sx={{ background: 'black', width: '100%' }}>
            <Box >
                <Typography sx={{ color: 'white' }}>
                    Upcoming Shows
                </Typography>
                <Box sx={{ display: 'flex', background: 'black', justifyContent: 'space-between', maxWidth: '1148px', maxHeight: '480px', margin: '0 auto' }}>
                    <Card sx={{ maxWidth: 268, background: '#111229' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="230"
                            image={s1}
                        />
                        <CardContent>
                            <Typography sx={{ color: '#682F26', background: '#E5C558', display: 'inline-block' }}>
                                Folk
                            </Typography>
                            <Typography sx={{ color: 'white' }} gutterBottom variant="h5" component="div">
                                Benny Dayal
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button sx={{ color: '#0259EB' }} size="small" endIcon={<ArrowForwardIcon />}>More Info</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>




                    <Card sx={{ maxWidth: 268, background: '#111229' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="240"
                            image={s2}
                        />
                        <CardContent>
                            <Typography sx={{ color: '#682F26', background: '#E5C558', display: 'inline-block' }}>
                                Bollywood
                            </Typography>
                            <Typography sx={{ color: 'white' }} gutterBottom variant="h5" component="div">
                                Vijay Yesudas
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button sx={{ color: '#0259EB' }} size="small" endIcon={<ArrowForwardIcon />}>Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>



                    <Card sx={{ maxWidth: 268, background: '#111229' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="240"
                            image={s3}
                        />
                        <CardContent>
                            <Typography sx={{ color: '#682F26', background: '#E5C558', display: 'inline-block' }}>
                                Folk
                            </Typography>
                            <Typography sx={{ color: 'white' }} gutterBottom variant="h5" component="div">
                                Andrea Jeremiah
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button sx={{ color: '#0259EB' }} size="small" endIcon={<ArrowForwardIcon />}>More Info</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                    <Card sx={{ maxWidth: 268, background: '#111229' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="240"
                            image={s4}
                        />
                        <CardContent>
                            <Typography sx={{ color: '#682F26', background: '#E5C558', display: 'inline-block' }}>
                                Folk
                            </Typography>
                            <Typography sx={{ color: 'white' }} gutterBottom variant="h5" component="div">
                                Shilpa Rao
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button sx={{ color: '#0259EB' }} size="small" endIcon={<ArrowForwardIcon />}>More Info</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default UpcomingShows;