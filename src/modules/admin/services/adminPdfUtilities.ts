
import axios, { AxiosResponse } from 'axios';

const entry = process.env.NEXT_PUBLIC_APP_ENTRYPOINT

export const PdfUtilitiesService = {
    async create(courseId:number | string, obj: ICreatePdfUtility) {
 
        const response: AxiosResponse<IPdfUtilities> = await axios.post(`${entry}/pdf-utilities/${courseId}`, obj);
        return response.data;
    },

    async delete(pdfId: string | number) {
        const response: AxiosResponse<void> = await axios.delete(`${entry}/pdf-utilities/${pdfId}`);
        return response.data;
    },

    async sortabelPdfUtilities(data: IPdfUtilities[]){
        const response = await axios.put<any>(`${entry}/pdf-utilities/sortable`,data)
        return response.data
    }

}