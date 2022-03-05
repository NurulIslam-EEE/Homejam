
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
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const UpcomingShows = () => {
    const theme = useTheme();
    const useStyle = makeStyles({
        cardSection: {
            width: '100%',
            height: '800px',
            background: '#0A0B1A',
            display: 'flex',
            justifyContent: 'center',
            padding: '150px 0'
        },
        cardContainer: {

            display: 'grid',
            padding: '50px',
            paddingTop: '100px',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridColumnGap: '26px',
            maxWidth: '1300px',
            height: '550px',

            position: 'relative',
            overflowX: 'scroll',
            overflowY: 'hidden',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        showBg: {
            background: 'linear-gradient(to right,#301A68,#234C97)',
            position: 'relative',
            borderRadius: '8px',
            width: '268px',
            height: '400px'
        },
        showCard: {
            position: 'absolute',
            top: '11px',
            right: '11px',
            width: '268px',
            background: '#111229 !important',
            height: '400px',
            borderRadius: '8px',

        },
        underLine: {
            width: '48px',
            height: '3px',
            position: 'absolute',
            top: '50px',
            left: '50px',
            background: '#0259Eb'
        }

    })
    const {
        cardContainer, cardSection, showBg, showCard, underLine
    } = useStyle();
    return (

        <Box className={cardSection}>

            <Box className={cardContainer}>
                <Box className={showBg}>
                    <Card className={showCard}>
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
                </Box>
                <Box className={showBg}>
                    <Card className={showCard}>
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
                </Box>
                <Box className={showBg}>
                    <Card className={showCard}>
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
                </Box>
                <Box className={showBg}>
                    <Card className={showCard}>
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





                <Typography sx={{ color: 'white', position: 'absolute', padding: '0 50px', fontSize: '32px', top: '0' }}>
                    Upcoming Shows
                </Typography>
                <Box className={underLine}>

                </Box>
            </Box>
        </Box>

    );
};

export default UpcomingShows;