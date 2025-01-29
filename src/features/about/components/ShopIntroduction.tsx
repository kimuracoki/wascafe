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
import { FadeIn } from "@/components/FadeIn";

function ShopIntroduction() {
    return (
        <Box component="section">
            <ContentTitle title="wasについて" />
            <GridRow mode="row">
                <GridColumn>
                    <FadeIn>
                        <Manifesto position="left" mainCopy={copyTexts.firstMainCopy} subCopy={copyTexts.firstSubCopy} />
                    </FadeIn>
                </GridColumn>
                <GridColumn>
                    <FadeIn>
                        <ImageWithShadow position="right" imageUrl={entranceImage} />
                    </FadeIn>
                </GridColumn>
            </GridRow>
            <GridRow mode="row-reverse">
                <GridColumn>
                    <FadeIn>
                        <Manifesto position="right" mainCopy={copyTexts.secondMainCopy} subCopy={copyTexts.secondSubCopy} />
                    </FadeIn>
                </GridColumn>
                <GridColumn>
                    <FadeIn>
                        <ImageWithShadow position="left" imageUrl={dripCoffeeImage} />
                    </FadeIn>
                </GridColumn>
            </GridRow>
            <GridRow mode="row">
                <GridColumn>
                    <FadeIn>
                        <Manifesto position="left" mainCopy={copyTexts.thirdMainCopy} subCopy={copyTexts.thirdSubCopy} />
                    </FadeIn>
                </GridColumn>
                <GridColumn>
                    <FadeIn>
                        <ImageWithShadow position="right" imageUrl={breadImage} />
                    </FadeIn>
                </GridColumn>
            </GridRow>
            <GridRow mode="row-reverse">
                <GridColumn>
                    <FadeIn>
                        <Manifesto position="right" mainCopy={copyTexts.fourthMainCopy} subCopy={copyTexts.fourthSubCopy} />
                    </FadeIn>
                </GridColumn>
                <GridColumn>
                    <FadeIn>
                        <ImageWithShadow position="left" imageUrl={gardenImage} />
                    </FadeIn>
                </GridColumn>
            </GridRow>
        </Box>
    );
}
export default ShopIntroduction;