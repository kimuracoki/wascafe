import ContentTitle from "@/components/ContentTitle";
import { Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import DrinkMenu from "./components/DrinkMenu";
import FoodMenu from "./components/FoodMenu";

export const Menu = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChange = (e: React.SyntheticEvent, newValue: number) => {
        e.preventDefault();
        setActiveIndex(newValue);
    };
    return (
        <Container disableGutters maxWidth="md"
            sx={{
                paddingTop: '100px'
            }} >
            <ContentTitle
                title="メニュー" />
            <Container
            sx={{
                marginBottom: '80px'
            }}
            >
                <Tabs
                    value={activeIndex}
                    onChange={handleChange}
                    centered
                >
                    <Tab label="ドリンク" />
                    <Tab label="フード" />
                </Tabs>
            </Container>
            <DrinkMenu index={0} activeIndex={activeIndex} />
            <FoodMenu index={1} activeIndex={activeIndex} />
        </Container>
    );
}

