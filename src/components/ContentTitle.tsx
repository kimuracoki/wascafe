import { Typography } from "@mui/material"

function ContentTitle(props: Props) {
    return (
        < Typography
            variant="h5"
            component="h2"
            sx={{
                fontSize: { xs: '16px', sm: '24px' },
                textAlign: 'center',
                marginBottom: { xs: '30px', sm: '100px' },
            }}
        >{props.title}</Typography >
    )
}

type Props = {
    title: string;
}

export default ContentTitle;