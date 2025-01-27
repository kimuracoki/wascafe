import CustomTabPanel from "./CustomTabPanel";

function FoodMenu(props: Props) {
    return (
        <CustomTabPanel value={props.activeIndex} index={props.index}>
            食べ物
        </CustomTabPanel>
    );
}

type Props = {
    index: number;
    activeIndex: number;
}

export default FoodMenu;