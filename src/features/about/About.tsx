import { Box, Container } from "@mui/material";
import cakeDrinkImage from '@/features/about/assets/cake-and-drink.jpg'
import Hero from "@/components/Hero";
import OwnerIntroduction from "@/features/about/components/OwnerIntroduction";
import ContentTitle from "@/components/ContentTitle";
import ShopIntroduction from '@/features/about/components/ShopIntroduction';
import GridRow from "@/features/about/components/GridRow";
import GridColumn from "@/features/about/components/GridColumn";
import Access from "./components/Access";
import overviewTexts from '@/features/about/assets/overviewTexts';
import Overview from "./components/Overview";


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
                        {overviewTexts.map((x, i) => (
                            <Overview key={i} title={x.title} description={x.description} />
                        ))}
                    </Box>
                </GridColumn>
                <Access />
            </GridRow>
        </Container >
    );
}