import { Analytics } from "./components/Analytics";
import OrdersTable from "./orders/components/OrdersTable";

export default function Home() {
  return (
    <main>
      <Analytics />
      <OrdersTable />
    </main>
  );
}
