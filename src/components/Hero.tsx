import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import backgroundImage from '@/assets/shop-far.webp'
import { css } from '@emotion/react';

function Hero() {
  return (
    <Box
      css={style.heroBox}
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: { md: '1000px', xs: '350px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'left', color: '#fff', fontWeight: '500' }}>
        <Typography sx={{ fontSize: { xs: '20px', md: '52px' } }} variant="h3" component="h2" gutterBottom>
          特別じゃない日も、
        </Typography>
        <Typography sx={{ fontSize: { xs: '20px', md: '52px' } }} variant="h3" gutterBottom>
          あなたのためのスイーツ。
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;

const style = {
  heroBox: css`
    background-image: url(${backgroundImage});
  `
}