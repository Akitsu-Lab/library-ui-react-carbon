import "./App.css";
import "./index.scss";
import { Button } from "@carbon/react";
import { Search, Notification, Switcher } from "@carbon/icons-react";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  Theme,
} from "@carbon/react";

function App() {
  return (
    <div className="App">
      <Theme theme="g100">
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="Akitsu-Lab">
            [Platform]
          </HeaderName>
          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
              <Search />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
              <Notification />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
              <Switcher />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </Theme>
      <header className="App-header">
        <div>
          Hello Carbon! Well, not quite yet. This is the starting point for the
          Carbon tutorial.
        </div>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
