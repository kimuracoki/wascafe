import { Container, Typography } from "@mui/material";
import cakeIcecream from '@/features/home/assets/cake-icecream.jpg'
import Hero from "@/components/Hero";
import ContentTitle from "@/components/ContentTitle";
import informationTexts from '@/features/home/assets/informationTexts';
import InformationRow from "./components/InformationRow";


export const Home = () => {

    return (
        <Container
            disableGutters
            maxWidth="md"
            sx={{
                marginBottom: '100px'
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
                        fontSize: { xs: '14px', sm: '30px' },
                    }}
                >2025年3月3日（月）オープン</Typography>
            </Hero>
            <ContentTitle title="お知らせ" />
            <Container
                component="dl"
                sx={{
                    width: {xs: '100%', sm: '60vw', md: '40vw'}
                }}
            >
                {informationTexts.map((x, i) => (
                    <InformationRow key={i} date={x.date} header={x.header} />
                ))}
            </Container>
        </Container>
    );
}
