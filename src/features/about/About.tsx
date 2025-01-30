import { Container } from "@mui/material";
import cakeDrinkImage from '@/features/about/assets/cake-and-drink.jpg'
import Hero from "@/components/Hero";
import OwnerIntroduction from "@/features/about/components/OwnerIntroduction";
import ShopIntroduction from '@/features/about/components/ShopIntroduction';
import Overview from "./components/Overview";

export const About = () => {
    return (
        <Container disableGutters maxWidth="md">
            <Hero imageUrl={cakeDrinkImage} />
            <ShopIntroduction />
            <OwnerIntroduction />
            <Overview />
        </Container >
    );
}