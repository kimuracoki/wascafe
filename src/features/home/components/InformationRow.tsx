import { Grid2, Link, Typography } from "@mui/material";

function InformationRow(props: Props) {
    return (
        <Grid2 container direction="row">
            <Grid2
                width={{ xs: '100%', sm: '200px' }}>
                <Typography
                    component="dt"
                    sx={{
                        fontSize: { xs: '12px', sm: '16px' },
                    }}
                >
                    {props.date}
                </Typography>
            </Grid2>
            <Grid2 width={{
                xs: '100%', sm: '400px'
            }}>
                <Link href="#" color="inherit"><Typography
                    component="dd"
                    sx={{
                        whiteSpace: 'pre-line',
                        fontSize: { xs: '12px', sm: '16px' },
                        marginBottom: '30px'
                    }}>{props.header}</Typography>
                </Link>
            </Grid2>
        </Grid2>
    );
}

type Props = {
    key: number;
    date: string;
    header: string;
};

export default InformationRow;