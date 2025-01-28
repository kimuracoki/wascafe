import ContentTitle from "@/components/ContentTitle";
import { Box } from "@mui/material";
import GridRow from "./GridRow";
import GridColumn from "./GridColumn";
import Manifesto from "./Manifesto";
import ImageWithShadow from "./ImageWithShadow";
import entranceImage from '@/features/about/assets/entrance.jpg';
import dripCoffeeImage from '@/features/about/assets/drip-coffee.jpg';
import breadImage from '@/features/about/assets/bread.jpg';
import gardenImage from '@/features/about/assets/garden.jpg';
import copyTexts from '@/features/about/assets/copyTexts';

function ShopIntroduction() {
    return (
        <Box component="section">
            <ContentTitle title="wasについて" />
            <GridRow mode="row">
                <GridColumn>
                    <Manifesto position="left" mainCopy={copyTexts.firstMainCopy} subCopy={copyTexts.firstSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="right" imageUrl={entranceImage} />
                </GridColumn>
            </GridRow>
            <GridRow mode="row-reverse">
                <GridColumn>
                    <Manifesto position="right" mainCopy={copyTexts.secondMainCopy} subCopy={copyTexts.secondSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="left" imageUrl={dripCoffeeImage} />
                </GridColumn>
            </GridRow>
            <GridRow mode="row">
                <GridColumn>
                    <Manifesto position="left" mainCopy={copyTexts.thirdMainCopy} subCopy={copyTexts.thirdSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="right" imageUrl={breadImage} />
                </GridColumn>
            </GridRow>
            <GridRow mode="row-reverse">
                <GridColumn>
                    <Manifesto position="right" mainCopy={copyTexts.fourthMainCopy} subCopy={copyTexts.fourthSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="left" imageUrl={gardenImage} />
                </GridColumn>
            </GridRow>
        </Box>
    );
}
export default ShopIntroduction;