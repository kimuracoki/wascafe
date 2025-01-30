import { Grid2, Typography } from "@mui/material";

function Overview(props: Props) {
    return (
        <Grid2 container direction="row">
            <Grid2
                width={{ xs: '100%', sm: '150px' }}>
                <Typography component="dt">{props.title}</Typography>
            </Grid2>
            <Grid2 width={{
                xs: '100%', sm: '300px'
            }}>
                <Typography
                    component="dd"
                    sx={{
                        whiteSpace: 'pre-line',
                        fontSize: { xs: '12px', sm: '16px' },
                        marginBottom: '30px'
                    }}>{props.description}</Typography>
            </Grid2>
        </Grid2>
    );
}

type Props = {
    key?: number;
    title: string;
    description: string;
};

export default Overview;