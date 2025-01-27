import CustomTabPanel from "./CustomTabPanel";

function DrinkMenu(props: Props) {
    return (
        <CustomTabPanel value={props.activeIndex} index={props.index}>
            ドリンク
        </CustomTabPanel>
    );
}

type Props = {
    index: number;
    activeIndex: number;
}

export default DrinkMenu;