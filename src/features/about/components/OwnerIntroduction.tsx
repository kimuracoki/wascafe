import ContentTitle from "@/components/ContentTitle";
import { Container, Typography } from "@mui/material";

function OwnerIntroduction() {
    return (
        <Container
            component="section"
            maxWidth="sm"
            sx={{
                width: { xs: '320px', sm: '100%' },
                marginBottom: '100px',
            }}
        >
            <ContentTitle title="オーナーについて" />
            <Typography sx={{
                whiteSpace: 'pre-line',
                lineHeight: '2rem',
                fontSize: { xs: '10px', sm: '16px' },
                textAlign: 'center',
                marginBottom: '60px',
            }}>
                {`山田 太郎
                Taro Yamada`}
            </Typography>
            <Typography
                sx={{
                    whiteSpace: 'pre-line',
                    lineHeight: '2rem',
                    fontSize: { xs: '10px', sm: '16px' },
                }}>
                {`メインシェフ兼オーナー。
                名古屋の調理師学校を卒業後、大手飲食店を経営する会社で長年勤務。
                調理から店舗経営（本社マネージャー兼 子会社執行役員）まで経験。
                会社勤務時代から国内の多くのカフェを巡るほか、趣味の旅行も兼ねて欧米を中心に世界各地の飲食店を視察した。
                モットーは良質で身体に優しい料理をお客様に提供すること。
                2024年2月、これまでの経験と視察研究の成果を実践するため名古屋市天白区植田に「ワズカフェ」をオープン。
                地域に根ざし、老若男女関係なく誰もが気軽に訪れることのできるカフェを模索中。`}
            </Typography>
        </Container>
    );
}

export default OwnerIntroduction;