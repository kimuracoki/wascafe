import { Grid2, Typography } from "@mui/material";

function OverviewRow(props: Props) {
    return (
        <Grid2 container direction="row">
            <Grid2
                width={{ xs: '100%', sm: '150px' }}>
                <Typography
                    sx={{
                        fontSize: { xs: '12px', sm: '20px' },
                    }}
                    component="dt">
                    {props.title}
                </Typography>
            </Grid2>
            <Grid2 width={{
                xs: '100%', sm: '300px'
            }}>
                <Typography
                    component="dd"
                    sx={{
                        whiteSpace: 'pre-line',
                        fontSize: { xs: '10px', sm: '16px' },
                        marginBottom: {xs: '10px', sm: '30px'},
                        lineHeight: {xs: '1rem', sm: '2rem'}
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

export default OverviewRow;