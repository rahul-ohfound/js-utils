const COLORS = [
  { label: "Red", color: "#FF0000" },
  { label: "White", color: "#FFFFFF" },
  { label: "Cyan", color: "#00FFFF" },
  { label: "Silver", color: "#C0C0C0" },
  { label: "Blue", color: "#0000FF" },
  { label: "Gray or Grey", color: "#808080" },
  { label: "DarkBlue", color: "#0000A0" },
  { label: "Black", color: "#000000" },
  { label: "LightBlue", color: "#ADD8E6" },
  { label: "Orange", color: "#FFA500" },
  { label: "Purple", color: "#800080" },
  { label: "Brown", color: "#A52A2A" },
  { label: "Yellow", color: "#FFFF00" },
  { label: "Maroon", color: "#800000" },
  { label: "Lime", color: "#00FF00" },
  { label: "Green", color: "#008000" },
  { label: "Magenta", color: "#FF00FF" },
  { label: "Olive", color: "#808000" },
];

const DATE_FILTERS_TYPES = {
    ALL_TIME: 'ALL_TIME',
    TODAY: 'TODAY',
    YESTERDAY: 'YESTERDAY',
    THIS_WEEK: 'THIS_WEEK',
    THIS_MONTH: 'THIS_MONTH',
    LAST_7_DAYS: 'LAST_7_DAYS',
    LAST_15_DAYS: 'LAST_15_DAYS',
    LAST_30_DAYS: 'LAST_30_DAYS',
    CUSTOM: 'CUSTOM',
};

const DATE_FILTERS = [
    {
        displayName: 'All time',
        name: DATE_FILTERS_TYPES.ALL_TIME,
        startDate: -1,
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0),
    },
    {
        displayName: 'Today',
        name: DATE_FILTERS_TYPES.TODAY,
        startDate: new Date().setHours(0, 0, 0, 0),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0),
    },
    {
        displayName: 'Yesterday',
        name: DATE_FILTERS_TYPES.YESTERDAY,
        startDate: new Date(new Date().setDate(new Date().getDate() - 1)).setHours(0, 0, 0, 0),
        endDate: new Date().setHours(0, 0, 0, 0),
    },
    {
        displayName: 'This week',
        name: DATE_FILTERS_TYPES.THIS_WEEK,
        startDate: new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + (new Date().getDay() === 0 ? -6 : 1))).setHours(0,0,0,0),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0),
    },
    {
        displayName: 'This month',
        name: DATE_FILTERS_TYPES.THIS_MONTH,
        startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0),
    },
    {
        displayName: 'Last 7 days',
        name: DATE_FILTERS_TYPES.LAST_7_DAYS,
        startDate: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0),
    },
    {
        displayName: 'Last 15 days',
        name: DATE_FILTERS_TYPES.LAST_15_DAYS,
        startDate: new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0),
    },
    {
        displayName: 'Last 30 days',
        name: DATE_FILTERS_TYPES.LAST_30_DAYS,
        startDate: new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0),
    },
    {
        displayName: 'Custom',
        name: DATE_FILTERS_TYPES.CUSTOM,
        startDate: new Date().setHours(0, 0, 0, 0),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0),
    },
];

const PROFILE_TYPES = {
    BUYER: 'BUYER',
    SUPPLIER: 'SUPPLIER',
    ADMIN: 'ADMIN',
    SUPPORT: 'SUPPORT',
};

const PROFILE_TYPES_META = {
    [PROFILE_TYPES.BUYER]: {
        label: 'Buyer',
    },
    [PROFILE_TYPES.SUPPLIER]: {
        label: 'Supplier',
    },
    [PROFILE_TYPES.ADMIN]: {
        label: 'Admin',
    },
    [PROFILE_TYPES.SUPPORT]: {
        label: 'Support',
    },
};

const OFFER_FOR = {
    ORDER: 'ORDER',
    REFER_ORDER: 'REFER_ORDER',
    REFER: 'REFER',
};

const OFFER_FOR_META = {
    [OFFER_FOR.ORDER]: {
        label: 'Order',
    },
    [OFFER_FOR.REFER]: {
        label: 'Refer',
    },
    [OFFER_FOR.REFER_ORDER]: {
        label: 'Referent Order',
    },
};

const OFFER_STATUS = {
    ALL: 'ALL',
    PENDING: 'PENDING',
    PAID: 'PAID',
    CANCELLED: 'CANCELLED',
};

const OFFER_STATUS_META = {
    [OFFER_STATUS.ALL]: {
        label: 'All',
    },
    [OFFER_STATUS.PENDING]: {
        label: 'Pending',
    },
    [OFFER_STATUS.PAID]: {
        label: 'Paid',
    },
};

const PAYMENT_MODES = {
    CASH: 'CASH',
    CARD: 'CARD',
    NETBANKING: 'NETBANKING',
    PAYTM: 'PAYTM',
    OTHER_WALLET: 'OTHER_WALLET',
};

const ORDER_STATUS = {
    ALL: 'ALL',
    PENDING: 'PENDING',
    RECEIVED: 'RECEIVED',
    APPROVED: 'APPROVED',
    CANCELLED: 'CANCELLED',
    IN_PROGRESS: 'IN_PROGRESS',
    OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
    DELIVERED: 'DELIVERED',
};

const ACTIVE_ORDER_STATUS = {
    ALL: 'ALL',
    APPROVED: 'APPROVED',
    CANCELLED: 'CANCELLED',
    IN_PROGRESS: 'IN_PROGRESS',
    OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
    DELIVERED: 'DELIVERED',
};

const ORDER_STATUS_META = {
    [ORDER_STATUS.ALL]: {
        label: 'All',
    },
    [ORDER_STATUS.PENDING]: {
        label: 'Pending',
    },
    [ORDER_STATUS.RECEIVED]: {
        label: 'Received',
    },
    [ORDER_STATUS.APPROVED]: {
        label: 'Pending',
    },
    [ORDER_STATUS.CANCELLED]: {
        label: 'Cancelled',
    },
    [ORDER_STATUS.IN_PROGRESS]: {
        label: 'In Progress',
    },
    [ORDER_STATUS.OUT_FOR_DELIVERY]: {
        label: 'Out For Delivery',
    },
    [ORDER_STATUS.DELIVERED]: {
        label: 'Delivered',
    },
};

const ENQUIRIES_STATUS = {
    PENDING: 'PENDING',
    RESOLVED: 'RESOLVED',
    CANCELLED: 'CANCELLED',
};

const ENQUIRIES_STATUS_META = {
    [ENQUIRIES_STATUS.ALL]: {
        label: 'Pending',
    },
    [ENQUIRIES_STATUS.REVIEW]: {
        label: 'Resolved',
    },
    [ENQUIRIES_STATUS.MARK]: {
        label: 'Cancelled',
    },
};

const REASON_FOR_CANCELLATIONS = {
    [PROFILE_TYPES.BUYER]: {
        R1: 'Expected delivery date is longer',
        R2: 'Product is delivering to a wrong address(Customer’s mistake)',
        R3: 'Product is not required anymore.',
        R4: 'Cheaper alternative available for lesser price.',
        R5: 'The price of the product has fallen due to sales/discounts and customer wants to get it at a lesser price.',
        R6: 'Bad review from friends/relatives after ordering the product.',
    },
    [PROFILE_TYPES.SUPPLIER]: {
        R1: 'Expected delivery time will be longer.',
        R2: 'Constumer is not responding/rejected.',
        R3: 'Product is no more available.',
        R4: 'Bad review from friends/relatives after about buyer.',
    },
};

const PAYMENT_STATUS = {
    ALL: 'ALL',
    PENDING: 'PENDING',
    PAID: 'PAID',
    CANCELLED: 'CANCELLED',
};

const CREATED_BY = {
    OHFOUND: 'OHFOUND',
    SUPPLIER: PROFILE_TYPES.SUPPLIER,
};

const CATEGORY_TYPES = {
    FRUITS_OR_VEGETABLES: 'FRUITS_OR_VEGETABLES',
    GROCERY_OR_COSMETICS: 'GROCERY_OR_COSMETICS',
    BAKERY_OR_DAIRY: 'BAKERY_OR_DAIRY',
    FOOD: 'FOOD',
    TEST_CAT: 'TEST_CAT',
};

const SUB_CATEGORY_TYPES = {
    FRUITS_OR_VEGETABLES: 'FRUITS_OR_VEGETABLES',
    BABY_CARE: 'BABY_CARE',
    BEAUTY_HYGIENE: 'BEAUTY_HYGIENE',
    BEVERAGES: 'BEVERAGES',
    CLEANING_HOUSEHOLDS: 'CLEANING_HOUSEHOLDS',
    FOODGRAINS_OIL_MASALA: 'FOODGRAINS_OIL_MASALA',
    GOURMET_WORLD_FOOD: 'GOURMET_WORLD_FOOD',
    KITCHEN_GARDEN_PETS: 'KITCHEN_GARDEN_PETS',
    SNACKS_BRANDED_FOODS: 'SNACKS_BRANDED_FOODS',
    BAKERY_OR_DAIRY: 'BAKERY_OR_DAIRY',
    EGGS: 'EGGS',
    CHAAT: 'CHAAT',
    CHINESE: 'CHINESE',
    CONTINENTAL: 'CONTINENTAL',
    NAMKEEN: 'NAMKEEN',
    SNACKS: 'SNACKS',
    SOUTH_INDIAN: 'SOUTH_INDIAN',
    SWEETS: 'SWEETS',
    PIZZA: 'PIZZA',
    ACCOMPANIMENTS: 'ACCOMPANIMENTS',
    STARTERS: 'STARTERS',
    BEVERAGES: 'BEVERAGES',
    BREADS: 'BREADS',
    CAKES: 'CAKES',
    CONTINENTAL: 'CONTINENTAL',
    DESSERT: 'DESSERT',
    MAIN_COURSE: 'MAIN_COURSE',
    RICE_BIRYANI: 'RICE_BIRYANI',
    SHAKES: 'SHAKES',
    TEST_SUB_CAT: 'TEST_SUB_CAT',
};

const CATEGORY_TYPES_META = {
    [CATEGORY_TYPES.GROCERY_OR_COSMETICS]: {
        key: CATEGORY_TYPES.GROCERY_OR_COSMETICS,
        label: 'Grocery & Cosmetic',
        available: true,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/grocery.png?alt=media',
    },
    [CATEGORY_TYPES.FRUITS_OR_VEGETABLES]: {
        available: true,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/fruit_vegetables_trans.png?alt=media',
        key: CATEGORY_TYPES.FRUITS_OR_VEGETABLES,
        label: 'Fruits & Vegetables',
    },
    [CATEGORY_TYPES.BAKERY_OR_DAIRY]: {
        key: CATEGORY_TYPES.BAKERY_OR_DAIRY,
        label: 'Bakery, Cakes, Dairy & Eggs',
        available: true,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/dairy.jpeg?alt=media',
    },
    [CATEGORY_TYPES.FOOD]: {
        key: CATEGORY_TYPES.FOOD,
        label: 'Food, Sweets & Snacks',
        available: true,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/food.jpeg?alt=media',
    },
    [CATEGORY_TYPES.TEST_CAT]: {
        key: CATEGORY_TYPES.TEST_CAT,
        label: 'Test',
        available: false,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/grocery.png?alt=media',
    },
};

const SUB_CATEGORY_TYPES_META = {
    [SUB_CATEGORY_TYPES.BABY_CARE]: {
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/baby-care.png?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.BABY_CARE,
        label: 'Baby Care',
        parent: CATEGORY_TYPES.GROCERY_OR_COSMETICS,
    },
    [SUB_CATEGORY_TYPES.BAKERY_OR_DAIRY]: {
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/dairy.jpeg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.BAKERY_OR_DAIRY,
        label: 'Bakery, Cakes & Dairy',
        parent: CATEGORY_TYPES.BAKERY_OR_DAIRY,
    },
    [SUB_CATEGORY_TYPES.BEAUTY_HYGIENE]: {
        key: SUB_CATEGORY_TYPES.BEAUTY_HYGIENE,
        label: 'Beauty & Hygiene',
        parent: CATEGORY_TYPES.GROCERY_OR_COSMETICS,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/beauty_heigine.png?alt=media',
        available: true,
    },
    [SUB_CATEGORY_TYPES.BEVERAGES]: {
        label: 'Beverages',
        parent: CATEGORY_TYPES.GROCERY_OR_COSMETICS,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/beverages.png?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.BEVERAGES,
    },
    [SUB_CATEGORY_TYPES.CLEANING_HOUSEHOLDS]: {
        label: 'Cleaning & Household',
        parent: CATEGORY_TYPES.GROCERY_OR_COSMETICS,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/cleaning.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.CLEANING_HOUSEHOLDS,
    },
    [SUB_CATEGORY_TYPES.EGGS]: {
        label: 'Eggs',
        parent: CATEGORY_TYPES.BAKERY_OR_DAIRY,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/eggs.jpeg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.EGGS,
    },
    [SUB_CATEGORY_TYPES.FOODGRAINS_OIL_MASALA]: {
        label: 'Foodgrains, Oil & Masala',
        parent: CATEGORY_TYPES.GROCERY_OR_COSMETICS,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/FoodgrainsOilMasala.png?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.FOODGRAINS_OIL_MASALA,
    },
    [SUB_CATEGORY_TYPES.FRUITS_OR_VEGETABLES]: {
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/fruit_vegetables_trans.png?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.FRUITS_OR_VEGETABLES,
        label: 'Fruits & Vegetables',
        parent: CATEGORY_TYPES.FRUITS_OR_VEGETABLES,
    },
    [SUB_CATEGORY_TYPES.GOURMET_WORLD_FOOD]: {
        label: 'Gourmet & World Food',
        parent: CATEGORY_TYPES.GROCERY_OR_COSMETICS,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/gourmet.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.GOURMET_WORLD_FOOD,
    },
    [SUB_CATEGORY_TYPES.SNACKS_BRANDED_FOODS]: {
        label: 'Snacks & Branded Foods',
        parent: CATEGORY_TYPES.GROCERY_OR_COSMETICS,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/snacks.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.SNACKS_BRANDED_FOODS,
    },
    [SUB_CATEGORY_TYPES.CHAAT]: {
        label: 'Chaat',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/Bhallapapdichaat.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.CHAAT,
    },
    [SUB_CATEGORY_TYPES.CHINESE]: {
        label: 'Chinese',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/ChilliPaneerGravy.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.CHINESE,
    },
    [SUB_CATEGORY_TYPES.CONTINENTAL]: {
        label: 'Continental',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/VegBurger.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.CONTINENTAL,
    },
    [SUB_CATEGORY_TYPES.NAMKEEN]: {
        label: 'Namkeen',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/namak.pare.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.NAMKEEN,
    },
    [SUB_CATEGORY_TYPES.SNACKS]: {
        label: 'Snacks',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/RajKachori.JPG?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.SNACKS,
    },
    [SUB_CATEGORY_TYPES.SOUTH_INDIAN]: {
        label: 'South India',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/masala-dosa.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.SOUTH_INDIAN,
    },
    [SUB_CATEGORY_TYPES.SWEETS]: {
        label: 'Sweets',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/Kaju-Katli.png?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.SWEETS,
    },
    [SUB_CATEGORY_TYPES.PIZZA]: {
        label: 'Pizza',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.PIZZA,
    },
    [SUB_CATEGORY_TYPES.ACCOMPANIMENTS]: {
        label: 'Accompaniments',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.ACCOMPANIMENTS,
    },
    [SUB_CATEGORY_TYPES.STARTERS]: {
        label: 'Starters',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.STARTERS,
    },
    [SUB_CATEGORY_TYPES.BEVERAGES]: {
        label: 'Beverages',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.BEVERAGES,
    },
    [SUB_CATEGORY_TYPES.BREADS]: {
        label: 'Breads',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.BREADS,
    },
    [SUB_CATEGORY_TYPES.CAKES]: {
        label: 'Cakes',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.CAKES,
    },
    [SUB_CATEGORY_TYPES.CONTINENTAL]: {
        label: 'Continental',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.CONTINENTAL,
    },
    [SUB_CATEGORY_TYPES.DESSERT]: {
        label: 'Dessert',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.DESSERT,
    },
    [SUB_CATEGORY_TYPES.MAIN_COURSE]: {
        label: 'Main Course',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.MAIN_COURSE,
    },
    [SUB_CATEGORY_TYPES.RICE_BIRYANI]: {
        label: 'Rice & Biryani',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.RICE_BIRYANI,
    },
    [SUB_CATEGORY_TYPES.SHAKES]: {
        label: 'Shakes',
        parent: CATEGORY_TYPES.FOOD,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/MushroomCapsicumPizza.jpg?alt=media',
        available: true,
        key: SUB_CATEGORY_TYPES.SHAKES,
    },
    [SUB_CATEGORY_TYPES.TEST_SUB_CAT]: {
        label: 'Test',
        parent: CATEGORY_TYPES.TEST_CAT,
        image: 'https://firebasestorage.googleapis.com/v0/b/ohfound.appspot.com/o/snacks.jpg?alt=media',
        available: false,
        key: SUB_CATEGORY_TYPES.TEST_SUB_CAT,
    },
};

const CURRENCIES = {
    INR: 'INR',
};

const AVAILABILITY = {
    YES: 'YES',
    NO: 'NO',
};

const DURATION_UNITS = {
    MINUTES: 'MINUTES',
    HOURS: 'HOURS',
    DAYS: 'DAYS',
};

const PRODUCT_TYPE = {
    'veg': 'veg',
    'non-veg': 'non-veg',
};

module.exports = {
    COLORS,
    DATE_FILTERS_TYPES,
    DATE_FILTERS,
    PROFILE_TYPES,
    PROFILE_TYPES_META,
    OFFER_FOR,
    OFFER_FOR_META,
    OFFER_STATUS,
    OFFER_STATUS_META,
    PAYMENT_MODES,
    ORDER_STATUS,
    ACTIVE_ORDER_STATUS,
    ORDER_STATUS_META,
    ENQUIRIES_STATUS,
    ENQUIRIES_STATUS_META,
    REASON_FOR_CANCELLATIONS,
    PAYMENT_STATUS,
    CREATED_BY,
    CATEGORY_TYPES,
    CATEGORY_TYPES_META,
    SUB_CATEGORY_TYPES,
    SUB_CATEGORY_TYPES_META,
    CURRENCIES,
    AVAILABILITY,
    DURATION_UNITS,
    PRODUCT_TYPE,
};
