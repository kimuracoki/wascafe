import { Box } from "@mui/material";

function ImageWithShadow(props: Props) {
    return (
        <Box sx={{
            ...(props.position === 'right' && {
                marginRight: { xs: 'auto', sm: '60px' },
                marginLeft: 'auto',
            }),
            ...(props.position === 'left' && {
                margin: { xs: 'auto', sm: '0' },
            }),
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '400/300',
            backgroundImage: `url(${props.imageUrl})`,
            backgroundRepeat: 'no-repeat',
            boxShadow: { xs: "none", sm: "60px 40px 0px 0px #B1A8A8" },
        }} />
    );
}
type Props = {
    imageUrl: string;
    position: Position;
}

type Position = 'left' | 'right';

export default ImageWithShadow;