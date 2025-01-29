import { Box, Container } from "@mui/material";
import cakeDrinkImage from '@/features/about/assets/cake-and-drink.jpg'
import Hero from "@/components/Hero";
import OwnerIntroduction from "@/features/about/components/OwnerIntroduction";
import ContentTitle from "@/components/ContentTitle";
import ShopIntroduction from '@/features/about/components/ShopIntroduction';
import GridRow from "@/features/about/components/GridRow";
import GridColumn from "@/features/about/components/GridColumn";

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