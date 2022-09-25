import React from "react";
import {
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem
} from "@carbon/react";

export const SideBar = () => (
    <div className="container">
        <>
            <SideNav
                isFixedNav
                expanded={true} //ここをfalseにすると非表示
                isChildOfHeader={false}
                aria-label="Side navigation"
            >
                <SideNavItems>
                    <SideNavMenu title="L0 menu">
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="L0 menu">
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="L0 menu">
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavLink href="javascript:void(0)">L0 link</SideNavLink>
                    <SideNavLink href="javascript:void(0)">L0 link</SideNavLink>
                </SideNavItems>
            </SideNav>
        </>
    </div>
);

