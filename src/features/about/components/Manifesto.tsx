import { Box, Typography } from "@mui/material";

function Manifesto(props: Props) {
    return (
        <Box
            sx={{
                width: { xs: '320px', sm: '500px', md: '500px' },
                height: { xs: '320px', sm: '500px', md: '400px' },
                padding: '30px',
                backgroundColor: '#ffffff90',
                marginRight: props.position == 'right' ? '0px' : '',
                marginLeft: props.position == 'right' ? 'auto' : '',
            }}
        >
            <Typography sx={{
                whiteSpace: 'pre-line',
                lineHeight: '2rem',
            }}>
                {props.mainCopy}
            </Typography>
            <Typography sx={{
                whiteSpace: 'pre-line',
                lineHeight: '2rem'
            }}>
                {props.subCopy}
            </Typography>
        </Box >
    );
}

type Props = {
    position: Position;
    mainCopy: string;
    subCopy: string;
}

type Position = 'left' | 'right';


export default Manifesto;