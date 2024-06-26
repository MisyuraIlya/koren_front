'use client'
import { useStatistic } from '@/store/useStatistic';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const mock = [
    {id:1, student:'הוטמזקין עדן', category:'משימת פתיחה - צוותי חשיבה', exercise:'חלק א', precent:'40%', grade:'81', grade2:'81', grade3:'א'},
    {id:1, student:'הוטמזקין עדן', category:'משימת פתיחה - צוותי חשיבה', exercise:'חלק א', precent:'40%', grade:'81', grade2:'81', grade3:'א'},
    {id:1, student:'הוטמזקין עדן', category:'משימת פתיחה - צוותי חשיבה', exercise:'חלק א', precent:'40%', grade:'81', grade2:'81', grade3:'א'},
    {id:1, student:'הוטמזקין עדן', category:'משימת פתיחה - צוותי חשיבה', exercise:'חלק א', precent:'40%', grade:'81', grade2:'81', grade3:'א'},
    {id:1, student:'הוטמזקין עדן', category:'משימת פתיחה - צוותי חשיבה', exercise:'חלק א', precent:'40%', grade:'81', grade2:'81', grade3:'א'},
    {id:1, student:'הוטמזקין עדן', category:'משימת פתיחה - צוותי חשיבה', exercise:'חלק א', precent:'40%', grade:'81', grade2:'81', grade3:'א'},
    {id:1, student:'הוטמזקין עדן', category:'משימת פתיחה - צוותי חשיבה', exercise:'חלק א', precent:'40%', grade:'81', grade2:'81', grade3:'א'},
    {id:1, student:'הוטמזקין עדן', category:'משימת פתיחה - צוותי חשיבה', exercise:'חלק א', precent:'40%', grade:'81', grade2:'81', grade3:'א'},
    {id:1, student:'הוטמזקין עדן', category:'משימת פתיחה - צוותי חשיבה', exercise:'חלק א', precent:'40%', grade:'81', grade2:'81', grade3:'א'},
]

const GradeTable = () => {
    const {data} = useStatistic()

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    {data?.column?.map((col) => 
                        <TableCell>{col}</TableCell>
                    )}
                </TableRow>
            </TableHead>
            <TableBody>
                {data?.rows?.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {row?.name}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
};

export default GradeTable;