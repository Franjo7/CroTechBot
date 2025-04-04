import { IKContext, IKUpload } from 'imagekitio-react';
import { useRef } from 'react';

const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;

const authenticator = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/upload');
        if(!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }
        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    }
    catch(error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const Upload = ({ setImage }) => {

    const IKUploadRef = useRef(null);

    const onError = err => {
        console.error("Error uploading file: ", err);
    }

    const onSuccess = res => {
        console.log("File uploaded successfully: ", res);
        setImage((prev) => ({ ...prev, isLoading: false, databaseData: res }));
    }

    const onUploadProgress = progress => {
        console.log("Upload progress: ", progress);
    }

    const onUploadStart = evt => {
        const file = evt.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage((prev) =>  ({ 
                ...prev, 
                isLoading: true, 
                aiData: {
                    inlineData: {
                        data: reader.result.split(',')[1],
                        mimeType: file.type
                    },
                },
            }));
        };
        reader.readAsDataURL(file);
    }

    return (
        <IKContext 
            urlEndpoint={urlEndpoint} 
            publicKey={publicKey} 
            authenticator={authenticator}
        >
            <IKUpload 
                fileName="example.jpg" 
                onError={onError} 
                onSuccess={onSuccess} 
                onUploadProgress={onUploadProgress} 
                onUploadStart={onUploadStart} 
                useUniqueFileName={true}
                style={{ display: 'none' }}
                ref={IKUploadRef}
                accept="image/*"
            />
        {
            <label onClick={() => IKUploadRef.current.click()}>
                <img src='/attachment.png' alt="attachment" />
            </label>
        }
        </IKContext>
    );
};

export default Upload;