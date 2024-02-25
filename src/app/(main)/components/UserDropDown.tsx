"use client";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function UserDropDown() {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button isIconOnly>
          <Image
            height={45}
            width={45}
            className="rounded-xl ring-4 ring-white/20"
            src={"/1.jpg"}
            priority
            alt="user"
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
