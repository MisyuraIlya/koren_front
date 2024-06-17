'use client'
import { Box, Divider } from '@mui/material';
import React from 'react';
import Card from './Card';
import useDataMail from '@/hooks/useDataMail';

const arr = [
    {
        id:1,
        title:'שרי הוצאה לאור',
        description:'עדכון - שלום לכולם. בשעה טובה המערכת עודכנה',
        date:'asd',
    },
    {
        id:1,
        title:'שרי הוצאה לאור',
        description:'עדכון - שלום לכולם. בשעה טובה המערכת עודכנה',
        date:'asd',
    },
    {
        id:1,
        title:'שרי הוצאה לאור',
        description:'עדכון - שלום לכולם. בשעה טובה המערכת עודכנה',
        date:'asd',
    },
    {
        id:1,
        title:'שרי הוצאה לאור',
        description:'עדכון - שלום לכולם. בשעה טובה המערכת עודכנה',
        date:'asd',
    },
]

const List = () => {
    const {data} = useDataMail()
    console.log('data',data)
    return (
        <Box>
            {data?.map((item,key) =>
                <Box key={key}>
                    <Card item={item} />
                    <Divider/>
                </Box> 
            )}
        </Box>

    );
};

export default List;