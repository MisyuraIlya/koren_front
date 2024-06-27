'use client'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useStatistic } from '@/store/useStatistic'; 
import { useRouter } from 'next/navigation';
const GradeTable = () => {
    const { data } = useStatistic(); 
    const router = useRouter()
    const handleColorByGrade = (grade: number) => {
        if(grade >= 1 && grade <= 54) {
            return '#EBAF34'
        } else if(grade >= 55 && grade <= 65) {
            return '#F6E1A2'
        } else if(grade >= 65 && grade <= 74) {
            return '#94B2FF'
        } else if(grade >= 75 && grade <= 85) {
            return '#DFE9FF'
        } else if(grade >= 85 && grade <= 94) {
            return '#CDFEE4'
        } else if(grade >= 95 && grade <= 100) {
            return '#6DEAD3'
        } else {
            return 'white'
        }
    }

    const handleRoute = (link:string) => {
        if(link) {
            router.push(link)   
        }
    }

    return (
        <TableContainer component={Paper} className='scrollContainer'>
            <Table sx={{ minWidth: 650 }} aria-label="grade table">
                <TableHead>
                    <TableRow>
                        {data?.column?.map((col, index) => (
                            <TableCell
                                sx={{
                                    minWidth: '190px',
                                    position: index === 0 ? 'sticky' : 'static',
                                    left: index === 0 ? 0 : 'auto',
                                    background: index === 0 ? 'white' : 'none',
                                    zIndex: index === 0 ? 1 : 'auto',
                                    backgroundColor:'#D8EEFF',
                                }}
                                key={index}
                            >
                                {col}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.rows?.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row?.result?.map((cell, cellIndex) => (
                                <TableCell
                                    sx={{
                                        position: cellIndex === 0 ? 'sticky' : 'static',
                                        left: cellIndex === 0 ? 0 : 'auto',
                                        background: cellIndex === 0 ? 'white' : 'none',
                                        zIndex: cellIndex === 0 ? 1 : 'auto',
                                        backgroundColor: cell.isExercise ? handleColorByGrade(cell.teacherGrade) : '#F0FBFF',  
                                        cursor: cell?.link ? 'pointer' : 'auto'
                                    }}
                                    key={cellIndex}
                                    onClick={() => handleRoute(cell.link) }
                                >
                                    {cell.value !== undefined ? cell.value : ''}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default GradeTable;
