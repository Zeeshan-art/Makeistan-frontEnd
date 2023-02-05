import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: ProductIcon,
        path: '/manageOrders',
        title: 'Manage Orders',
    },
    {
        id: 3,
        icon: ShippingIcon,
        path: '/manageProducts',
        title: 'Manage Products',
    },
    {
        id: 4,
        icon: UserIcon,
        path: '/sellerProfile',
        title: 'Profile',
    }
]

export default sidebar_menu;