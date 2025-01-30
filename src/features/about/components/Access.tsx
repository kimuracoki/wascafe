import { Box } from "@mui/material";
import GridColumn from "./GridColumn";
import Overview from "./Overview";

function Access() {
    return (
        <GridColumn>
            <Box>
                <Overview
                    title="所在地"
                    description={`〒012-3456
                    愛知県名古屋市天白区植田本町00-00`} />
                <Overview
                    title="駐車場"
                    description="20台" />
                <Box
                    sx={{
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: 1,
                        maxWidth: "100%",
                        aspectRatio: "16/9",
                    }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.7871730665406!2d136.9886033766063!3d35.13698427276794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600364d834e9d1ad%3A0x7dcb885b6b211292!2z44CSNDY4LTAwMDcg5oSb55-l55yM5ZCN5Y-k5bGL5biC5aSp55m95Yy65qSN55Sw5pys55S677yR5LiB55uu77yW77yQ77yY!5e0!3m2!1sja!2sjp!4v1738204079181!5m2!1sja!2sjp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                    ></iframe>
                </Box>
            </Box>
        </GridColumn>
    );
}

export default Access;