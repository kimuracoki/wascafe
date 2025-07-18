import { Grid2 } from "@mui/material";
import { GridDirection } from "@mui/material/Grid";
import { ReactElement } from "react";

function GridRow(props: Props) {
    return (
        <Grid2
            container
            direction={props.mode}
            sx={{
                marginBottom: { xs: '0', sm: '150px' },
            }}
        >
            {props.children}
        </Grid2>
    );
}

type Props = {
    mode: GridDirection;
    children: [ReactElement, ReactElement];
}

export default GridRow;