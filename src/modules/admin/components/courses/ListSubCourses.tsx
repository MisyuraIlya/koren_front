'use client'
import React, { FC, useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import Image from 'next/image';
import SubCourseCard from './SubCourseCard';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAdminCoursesProvider } from '../../provider/AdminCoursesProvider';
import SearchInput from '@/components/SearchInput';

interface SubCourseCardProps {
    items: ICourse[] | []
    title: string
}

type Inputs = {
  name: string;
};

const ListSubCourses:FC<SubCourseCardProps> = ({items,title}) => {

    const [loading, setLoading] = useState(false)
    const [changedArray, setChangedArray] = useState<ICourse[]>([]);
    const [filterArr, setFilterArr] = useState<ICourse[]>([]);
    const { register: registerAdd, handleSubmit: handleAdd } = useForm<Inputs>();
    const [activeAdd, setActiveAdd] = useState(false);
    const [filterData, setFilterData] = useState('');
    const {lvl4Id} = useAdminCoursesProvider()
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
    
        const newItems = data
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
    
        if (filterArr.length > 0) {
          const updatedFilterArr = newItems.map((item, index) => ({
            ...item,
            orden: index + 1,
          }));
          setFilterArr(updatedFilterArr);
        } else {
          const updatedData = newItems.map((item, index) => ({
            ...item,
            orden: index + 1,
          }));
          setChangedArray(updatedData)
    
          setTimeout(() => {
            updatedData.map((item) => {
              CourseMethods.silentUpdate(item.id, item.name, item.grade, item.level, item.published, item.orden);
            })
      
          },500)
    
    
        }
    };

    const onSubmitAdd: SubmitHandler<Inputs> = (data) => {
      //TODO
      // CourseMethods.createFunction(data.name, level, parentId);
      setChangedArray([])
      setActiveAdd(false)
      clearArray()
    };

    
    const clearArray = () => {
      setChangedArray([])
    }

    useEffect(() => {
      if (filterData) {
        let filter = (changedArray.length > 0 ? changedArray : data).filter((item) => item.name.includes(filterData));
        setFilterArr(filter);
      } else {
        setFilterArr([]);
      }
    }, [items, filterData,changedArray]);

      
    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <div className='border border-black/20 rounded-md'>
          <div className=''>
            <div className='flex w-full border-b-2 border-black/10 py-2'>
              <div className='flex w-full m-auto px-4'>
                <p>{title}</p>
              </div>
            </div>
            <div className='flex py-4 m-auto px-4 gap-4'>
              <div
                style={{ backgroundColor: '#31B0F2' }}
                className='w-11 h-10 rounded-lg text-center items-center justify-center cursor-pointer  flex'
                onClick={() => setActiveAdd(!activeAdd)}
              >
                <Image src={'/images/+.svg'} width={20} height={20} alt='add' priority />
              </div>
              <div className='w-full flex justify-end'>
                <SearchInput placeholder='חיפוש' value={filterData} onChange={(e) => setFilterData(e.target.value)} />
              </div>
            </div>
            {activeAdd && (
              !lvl4Id ?
  
              <div className='m-auto px-4'>
                <div className='flex'>
                  <p>שם ה{title}</p>
                </div>
                <form onSubmit={handleAdd(onSubmitAdd)} className='grid grid-cols-8 gap-4'>
                  <div className='col-span-6'>
                    <input {...registerAdd('name')} className='border border-primary/30 rounded-md w-full px-2 py-2' placeholder='שם' />
                  </div>
                  <div className='col-span-2'>
                    <button className='bg-green/40  w-full rounded-md text-white  hover:bg-green/70 py-2' style={{ backgroundColor: '#31B0F2' }}>
                      שמירה
                    </button>
                  </div>
                </form>
              </div>
  
              :
              <div className='m-auto px-4'>
              <div className='flex py-2'>
                <p>שם התרגיל</p>
              </div>
              <form onSubmit={handleAdd(onSubmitAdd)} className='grid grid-cols-8 gap-4'>
                <div className='col-span-12'>
                  <input {...registerAdd('name')} className='border border-primary/30 rounded-md w-full px-2 py-2' placeholder='שם' />
                </div>
                <div className='col-span-12'>
                  <button className='bg-green/40  w-full rounded-md text-white  hover:bg-green/70 py-2' style={{ backgroundColor: '#31B0F2' }}>
                    בניית תרגיל
                  </button>
                </div>
              </form>
            </div>
            )}
              {loading ? 
                <div className='myCenter p-12'>
                    <p>loading...</p>
                </div> 
                :
                <div className='overflow-auto py-2'>
                  <Droppable droppableId='droppable'>
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {(changedArray.length > 0 ? (filterArr.length > 0 ? filterArr : changedArray) : (filterArr.length > 0 ? filterArr : items)).map((item, index) => (
                          <Draggable key={item.id} draggableId={item?.id?.toString() ?? ''} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <SubCourseCard item={item}  key={index}/>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              }
          </div>
        </div>
      </DragDropContext>
    );
};

export default ListSubCourses;