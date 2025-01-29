import { Box, SxProps, Theme } from "@mui/material";
import { ReactElement } from "react";

function Hero(props: Props) {
    return (
        <Box
            component="section"
            sx={{
                width: '100%',
                aspectRatio: '1080/440',
                objectFit: 'cover',
                backgroundImage: `url(${props.imageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                marginBottom: { xs: '30px', sm: '100px' },
                borderRadius: '0 0 15px 15px',
                ...(props.sx || {}),
            }}>{props.children}</Box>
    );
}

type Props = {
    imageUrl: string;
    children?: ReactElement | undefined;
    sx?: SxProps<Theme> | undefined;
}

export default Hero;