import { useMailStore } from '@/store/mail.store';
import { Box, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const {search,setSearch} = useMailStore()
    const [debouncedValue] = useDebounce(search, 2000);
    const searchParams  = useSearchParams()
    const pathname = usePathname();
    const router = useRouter();
    const handleSearchUrl = () => {
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        const value = debouncedValue;
        if (!value) {
        current.delete("search");
        } else {
        current.set("search", debouncedValue);
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    }
    useEffect(() => {
        handleSearchUrl()
    },[debouncedValue])

    return (
        <Box>
            <TextField value={search} onChange={(e) => setSearch(e.target.value)} placeholder='חיפוש' variant="outlined" />
        </Box>
    );
};

export default Filter;