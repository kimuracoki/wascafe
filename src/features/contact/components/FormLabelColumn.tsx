import { Grid2, Typography } from "@mui/material";

function FormLabelColumn(props: Props) {
    return (
        <Grid2 width={{ xs: '100%', sm: '300px' }}>
            <Typography
                sx={{
                    marginTop: '16px',
                    fontSize: { xs: '12px', sm: '1rem' },
                }}
            >
                {props.children}
            </Typography>
        </Grid2>
    );
}

type Props = {
    children: string;
}

export default FormLabelColumn;