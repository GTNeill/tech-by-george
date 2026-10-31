import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import Index from "./pages/index";
import Help from "./pages/help";
import Admin from "./pages/admin";
import { Provider } from "./components/provider";
import { MadeWithRunable } from "./components/made-with-runable";

const Architecture = lazy(() => import("./pages/architecture"));

function App() {
  return (
    <Provider>
      <Suspense fallback={<output className="mx-auto block max-w-6xl px-5 py-20 text-muted-foreground">Loading page…</output>}>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/how-i-can-help" component={Help} />
        <Route path="/architecture" component={Architecture} />
        <Route path="/admin" component={Admin} />
      </Switch>
      </Suspense>
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<MadeWithRunable />}
    </Provider>
  );
}

export default App;
