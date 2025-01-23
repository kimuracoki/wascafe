import { AppBar, Box, Icon, IconButton, MenuItem, Toolbar, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import logo from '@/assets/white_logo.svg'

export const ToolBar = (props: Props) => {
    const navigate = useNavigate();
    return (
        <AppBar position="sticky">
            <Toolbar css={style.toolbar}>
                <IconButton onClick={() => { navigate('/home'); }}>
                    <img width={100} src={logo} />
                </IconButton>
                <IconButton
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    aria-label="menu-botton"
                    edge="start"
                    color="inherit"
                    onClick={props.onToggleDrawer}
                    css={style.iconButton}
                >
                    <Icon>menu</Icon>
                </IconButton>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} css={style.menuNav}>
                    <MenuItem onClick={() => { navigate('/about'); }}>
                        <Typography>about</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => { navigate('/menu'); }}>
                        <Typography>menu</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => { navigate('/contact'); }}>
                        <Typography>contact</Typography>
                    </MenuItem>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

type Props = {
    onToggleDrawer: () => void;
}

const style = {
    toolbar: css`
        display: flex;
        color: #fff;
    `,
    iconButton: css`
        margin-left: auto;
    `,
    menuNav: css`
        margin-left: auto;
    `,
}