import { ToolBar } from './ToolBar';
import { SideBar } from './SideBar';
import { useState } from 'react';


function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleToggleDrawer = () => {
        setDrawerOpen((drawerOpen) => !drawerOpen);
    };

    return (
        <>
            <ToolBar onToggleDrawer={handleToggleDrawer} />
            <SideBar
                drawerOpen={drawerOpen}
                onToggleDrawer={handleToggleDrawer}
            />
        </>
    );
}
export default Header;
