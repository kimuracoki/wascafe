import ContentTitle from "@/components/ContentTitle";
import { Container, FormControlLabel, Grid2, Radio, RadioGroup, TextField, Typography } from "@mui/material";

export const Contact = () => {

    return (
        <Container disableGutters maxWidth="md"
            sx={{
                paddingTop: '100px'
            }} >
            <ContentTitle title="お問い合わせ" />
            <Typography
                sx={{
                    whiteSpace: 'pre-line',
                    lineHeight: '2rem',
                }}>{`ワズカフェでは、お席のご予約、お誕生日のお祝いや貸切のご相談などを随時受け付けております。
                        お気軽にお問い合わせください。`}</Typography>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '300px' }}>
                    <Typography>お名前（必須）</Typography>
                </Grid2>
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
                    <TextField />
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '300px' }}>
                    <Typography>メールアドレス（必須）</Typography>
                </Grid2>
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
                    <TextField />
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '300px' }}>
                    <Typography>お電話番号</Typography>
                </Grid2>
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
                    <TextField />
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '300px' }}>
                    <Typography>お問い合わせの種類</Typography>
                </Grid2>
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
                    <RadioGroup row>
                        <FormControlLabel control={<Radio />} label="お席の予約" />
                        <FormControlLabel control={<Radio />} label="貸切のご相談" />
                        <FormControlLabel control={<Radio />} label="その他" />
                    </RadioGroup>
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '300px' }}>
                    <Typography>お問い合わせ内容</Typography>
                </Grid2>
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
                    <TextField multiline rows={4} />
                </Grid2>
            </Grid2>
        </Container>
    );
}