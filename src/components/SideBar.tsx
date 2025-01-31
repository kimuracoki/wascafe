import { Box, Drawer, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, useTheme, } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SideBar = (props: Props) => {
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <Drawer
            variant="temporary"
            anchor="right"
            open={props.drawerOpen}
            onClose={props.onToggleDrawer}
            sx={{
                '& .MuiDrawer-paper': {
                    backgroundColor: theme.palette.primary.main,
                    color: '#fff'
                },
                '& .MuiListItemText-root': {
                    color: '#fff'
                },
                '& .MuiListItemIcon-root': {
                    color: '#fff'
                },
                '& .MuiTypography-root': {
                    color: '#fff'
                },
            }}
        >
            <Box
                width={250}
                role="presentation"
                onClick={props.onToggleDrawer}
            >
                <DrawerHeader >

                </DrawerHeader>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => { navigate('/home'); }}>
                            <ListItemIcon>
                                <Icon>home</Icon>
                            </ListItemIcon>
                            <ListItemText secondary="home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => { navigate('/about'); }}>
                            <ListItemIcon>
                                <Icon>face</Icon>
                            </ListItemIcon>
                            <ListItemText secondary="about" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => { navigate('/menu'); }}>
                            <ListItemIcon>
                                <Icon>restaurant</Icon>
                            </ListItemIcon>
                            <ListItemText secondary="menu" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => { navigate('/contact'); }}>
                            <ListItemIcon>
                                <Icon>mail</Icon>
                            </ListItemIcon>
                            <ListItemText secondary="contact" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
};

type Props = {
    drawerOpen: boolean;
    onToggleDrawer: () => void;
};

const DrawerHeader = styled(Box)(() => ({
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em",
    // backgroundColor: indigo[500],
    color: "#ffffff",
    fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, sans-serif",
}));

