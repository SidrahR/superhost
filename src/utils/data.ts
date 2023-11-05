import { StaticImageData } from "next/image";
import sales from "../../public/page_icons/sales.png";
import employee from "../../public/page_icons/employee.png";
import food from "../../public/page_icons/food.png";
import delivery from "../../public/page_icons/delivery.png";
import products from "../../public/page_icons/products.png";
import payments from "../../public/page_icons/payment.png";
import modifiers from "../../public/page_icons/modifiers.png";
import seatings from "../../public/page_icons/seating.png";
import bookings from "../../public/page_icons/booking.png";
import reviews from "../../public/page_icons/reviews.png";
import loyalty from "../../public/page_icons/loyalty.png";
import report from "../../public/page_icons/report.png";

export interface PagesData {
  id: number;
  text: string;
  image: StaticImageData;
  href: string;
}
export const pages_data: PagesData[] = [
  {
    id: 1,
    text: "Sales",
    image: sales,
    href: "/sales",
  },
  {
    id: 2,
    text: "Employee",
    image: employee,
    href: "/employee",
  },
  {
    id: 3,
    text: "Food Cost",
    image: food,
    href: "/foodcost",
  },

  {
    id: 4,
    text: "Delivery",
    image: delivery,
    href: "/delivery",
  },
  {
    id: 5,
    text: "Products",
    image: products,
    href: "/products",
  },
  {
    id: 6,
    text: "Payments",
    image: payments,
    href: "/payments",
  },
  {
    id: 7,
    text: "Modifiers",
    image: modifiers,
    href: "/modifiers",
  },
  {
    id: 8,
    text: "Seatings",
    image: seatings,
    href: "/settings",
  },
  {
    id: 9,
    text: "Bookings",
    image: bookings,
    href: "/bookings",
  },
  {
    id: 10,
    text: "Reviews",
    image: reviews,
    href: "/reviews",
  },
  {
    id: 11,
    text: "Loyalty",
    image: loyalty,
    href: "/loyalty",
  },
  {
    id: 12,
    text: "Day Report",
    image: report,
    href: "/dayreport",
  },
  {
    id: 13,
    text: "Week Report",
    image: report,
    href: "/weekreport",
  },
  {
    id: 14,
    text: "Month Report",
    image: report,
    href: "/monthreport",
  },
];
