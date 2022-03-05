import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import banner from '../../img/banner.png';
import Typography from '@mui/material/Typography';

const Banner = () => {
    const useStyle = makeStyles({
        bannerContainer: {
            background: `url(${banner})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            width: '100%',
            height: '890px'
        },
        heroTitle: {
            paddingTop: '250px',
            paddingRight: '100px',
            width: '1200px !important'
        },
        heroTitleContainer: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }
    })
    const {
        bannerContainer,
        heroTitle, heroTitleContainer
    } = useStyle();
    return (

        <Box className={bannerContainer}>
            <Box className={heroTitleContainer}>
                <Box className={heroTitle}>




                    <Typography
                        variant="h1"
                        noWrap
                        component="div"
                        sx={{ color: 'white', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Cari Cari
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{ color: 'white' }}
                    >
                        Live from their sofa to yours. Get closer to your favorite artists, and never miss out.
                    </Typography>
                </Box>
            </Box>
        </Box>

    );
};

export default Banner;