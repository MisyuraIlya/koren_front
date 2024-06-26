import React, { useState } from 'react';
import { Box, IconButton, List, ListItem} from '@mui/material';
import MinCard from './MinCard';
import BigCard from './BigCard';
import SecondSideBar from './SecondSideBar';
import CloseIcon from '@mui/icons-material/Close';
import { useCourses } from '@/provider/CourseProvider';
import Image from 'next/image';
import { themeColors } from '@/styles/mui';

const redBoxStyles = {
    width: '300px',
    height: '100vh',
    background: 'white',
    zIndex:'1',
    position: 'fixed',
    transition: 'left 0.3s ease-in-out',
    boxShadow: '-8px 0px 20px 0px rgba(0, 0, 0, 0.12)',
};

const SideBar = ({open,setOpen}: {open: boolean, setOpen:(value: boolean) => void}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [courseChoosed, setCourseChoosed] = useState<number>(0)
    const {lvl2IdCourses,setClickedLvl3} = useCourses()

    const handleMiniCard = () => {
        setOpen(true)
        setTimeout(() => {
            setIsOpen(!isOpen)
        },100)
    }

    return (
    <>
        <List 
        sx={{
            height:'85vh',
            zIndex:'100',
            overflow:'auto',
            backgroundImage: 'linear-gradient(267deg, #2E68F7 0%, #45C3F3 109.92%)',
            position:'relative'
        }}
        >
            <ListItem  disablePadding sx={{ display: 'block', px: 2.5}}>
                {!open &&
                <>
                    {lvl2IdCourses?.children?.map((item,index) =>
                        <MinCard 
                            key={index}
                            index={index} 
                            item={item}
                            onClick={() => handleMiniCard()}
                        />
                    )}
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Box>
                            <Image src={'/images/videoTeach.png'} width={75} height={75} alt='tech' style={{marginTop:'10px'}}/>
                            <Image src={'/images/support.png'} width={75} height={48} alt='tech' style={{marginTop:'10px'}}/>
                            <Image src={'/images/lisence.png'} width={75} height={48} alt='tech' style={{marginTop:'10px'}}/>
                        </Box>
                    </Box>
                </>
                }
                {open &&
                <>
                    {lvl2IdCourses?.children?.map((item, key) =>
                        <Box
                            key={key}
                            onClick={() => {setIsOpen(!isOpen);setCourseChoosed(item.id!);setClickedLvl3(item.id!)}}
                        >
                            <BigCard item={item} index={key} totalChildren={item.children.length}/>
                        </Box>
                    )}
            

                </>
                }
            </ListItem>
            {open &&
                <Box sx={{ position:'absolute', width:'100%', left:'0', bottom:'0'}}>
                    <Box sx={{display:'flex', gap:'20px', p:'0 20px', mb:'10px'}}>
                        <Image src={'/images/bigLisence.png'} width={120} height={48} alt='tech' />
                        <Image src={'/images/bigVideo.png'} width={120} height={48} alt='tech' />
                    </Box>
                    <Box sx={{bgcolor:themeColors.primary,display:'flex', justifyContent:'right', p:'5px 20px'}}>
                        <Image src={'/images/accesability.svg'} width={40} height={48} alt='tech' />
                    </Box>
                </Box>
            }

        </List>

        {open &&
            <Box
                sx={{
                    ...redBoxStyles,
                    left: !isOpen ? '-300px' : '300px',
                    overflow:'auto',
                }}
            >
                <IconButton onClick={() => setIsOpen(false)}>
                    <CloseIcon/>
                </IconButton>
                <Box sx={{marginTop:'100px'}}>
                    <SecondSideBar courseHovered={courseChoosed}/>
                </Box>
            </Box>
        }

    </>
    );
};

export default SideBar;