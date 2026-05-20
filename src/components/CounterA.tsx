//  📁 src/components/ CounterA.tsx

import { useCounterStore } from "../stores/counterStore";

export default function CounterA() {
  const count = useCounterStore((s) => s.count);
  const inc = useCounterStore((s) => s.inc);

  return (
    <div>
      <h4>Counter A</h4>
      <p>{count}</p>
      <button onClick={inc}>+1</button>
    </div>
  );
}