import { Box, Typography } from "@mui/material";

function MenuHeader(props: Props) {
    return (
        <Box
            sx={{ 
                textAlign: 'center',
                margin: {xs: '50px 0', sm:'100px 0'}
             }}
        >
            <Typography
                sx={{
                    fontSize: { xs: '16px', sm: '20px' },
                    paddingBottom: { xs: '10px', sm: '20px' },
                }}
            >{props.title}</Typography>
            <Typography
                sx={{
                    whiteSpace: 'pre-line',
                    lineHeight: '2rem',
                    fontSize: { xs: '12px', sm: '16px' },
                }}
            >{props.copy}</Typography>
        </Box>
    );
}

type Props = {
    title: string;
    copy: string;
};


export default MenuHeader;