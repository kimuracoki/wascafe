import { Grid2 } from "@mui/material";
import { ReactElement } from "react";

function FormComponentColumn(props: Props) {
    return (
        <Grid2 width={{ xs: '100%', sm: '600px' }}>
            {props.children}
        </Grid2>
    );
}

type Props = {
    children: ReactElement | undefined;
}

export default FormComponentColumn;