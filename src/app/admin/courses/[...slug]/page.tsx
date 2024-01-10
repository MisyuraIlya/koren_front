import React, {FC} from 'react';


interface pageProps {
    params: { admin: string}
}

const page:FC<pageProps> = ({params}) => {
    console.log(params)
    return (
        <div>
            admin: {params.admin}
        </div>
    );
};

export default page;