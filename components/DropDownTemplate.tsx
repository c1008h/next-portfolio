import React, { useState, useMemo } from 'react'
import { Button, Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem } from "@nextui-org/react";
import { Selection } from "@react-types/shared";

export default function DropDownTemplate() {
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["all"]));

    const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]);

    const handleSelectionChange = (selection: Selection) => {
        let newKeys = new Set<string>();

        setSelectedKeys(newKeys);
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button 
                    variant="bordered" 
                    className="capitalize"
                >
                    {selectedValue || "Select Options"} 
                </Button>
            </DropdownTrigger>
            <DropdownMenu 
                aria-label="Multiple selection example"
                variant="flat"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={handleSelectionChange}
            >
                <DropdownItem key="all">All</DropdownItem>
                <DropdownItem key="web">Web</DropdownItem>
                <DropdownItem key="mobile">Mobile</DropdownItem>
                <DropdownItem key="desktop">Desktop</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
