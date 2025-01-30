import ContentTitle from "@/components/ContentTitle";
import { Box, Container } from "@mui/material";
import GridRow from "./GridRow";
import GridColumn from "./GridColumn";
import OverviewRow from "./OverviewRow";
import Access from "./Access";
import overviewTexts from '@/features/about/assets/overviewTexts';

function Overview() {
    return (
        <Container
            component="section"
            maxWidth="sm"
            sx={{
                width: { xs: '320px', sm: '100%' },
                marginBottom: '100px',
            }}
        >
            <ContentTitle title="店舗概要" />
            <GridRow mode="row">
                <GridColumn>
                    <Box>
                        {overviewTexts.map((x, i) => (
                            <OverviewRow key={i} title={x.title} description={x.description} />
                        ))}
                    </Box>
                </GridColumn>
                <Access />
            </GridRow>
        </Container>
    );
}


export default Overview;