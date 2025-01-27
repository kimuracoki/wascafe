import { Box, Typography } from "@mui/material";

function Manifesto(props: Props) {
    return (
        <Box
            sx={{
                ...(props.position === 'right' && {
                    marginRight: '0px',
                    marginLeft: 'auto',
                }),
                width: { xs: '100%', sm: '500px', md: '500px' },
                padding: {xs: '20px 20px',sm:'80px 30px'},
                backgroundColor: '#ffffff90',
                textAlign: {xs: 'center', sm: 'left'},
            }}
        >
            <Typography sx={{
                whiteSpace: 'pre-line',
                lineHeight: '2rem',
                fontSize: { xs: '12px', sm: '20px' },
                paddingBottom: {xs: '30px', sm: '50px'}
            }}>
                {props.mainCopy}
            </Typography>
            <Typography sx={{
                whiteSpace: 'pre-line',
                lineHeight: '2rem',
                fontSize: { xs: '10px', sm: '16px' },
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