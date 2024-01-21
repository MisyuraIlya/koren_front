export const MainService = {
    async UploadMedia(file: File): Promise<{ path: string }> {
        const formDataObject = new FormData();
        formDataObject.append('file', file);
        const response = await fetch('http://localhost:4001/media', {
            method: 'POST',
            body: formDataObject,
        });
        if (response.ok) {
            const responseData = await response.json();
            return { path: responseData.path };
        } else {
            throw new Error(`Error uploading media: ${response.statusText}`);
        }
    },
};
