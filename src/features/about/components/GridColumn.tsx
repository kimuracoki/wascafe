import { Grid2 } from "@mui/material";
import { ReactElement } from "react";

function GridColumn(props: Props) {
    return (
        <Grid2 width={{ xs: '320px', sm: '500px', md: '540px' }}
            height={{ xs: '320px', sm: '500px', md: '540px' }}
            sx={{ margin: "0 auto" }}>{props.children}</Grid2>
    );
}

type Props = {
    children: ReactElement;
}


export default GridColumn;