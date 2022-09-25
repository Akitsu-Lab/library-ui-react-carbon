import React, { useState } from "react";
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
  SideNav,
  SideNavMenu,
  SideNavItems,
  SideNavMenuItem,
  SideNavLink
} from "@carbon/react";

export const HeadBar = () => {

  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const onClickSideNavExpand = () => setIsSideNavExpanded(!isSideNavExpanded);
  return (
    <Theme theme="g100">
      <Header aria-label="IBM Platform Name">

        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
          isCollapsible
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

      <SideNav
        aria-label="Side navigation"
        isRail
        expanded={isSideNavExpanded}
        onOverlayClick={onClickSideNavExpand}>
        <SideNavItems>
          <SideNavMenu title="Category title">
            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
              Link
            </SideNavMenuItem>
            <SideNavLink href="https://www.carbondesignsystem.com/">
              Link
            </SideNavLink>
          </SideNavMenu>
          <SideNavMenu title="Category title2">
            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
              Link
            </SideNavMenuItem>
            <SideNavLink href="https://www.carbondesignsystem.com/">
              Link
            </SideNavLink>
          </SideNavMenu>
        </SideNavItems>

      </SideNav>
    </Theme>
  );
};
