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
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>שם התמיד</TableCell>
                    <TableCell>נושא</TableCell>
                    <TableCell>תרגיל</TableCell>
                    <TableCell>משקל</TableCell>
                    <TableCell>ציון סופי</TableCell>
                    <TableCell>ציון משוכלל לפי יחיות</TableCell>
                    <TableCell>ציון משוכלל כל יחידות</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {mock.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {row.student}
                    </TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.exercise}</TableCell>
                    <TableCell>{row.precent}</TableCell>
                    <TableCell>{row.grade}</TableCell>
                    <TableCell>{row.grade2}</TableCell>
                    <TableCell>{row.grade3}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
};

export default GradeTable;