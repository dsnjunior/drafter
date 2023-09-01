import type React from "react";
import { LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserMenuProps {
  avatarUrl: string | null;
  name: string;
}

export const UserMenu: React.FC<UserMenuProps> = ({ avatarUrl, name }) => {
  const nameInitials = (() => {
    const names = name.split(" ");
    if (names.length > 1) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }

    if (names.length) {
      return names[0][0].toUpperCase();
    }

    return "--";
  })();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={avatarUrl ?? ""} />
          <AvatarFallback>{nameInitials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div hx-boost="true">
          <DropdownMenuItem asChild className="cursor-pointer">
            <a href="/auth/logout">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </a>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
