export const Spinner = ({ active = false }) => (
  <div
    className={["spinner", active && "spinner--active"].join(" ")}
    role="progressbar"
    aria-busy={active ? "true" : "false"}
  />
);
