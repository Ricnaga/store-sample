
interface CounterProps
  extends Record<"handleAdd" | "handleSubstract", () => void> {
  counter: number;
  title: 'STATE' | 'RTK' | 'XSTATE'
}

export function Counter({ handleAdd, handleSubstract, counter, title }: CounterProps) {
  return (
    <>
      <h1>With {title}</h1>
      <div style={{ width: "100%", display: "flex" }}>
        <button onClick={handleSubstract}>-</button>
        <h1>{counter}</h1>
        <button onClick={handleAdd}>+</button>
      </div>
    </>
  );
}
