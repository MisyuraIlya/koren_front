import { styled, Theme, CSSObject } from '@mui/material/styles';
import React, { useState } from 'react';
import { Box, Divider, List, ListItem} from '@mui/material';
import MinCard from './SideBar/MinCard';
import BigCard from './SideBar/BigCard';
import SearchIcon from '@mui/icons-material/Search';
import SearchBigInput from './SideBar/SearchBigInput';
import { useStudentCourses } from '../provider/StudentCoursesProvider';
import SecondSideBar from './SideBar/SecondSideBar';

const redBoxStyles = {
    width: '300px',
    height: '100vh',
    background: 'white',
    zIndex:'1',
    position: 'fixed',
    transition: 'left 0.3s ease-in-out',
    boxShadow: '-8px 0px 20px 0px rgba(0, 0, 0, 0.12)',
};

const SideBar = ({open}: {open: boolean}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [courseHovered, setCourseHovered] = useState<number>(0)
    const {lvl1IdCourses} = useStudentCourses()

    const handleHover = (courseId: number) => {
        setCourseHovered(courseId)
        setIsHovered(true);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };
    return (
    <>
        <List sx={{
            height:'100vh',
            zIndex:'100',
            backgroundImage: 'linear-gradient(267deg, #2E68F7 0%, #45C3F3 109.92%)',
        }}>
            <ListItem  disablePadding sx={{ display: 'block', px: 2.5, }}>
                {!open &&
                <>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'90px'}}>
                        <SearchIcon sx={{fontSize:'50px', color:'white', cursor:'pointer'}}/>
                    </Box>
                    {lvl1IdCourses?.children?.map((item) =>
                        <MinCard type={item.id!.toString()} title={item.name}/>
                    )}
                    
                </>
        
                }
                {open &&
                <>
                    <SearchBigInput/>
        
                        {lvl1IdCourses?.children?.map((item, key) =>
                            <Box
                                key={key}
                                onMouseEnter={() => handleHover(item?.id!)}
                                onMouseLeave={handleHoverEnd}
                            >
                                <BigCard title={item.name} type='פרק' totalChildren={item.children.length}/>
                            </Box>

                        )}
                </>
                }
            </ListItem>

        </List>

        {open &&
            <Box
                sx={{
                    ...redBoxStyles,
                    left: !isHovered ? '-300px' : '300px',
                    overflow:'auto',
                }}
                onMouseEnter={() => handleHover(courseHovered)} 
                onMouseLeave={handleHoverEnd} 
            >
                <Box sx={{marginTop:'100px'}}>
                    <SecondSideBar courseHovered={courseHovered}/>
                </Box>
            </Box>
        }

    </>
    );
};

export default SideBar;