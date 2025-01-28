import CustomTabPanel from "./CustomTabPanel";
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";
import drinkMenuTexts from '@/features/menu/assets/drinkMenuTexts';


function DrinkMenu(props: Props) {
    return (
        <CustomTabPanel value={props.activeIndex} index={props.index}>
            <MenuHeader title={drinkMenuTexts.coffee.title} copy={drinkMenuTexts.coffee.copy} />
            {drinkMenuTexts.coffee.menu.map((x, i) => (
                <MenuItem key={i} item={x.item} price={x.price} description={x.description} />
            ))}
            <MenuHeader title={drinkMenuTexts.tea.title} copy={drinkMenuTexts.tea.copy} />
            {drinkMenuTexts.tea.menu.map((x, i) => (
                <MenuItem key={i} item={x.item} price={x.price} description={x.description} />
            ))}
            <MenuHeader title={drinkMenuTexts.softDrink.title} copy={drinkMenuTexts.softDrink.copy} />
            {drinkMenuTexts.softDrink.menu.map((x, i) => (
                <MenuItem key={i} item={x.item} price={x.price} description={x.description} />
            ))}
        </CustomTabPanel>
    );
}

type Props = {
    index: number;
    activeIndex: number;
}

export default DrinkMenu;