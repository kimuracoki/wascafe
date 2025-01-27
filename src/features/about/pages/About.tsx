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
        ワズカフェは、
        誰もがハッピーな気持ちになれる、
        素敵な空間を演出します。`;
    const firstSubCopy =
        `おひとりで、お友達同士で、ファミリーで。
        誰もが気軽に行きたくなるカフェを目指し、
        おもてなしの気持ちを込めてみなさまをお迎えいたします。
        シアワセなひとときをワズカフェでお過ごしください。`;
    const secondMainCopy =
        `香りも味も妥協しない、
        看板メニューのオリジナルブレンドコーヒー`;
    const secondSubCopy =
        `世界各地のカフェやコーヒーの産地を巡り歩いたオーナーが
        自信を持って選び抜いたコロンビア産・エチオピア産の豆をブレンドしています。
        オーダーごとにドリップしますので、淹れたての香りと、
        酸味・苦味・コクが調和した奥深い味をお楽しみください。`;
    const thirdMainCopy =
        `こだわりのルヴァン種を使った
        自家製パンも当店の自慢です`;
    const thirdSubCopy =
        `当店のパンはすべて自家製酵母のルヴァン種を用いたフランスの伝統的な製法で作られます。
        小麦の旨味と酸味がしっかりしており、噛みしめるほどに風味が増していくのが特長です。
        定番のクラシック食パンやバゲットのほかにも、
        ランチタイムにはボリュームたっぷりのお惣菜をサンドした限定パンが店頭に並びます。`;
    const fourthMainCopy =
        `すべてのお客様にやさしい場所をつくります`;
    const fourthSubCopy =
        `陽の光が満ちる明るい店内はすべてバリアフリー、
        小さなお子様から年配の方まで安全にお越しいただけます。
        また、新型コロナウイルス感染防止の対策も徹底し、
        みなさまが安心してお過ごしいただける空間づくりを心がけています。`;
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
                    <Manifesto position="right" mainCopy={secondMainCopy} subCopy={secondSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="left" imageUrl={dripCoffeeImage} />
                </GridColumn>
            </GridRow>
            <GridRow mode="row">
                <GridColumn>
                    <Manifesto position="left" mainCopy={thirdMainCopy} subCopy={thirdSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="right" imageUrl={breadImage} />
                </GridColumn>
            </GridRow>
            <GridRow mode="row-reverse">
                <GridColumn>
                    <Manifesto position="right" mainCopy={fourthMainCopy} subCopy={fourthSubCopy} />
                </GridColumn>
                <GridColumn>
                    <ImageWithShadow position="left" imageUrl={gardenImage} />
                </GridColumn>
            </GridRow>
        </Container>
    );
}