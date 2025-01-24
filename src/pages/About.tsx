import { Box, Container, Grid2, Paper, Typography } from "@mui/material";
import cakeDrinkImage from '@/assets/cake-and-drink.jpg'
import entranceImage from '@/assets/entrance.jpg'

export const About = () => {
    return (
        <Container disableGutters maxWidth="md">
            <Box sx={{
                width: '100%',
                aspectRatio: '1080/440',
                objectFit: 'cover',
                backgroundImage: `url(${cakeDrinkImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'

            }}></Box>
            <Grid2 container direction="row"
            >
                <Grid2 sx={{ margin: "0 auto" }}>
                    <Box
                        width={{ xs: '320px', sm: '500px', md: '540px' }}
                        height={{ xs: '320px', sm: '500px', md: '540px' }}
                        sx={{ bgcolor: "#868686" }}
                    >
                        <Paper
                            sx={{
                                width: { xs: '320px', sm: '500px', md: '540px' },
                                height: { xs: '320px', sm: '500px', md: '540px' },
                                padding: '30px'
                            }}
                        >
                            <Typography>訪れるみなさまの憩いの場所でありたい。</Typography>
                            <Typography>ワズカフェは、誰もがハッピーな気持ちになれる、素敵な空間を演出します。</Typography>
                            <Typography>おひとりで、お友達同士で、ファミリーで。誰もが気軽に行きたくなるカフェを目指し、おもてなしの気持ちを込めてみなさまをお迎えいたします。</Typography>
                            <Typography>シアワセなひとときをワズカフェでお過ごしください。</Typography>
                        </Paper>
                    </Box>
                </Grid2>
                <Grid2 sx={{ margin: "0 auto" }}>
                    <Box
                        width={{ xs: '320px', sm: '500px', md: '540px' }}
                        height={{ xs: '320px', sm: '500px', md: '540px' }}
                        sx={{ bgcolor: "#868686" }}
                    >
                        <Paper sx={{
                            width: '100%',
                            height: '300px',
                            backgroundImage: `url(${entranceImage})`,
                            backgroundRepeat: 'no-repeat',
                            boxShadow: "60px 40px 0px 0px #777777"
                        }}></Paper>
                    </Box>
                </Grid2>
            </Grid2>
            {/* <Grid2 container direction="row-reverse">
                <Grid2 sx={{ margin: "0 auto" }}>
                    <Box width={540} height={400} bgcolor="#868686">2:text</Box>
                </Grid2>
                <Grid2 sx={{ margin: "0 auto" }}>
                    <Box width={540} height={400} bgcolor="#868686">2:img</Box>
                </Grid2>
            </Grid2>
            <Grid2 container direction="row">
                <Grid2 sx={{ margin: "0 auto" }}>
                    <Box width={540} height={400} bgcolor="#868686">3:text</Box>
                </Grid2>
                <Grid2 sx={{ margin: "0 auto" }}>
                    <Box width={540} height={400} bgcolor="#868686">3:img</Box>
                </Grid2>
            </Grid2>
            <Grid2 container direction="row-reverse">
                <Grid2 sx={{ margin: "0 auto" }}>
                    <Box width={540} height={400} bgcolor="#868686">4:text</Box>
                </Grid2>
                <Grid2 sx={{ margin: "0 auto" }}>
                    <Box width={540} height={400} bgcolor="#868686">4:img</Box>
                </Grid2>
            </Grid2> */}
        </Container>
    );
}