import { Box, Drawer, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, } from "@mui/material";

export const SideBar = (props: Props) => (
    <Drawer
        variant="temporary"
        anchor="right"
        open={props.drawerOpen}
        onClose={props.onToggleDrawer}
    >
        <Box
            width={250}
            role="presentation"
            onClick={props.onToggleDrawer}
        >
            <DrawerHeader>

            </DrawerHeader>
            <List>
                <ListItem disablePadding>
                    <ListItemButton aria-label="list-share">
                        <ListItemIcon>
                            <Icon>home</Icon>
                        </ListItemIcon>
                        <ListItemText secondary="home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton aria-label="list-share">
                        <ListItemIcon>
                            <Icon>face</Icon>
                        </ListItemIcon>
                        <ListItemText secondary="about" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton aria-label="list-share">
                        <ListItemIcon>
                            <Icon>restaurant</Icon>
                        </ListItemIcon>
                        <ListItemText secondary="menu" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton aria-label="list-share">
                        <ListItemIcon>
                            <Icon>mail</Icon>
                        </ListItemIcon>
                        <ListItemText secondary="contact" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Drawer>
);

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

