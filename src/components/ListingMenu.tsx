import styles from '../assets/scss/components/Listing.module.scss';
import Button from './UI/Button';

const MENU = [
    {
        text: "Last 4 weeks",
        param: "short_term",
    },
    {
        text: "Last 6 months",
        param: "medium_term",
    },
    {
        text: "All time",
        param: "long_term",
    },
];

interface ListingMenu {
    menuButtonHandler: (params: any) => any,
    timeRange: string
}

const ListingMenu = ({ menuButtonHandler, timeRange }: ListingMenu) => {
    return (
        <div className={styles.listing__menu}>
            {MENU?.map((item, id) => (
                <Button
                    className={item.param === timeRange ? "active" : ""}
                    key={id}
                    onClick={() => {
                        menuButtonHandler(item.param);
                    }}
                >
                    {item.text}
                </Button>
            ))}
        </div>
    )
}

export default ListingMenu