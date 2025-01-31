import { Grid2, Typography } from "@mui/material";

function MenuItem(props: Props) {
    return (
        <>
            <Grid2
                container
                direction="row"
            >
                <Grid2 width={{ xs: '100%', sm: '500px' }}>
                    <Typography
                        sx={{
                            fontSize: { xs: '16px', sm: '20px' },
                        }}
                    >{props.item}</Typography>
                </Grid2>
                <Grid2
                    width={{ xs: '100%', sm: '350px' }}
                    sx={{
                        marginRight: '0',
                        marginLeft: 'auto',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '16px', sm: '20px' },
                            textAlign: 'right'
                        }}
                    >{props.price}</Typography>
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
                sx={{
                    marginBottom: '50px'
                }}
            >
                <Grid2 width="100%">
                    <Typography
                        sx={{
                            whiteSpace: 'pre-line',
                            fontSize: { xs: '12px', sm: '16px' },
                            marginBottom: '30px'
                        }}>{props.description}</Typography>
                </Grid2>
            </Grid2>
        </>
    );
}

type Props = {
    key: number;
    item: string;
    price: string;
    description: string;
};

export default MenuItem;