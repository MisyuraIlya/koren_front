// import React, { FC, useRef, useState, ChangeEvent } from 'react';
// import { ISecondModuleSubExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
// import { ExercisesService } from '@/services/exercises/Exercises';
// import { onErrorAlert } from '@/utils/sweetAlert';
// import { getPdfId, getPdfValue } from '../helpers/pdfModuleHelper';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { useExercise } from '@/providers/exercise/ExerciseProvider';

// type PdfModuleProps = {
//   data: ISecondModuleSubExercises[];
// };

// type PdfType = {
//   pdfLink: string;
// };

// const PdfModule: FC<PdfModuleProps> = ({ data }) => {
//   const fileInputRef = useRef<HTMLInputElement | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
//   const { register, handleSubmit, reset, formState: { errors } } = useForm<PdfType>();

//   const uploadPdf = async (event: ChangeEvent<HTMLInputElement>) => {
//     const id = getPdfId(data)
//     if(id) {
//         const file = event.target.files?.[0];
//         if(file) {
//             setSelectedFile(file);
//             ExercisesService.createImage(id, file)
//         }
//     } else {
//         onErrorAlert('ניתן קודם לשמור את הקובץ','')
//     }


//     }

//   const pdfLink = getPdfValue(data);

//   return (
//     <div className={`col-span-12`}>
//       <div className={`flex items-center justify-center`}>
//         {selectedFile || pdfLink ? (
//           <div className='h-full flex justify-center items-center bg-white relative'>
//             <div className='cursor-pointer' onClick={() => { fileInputRef.current?.click(); }}>
//               {selectedFile ? (
//                 // Display uploaded PDF using iframe
//                 <iframe title='uploaded-pdf' src={URL.createObjectURL(selectedFile)} width='900px' height='500px' />
//               ) : (
//                 // Display PDF link using iframe
//                 <iframe title='pdf-link' src={`http://3.74.228.194:4000/${pdfLink}`} width='900px' height='500px' />
//               )}
//               <input id='pdfInput' ref={fileInputRef} type='file' onChange={uploadPdf} className='hidden' />
//             </div>
//           </div>
//         ) : (
//           <div className='border-8 border-mainExerciseBg border-dashed h-full flex justify-center items-center bg-white'>
//             <div className='cursor-pointer' onClick={() => { fileInputRef.current?.click(); }}>
//               <img src='/images/upload.svg' alt='upload image' width={125} height={125} />
//               <input id='pdfInput' ref={fileInputRef} type='file' onChange={uploadPdf} className='hidden' />
//               <h4>העלאת קובץ PDF</h4>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PdfModule;
