import RecipeCard from "@/components/RecipeCard";
import { Box, Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";

export const Menu = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Container sx={{ width: '100%' }}>
            <Container>
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="コーヒー" />
                    <Tab label="紅茶"/>
                    <Tab label="ソフトドリンク"  />
                </Tabs>
            </Container>
            <CustomTabPanel value={value} index={0}>
                <RecipeCard />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Container>
    );
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}