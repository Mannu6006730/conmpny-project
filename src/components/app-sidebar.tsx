import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Info, 
  HelpCircle, 
  MessageCircle, 
  Gift, 
  FileQuestion, 
  BookOpen,
  X
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "About Us", url: "/about", icon: Info },
  { title: "How It Works", url: "/how-it-works", icon: HelpCircle },
  { title: "Contact Us", url: "/contact", icon: MessageCircle },
  { title: "Buy One Get One", url: "/bogo", icon: Gift },
  { title: "FAQ", url: "/faq", icon: FileQuestion },
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-gift-primary/10 text-gift-primary font-medium border-l-2 border-gift-primary" : "hover:bg-accent/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className="border-r border-border/40">
      <SidebarHeader className="border-b border-border/40 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">SmartPayFlex</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setOpen(false)}
            className="md:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                      onClick={() => setOpen(false)}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}