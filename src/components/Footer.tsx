import { AppBar, Container, Typography } from "@mui/material";
import Logo from '@/assets/logo.svg?react';

function Footer() {
    return (
        <AppBar component="footer" position="static" sx={{ top: 'auto', bottom: 0, textAlign: 'center', color: '#fff' }}>
            <Container
                disableGutters
                maxWidth="md"
                sx={{
                    padding: '20px 0'
                }}
            >
                <Typography
                    component="h2"
                    sx={{
                        width: { xs: 50, sm: 80 },
                        margin: '0 auto',
                        marginBottom: '2%',
                    }}>
                    <Logo />
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: '10px', sm: '16px' }
                    }}
                >
                    愛知県名古屋市天白区植田本町00-00
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: '10px', sm: '16px' },
                        marginBottom: '5%',
                    }}
                >
                    <small>&copy; 2024 atelier yomi.</small>
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: '8px', sm: '14px' },
                        whiteSpace: 'pre-line',
                        lineHeight: '1rem'
                    }}
                >{`このサイトは架空のサイトになります。
                このページで使用している写真は全てサンプルです。`}</Typography>
            </Container>
        </AppBar>
    );
}
export default Footer;