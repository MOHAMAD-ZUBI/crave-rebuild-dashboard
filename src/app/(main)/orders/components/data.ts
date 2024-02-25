const statusOptions: any = [
  { name: "new", uid: "new" },
  { name: "preparing", uid: "preparing" },
  { name: "on Way", uid: "on Way" },
  { name: "handed", uid: "handed" },
  { name: "canceled", uid: "canceled" },
];

const columns = [
  { name: "NO", uid: "no" },
  { name: "TOTAL", uid: "total" },
  { name: "PAYMENT METHOD", uid: "PaymentMethod" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const orders = [
  {
    id: 1,
    no: "#1",
    total: "100TL",
    PaymentMethod: "Card",
    status: "new",
    age: "29",
  },
  {
    id: 2,
    no: "#2",
    total: "250TL",
    PaymentMethod: "Card",
    status: "preparing",
    age: "29",
  },
  {
    id: 3,
    no: "#3",
    total: "200TL",
    PaymentMethod: "Card",
    status: "onWay",
    age: "29",
  },
  {
    id: 4,
    no: "#4",
    total: "200TL",
    PaymentMethod: "Card",
    status: "handed",
    age: "29",
  },
  {
    id: 5,
    no: "#5",
    total: "600TL",
    PaymentMethod: "Card",
    status: "canceled",
    age: "29",
  },
];

export { columns, orders, statusOptions };
