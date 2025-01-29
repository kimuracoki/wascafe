import { Grid2 } from "@mui/material";
import { ReactElement } from "react";

function FormLabelColumn(props: Props) {
    return (
        <Grid2 width={{ xs: '100%', sm: '300px' }}>
            {props.children}
        </Grid2>
    );
}

type Props = {
    children: ReactElement | undefined;
}

export default FormLabelColumn;