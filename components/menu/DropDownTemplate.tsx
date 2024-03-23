import React, { useState, useMemo } from 'react'
import { Button, Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem } from "@nextui-org/react";
import { Selection } from "@react-types/shared";
import { ButtonTemplate } from '@/components'

interface DropDownTemplateProps {
    btnStyle: string;
}

export default function DropDownTemplate({ btnStyle }: DropDownTemplateProps) {
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["all"]));

    const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]);

    const handleSelectionChange = (selection: Selection) => {
        let newKeys = new Set<string>();

        setSelectedKeys(newKeys);
    };
    const baseClasses = "capitalize";
    const mergedClasses = `${baseClasses} ${btnStyle || ''}`.trim();


    return (
        <Dropdown>
            <DropdownTrigger>
                <Button 
                    variant="bordered" 
                    className={mergedClasses}
                >
                    {selectedValue || "Select Options"} 
                </Button>
                {/* <ButtonTemplate btnStyle={btnStyle} title={selectedValue || "Select Options"}/> */}
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
