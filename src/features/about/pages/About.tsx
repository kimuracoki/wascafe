import { Box, Container } from "@mui/material";
import cakeDrinkImage from '@/features/about/assets/cake-and-drink.jpg'
import Hero from "@/components/Hero";
import OwnerIntroduction from "../components/OwnerIntroduction";
import ContentTitle from "@/components/contentTitle";
import ShopIntroduction from "../components/shopIntroduction";
import GridRow from "../components/GridRow";
import GridColumn from "../components/GridColumn";

export const About = () => {
    return (
        <Container disableGutters maxWidth="md">
            <Hero imageUrl={cakeDrinkImage} />
            <ShopIntroduction />
            <OwnerIntroduction />
            <ContentTitle title="店舗概要" />
            <GridRow mode="row">
                <GridColumn>
                    <Box>
                        
                    </Box>
                </GridColumn>
                <GridColumn>
                    <Box>
                        
                    </Box>
                </GridColumn>
            </GridRow>
        </Container >
    );
}