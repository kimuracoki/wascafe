import { Box, Typography } from "@mui/material";

function MenuHeader() {
    return (
        <Box
            sx={{ textAlign: 'center' }}
        >
            <Typography
                sx={{
                    fontSize: { xs: '18px', sm: '20px' },
                    paddingBottom: { xs: '10px', sm: '20px' },
                }}
            >コーヒー</Typography>
            <Typography
                sx={{
                    whiteSpace: 'pre-line',
                    lineHeight: '2rem',
                    fontSize: { xs: '12px', sm: '16px' },
                    paddingBottom: { xs: '30px', sm: '50px' },
                }}
            >{`ワズカフェのコーヒーはコロンビア産・エチオピア産の豆をベースにした
                オリジナルブレンドをオーダーごとにドリップします。
                淹れたての香りと、酸味・苦味・コクが調和した奥深い味をお楽しみください。`}</Typography>
        </Box>
    );
}

export default MenuHeader;