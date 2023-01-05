import Button from '@mui/material/Button';
import { CartItemType } from './App';
import {Wrapper} from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title}/>
        <div>
            
        </div>
    </Wrapper>
)