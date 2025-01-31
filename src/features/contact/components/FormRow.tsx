import { Grid2 } from "@mui/material";
import { ReactElement } from "react";

function FormRow(props: Props) {
    return (
        <Grid2
            container
            direction="row"
            height='120px'
            sx={{
                marginBottom: {xs: '16px', sm: '0'}
            }}
        >
            <Grid2 width={{ xs: '100%', sm: '300px' }}>
                {props.children[0]}
            </Grid2>
            <Grid2
                width={{ xs: '100%', sm: '600px' }}
            >
                {props.children[1]}
            </Grid2>
        </Grid2>
    );
}

type Props = {
    children: [ReactElement, ReactElement];
}

export default FormRow;