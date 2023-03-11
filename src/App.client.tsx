import { FC, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function App() {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <div>Hello, world!</div>
      </ErrorBoundary>
    </Suspense>
  );
}

const ErrorComponent: FC<{ error: Error }> = ({ error }) => {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{error.stack}</pre>
    </div>
  );
};
