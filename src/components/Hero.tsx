import { Box } from "@mui/material";

function Hero(props: Props) {
    return (
        <Box sx={{
            width: '100%',
            aspectRatio: '1080/440',
            objectFit: 'cover',
            backgroundImage: `url(${props.imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'

        }}></Box>
    );
}

type Props = {
    imageUrl: string;
}

export default Hero;