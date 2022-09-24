import React from "react";
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
  SkipToContent,
  HeaderMenuButton,
} from "@carbon/react";

export const HeadBar = ({ isSideNavExpanded, onClickSideNavExpand }) => {
  return (
    <Theme theme="g100">
      <Header aria-label="IBM Platform Name">

        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          isCollapsible
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />

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
          <HeaderGlobalAction aria-label="Search" onClick={() => { }}>
            <Search />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Notifications" onClick={() => { }}>
            <Notification />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" onClick={() => { }}>
            <Switcher />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </Theme>
  );
};
