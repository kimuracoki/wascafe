import { Box } from "@mui/material";

function Hero(props: Props) {
    return (
        <Box sx={{
            width: '100%',
            aspectRatio: '1080/440',
            objectFit: 'cover',
            backgroundImage: `url(${props.imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            marginBottom: { xs: '30px', sm: '100px' },
        }}></Box>
    );
}

type Props = {
    imageUrl: string;
}

export default Hero;