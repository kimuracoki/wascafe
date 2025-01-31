import { Box, Typography } from "@mui/material";

function MenuHeader(props: Props) {
    return (
        <Box
            sx={{ 
                textAlign: 'center',
                marginBottom: '100px'
             }}
        >
            <Typography
                sx={{
                    fontSize: { xs: '18px', sm: '20px' },
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