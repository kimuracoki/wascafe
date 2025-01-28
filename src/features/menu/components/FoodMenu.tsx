import CustomTabPanel from "./CustomTabPanel";
import MenuHeader from "./MenuHeader";
import foodMenuTexts from "../assets/foodMenuTexts";
import MenuItem from "./MenuItem";

function FoodMenu(props: Props) {
    return (
        <CustomTabPanel value={props.activeIndex} index={props.index}>
            <MenuHeader title={foodMenuTexts.bread.title} copy={foodMenuTexts.bread.copy} />
            {foodMenuTexts.bread.menu.map((x, i) => (
                <MenuItem key={i} item={x.item} price={x.price} description={x.description} />
            ))}
            <MenuHeader title={foodMenuTexts.sandwich.title} copy={foodMenuTexts.sandwich.copy} />
            {foodMenuTexts.sandwich.menu.map((x, i) => (
                <MenuItem key={i} item={x.item} price={x.price} description={x.description} />
            ))}
        </CustomTabPanel>
    );
}

type Props = {
    index: number;
    activeIndex: number;
}

export default FoodMenu;