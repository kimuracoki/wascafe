import { Box, Container, Typography } from "@mui/material";
import latteArtImage from '@/assets/latte-art.jpg'

export const Home = () => {

    return (
        <Container disableGutters maxWidth="md">
            <Box sx={{
                width: { xs: '100%', md: '1080px' },
                height: '100vh',
                backgroundImage: `url(${latteArtImage})`,
                backgroundRepeat: 'no-repeat',

            }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        textAlign: 'right',
                        color: '#fff'
                    }}
                >2025年3月3日（月）オープン！</Typography>
            </Box>
        </Container>
    );
}
