import { Container, Typography } from "@mui/material";
import cakeDrinkImage from '@/features/about/assets/cake-and-drink.jpg'
import entranceImage from '@/features/about/assets/entrance.jpg'
import dripCoffeeImage from '@/features/about/assets/drip-coffee.jpg'
import breadImage from '@/features/about/assets/bread.jpg'
import gardenImage from '@/features/about/assets/garden.jpg'
import Hero from "@/components/Hero";
import GridColumn from "../components/GridColumn";
import GridRow from "../components/GridRow";
import Manifesto from "../components/Manifesto";
import ImageWithShadow from "../components/ImageWithShadow";

export const About = () => {
    const firstMainCopy =
        `訪れるみなさまの憩いの場所でありたい。
        ワズカフェは、誰もがハッピーな気持ちになれる、
        素敵な空間を演出します。`;
    const firstSubCopy =
        `おひとりで、お友達同士で、ファミリーで。
        誰もが気軽に行きたくなるカフェを目指し、
        おもてなしの気持ちを込めてみなさまをお迎えいたします。
        シアワセなひとときをワズカフェでお過ごしください。`;
    return (
        <Container disableGutters maxWidth="md">
            <Hero imageUrl={cakeDrinkImage} />
            <Typography
                variant="h5"
                component="h2"
                sx={{ textAlign: 'center', margin: '90px' }}
            >was cafe について</Typography>
            <GridRow mode="row">
                <GridColumn>
                    <Manifesto position="left" mainCopy={firstMainCopy} subCopy={firstSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="right" imageUrl={entranceImage} />
                </GridColumn>
            </GridRow>
            <GridRow mode="row-reverse">
                <GridColumn>
                    <Manifesto position="right" mainCopy={firstMainCopy} subCopy={firstSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="left" imageUrl={dripCoffeeImage} />
                </GridColumn>
            </GridRow>
            <GridRow mode="row">
                <GridColumn>
                    <Manifesto position="left" mainCopy={firstMainCopy} subCopy={firstSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="right" imageUrl={breadImage} />
                </GridColumn>
            </GridRow>
            <GridRow mode="row-reverse">
                <GridColumn>
                    <Manifesto position="right" mainCopy={firstMainCopy} subCopy={firstSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="left" imageUrl={gardenImage} />
                </GridColumn>
            </GridRow>
        </Container>
    );
}