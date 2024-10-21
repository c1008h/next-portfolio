import React, { useState, useMemo } from 'react'
import { Button, Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem } from "@nextui-org/react";
import { Selection } from "@react-types/shared";
import { ButtonTemplate } from '@/components'

interface DropDownTemplateProps {
    btnStyle: string;
    selectedKeys: Set<string>; 
    onSelectionChange: (selection: Set<string>) => void;
}

export default function DropDownTemplate({ btnStyle, selectedKeys, onSelectionChange }: DropDownTemplateProps) {
    const selectedValue = useMemo(() => {
        if (selectedKeys.has("all")) return "All"; // Prioritize "All" when selected
        return Array.from(selectedKeys).join(", ").replaceAll("_", " ");
    }, [selectedKeys]);

    const handleSelectionChange = (selection: Selection) => {
        const newKeys = new Set(selection as Set<string>);
        if (newKeys.has("all")) {
            onSelectionChange(new Set(["all"]));  // Reset to "All" when it's selected
        } else {
            onSelectionChange(newKeys);  // Update parent state
        }
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
