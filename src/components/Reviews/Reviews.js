import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import profile3 from '../../img/Img.png';
import profile1 from '../../img/Img (2).png';
import profile2 from '../../img/Img (1).png';

import us from '../../img/🇺🇸.png';
import it from '../../img/🇮🇹.png';

const Reviews = () => {
    const theme = useTheme();
    const useStyle = makeStyles({
        reviewSection: {
            width: '100%',
            height: '470px',
            background: '#0A0B1A',
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '100px'


        },
        reviewContainer: {
            display: 'grid',
            padding: '100px 50px',
            gridTemplateColumns: 'repeat(3,1fr)',
            gridColumnGap: '26px',
            background: '#0A0B1A',
            maxWidth: '1300px !important',
            position: 'relative',
            overflowX: 'scroll',
            overflowY: 'hidden',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        reviewBg: {
            background: 'linear-gradient(to right,#276C73,#5293E8)',
            position: 'relative',
            width: '360px',
            height: '244px',
            borderRadius: '16px',
            marginBottom: '100px'
        },
        reviewCard: {
            position: 'absolute',
            top: '11px',
            right: '11px',
            borderRadius: '16px',
            border: '2px solid #E5AF56',
            padding: '23px',
            width: '360px',
            height: '244px',
            background: '#0A0B1A',
            color: '#FFFFFF',


        },
        underLineShow: {
            width: '48px',
            height: '3px',
            position: 'absolute',
            top: '50px',
            left: '50px',
            background: '#0259Eb'
        }
    });
    const {
        reviewContainer,
        reviewCard, reviewBg, reviewSection, underLineShow
    } = useStyle();
    return (
        <Box className={reviewSection}>
            <Box className={reviewContainer}>
                {/* card1 */}
                <Box className={reviewBg}>
                    <Box className={reviewCard}>



                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ marginRight: '14px' }}>
                                <img src={profile1} alt="" />
                            </Box>
                            <Box >
                                <Typography>
                                    Hellen Jummy
                                </Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <img src={us} alt="" />
                                    <Typography sx={{ marginLeft: '8px' }}>
                                        Palo Alto, CA
                                    </Typography>

                                </Box>


                            </Box>
                        </Box>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
                                laoreet adipiscing.
                            </Typography>
                        </Box>

                    </Box>
                </Box>
                {/* card2 */}
                <Box className={reviewBg}>
                    <Box className={reviewCard}>



                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ marginRight: '14px' }}>
                                <img src={profile2} alt="" />
                            </Box>
                            <Box >
                                <Typography>
                                    Isaac Oluwatemilorun
                                </Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <img src={it} alt="" />
                                    <Typography sx={{ marginLeft: '8px' }}>
                                        Palo Alto, CA
                                    </Typography>

                                </Box>


                            </Box>
                        </Box>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
                                laoreet adipiscing.
                            </Typography>
                        </Box>

                    </Box>
                </Box>
                {/* card3 */}
                <Box className={reviewBg}>
                    <Box className={reviewCard}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ marginRight: '14px' }}>
                                <img src={profile3} alt="" />
                            </Box>
                            <Box >
                                <Typography>
                                    Hellen Jummy
                                </Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <img src={us} alt="" />
                                    <Typography sx={{ marginLeft: '8px' }}>
                                        Palo Alto, CA
                                    </Typography>

                                </Box>


                            </Box>
                        </Box>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget
                                laoreet adipiscing.
                            </Typography>
                        </Box>

                    </Box>
                </Box>
                <Typography sx={{ color: 'white', position: 'absolute', padding: '0 50px', fontSize: '32px', top: '0' }}>
                    Reviews
                </Typography>
                <Box className={underLineShow}>

                </Box>

            </Box>
        </Box>
    );
};

export default Reviews;