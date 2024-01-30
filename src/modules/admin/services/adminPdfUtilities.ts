
import axios, { AxiosResponse } from 'axios';

export const PdfUtilitiesService = {
    async create(courseId:number | string, obj: ICreatePdfUtility) {
 
        const response: AxiosResponse<IPdfUtilities> = await axios.post(`http://localhost:4001/pdf-utilities/${courseId}`, obj);
        return response.data;
    },

    async delete(pdfId: string | number) {
        const response: AxiosResponse<void> = await axios.delete(`http://localhost:4001/pdf-utilities/${pdfId}`);
        return response.data;
    },

    async sortabelPdfUtilities(data: IPdfUtilities[]){
        const response = await axios.put<any>(`http://localhost:4001/pdf-utilities/sortable`,data)
        return response.data
    }

}