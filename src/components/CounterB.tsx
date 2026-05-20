//  📁 src/components/CounterB.tsx

import { useCounterStore } from "../stores/counterStore";

export default function CounterB() {
  const count = useCounterStore((s) => s.count);

  return (
    <div>
      <h4>Counter B</h4>
      <p>{count}</p>
    </div>
  );
}