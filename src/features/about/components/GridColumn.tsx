import { Grid2 } from "@mui/material";
import { ReactElement } from "react";

function GridColumn(props: Props) {
    return (
        <Grid2 width={{ xs: '100%', sm: '500px', md: '540px' }}
            sx={{
                margin: "0 auto",
                marginBottom: { xs: '', sm: '150px' },
            }}>{props.children}</Grid2>
    );
}

type Props = {
    children: ReactElement;
}


export default GridColumn;