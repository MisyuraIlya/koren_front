'use client'
import useDataMail from '@/hooks/useDataMail';
import { Box, Pagination } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from 'react';

const PaginationMailer: React.FC = () => {
    const { data } = useDataMail();
    const searchParams  = useSearchParams()
    const pathname = usePathname();
    const router = useRouter();

    const page = searchParams.get('page') ?? '1'

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        const value = page;
        if (!value) {
        current.delete("page");
        } else {
        current.set("page", page.toString());
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    };

    return (
        <Box sx={{marginTop:'20px'}}>
            <Pagination
                count={data?.totalPages || 1}
                onChange={handleChange}
                page={+page || 1}
            />
        </Box>
    );
};

export default PaginationMailer;
