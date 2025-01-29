import { Container, Typography } from "@mui/material";
import cakeIcecream from '@/features/home/assets/cake-icecream.jpg'
import Hero from "@/components/Hero";
import ContentTitle from "@/components/ContentTitle";

export const Home = () => {

    return (
        <Container
            disableGutters
            maxWidth="md"
            sx={{
                minHeight: '100vh',
            }}
        >
            <Hero sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end',
            }} imageUrl={cakeIcecream}>
                <Typography
                    component="h2"
                    sx={{
                        color: '#fff',
                        margin: '0 20px 20px',
                        textShadow: '3px 3px 5px #9e9e9e',
                        fontSize: { xs: '16px', sm: '30px' },
                    }}
                >2025年3月3日（月）オープン</Typography>
            </Hero>
            <ContentTitle title="お知らせ" />
        </Container>
    );
}
