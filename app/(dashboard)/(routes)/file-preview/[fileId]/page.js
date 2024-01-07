"use client"
import React, { useEffect, useState } from 'react'
import { app } from '../../../../firebaseConfig';
import { doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { ArrowLeftSquare } from 'lucide-react';
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';
import Link from 'next/link';
import { GenerateRandomString } from '../../../../_utils/GenerateRandomString'
import { useRouter } from 'next/navigation';


// ... (import statements)

function FilePreview({ params }) {
  const db = getFirestore(app);
  const router = useRouter();
  const [onPasswordSave] = useState();
  const [fileDocId, setFileDocId] = useState();
  const [file, setFile] = useState();

  useEffect(() => {
    console.log(params?.fileId);
    params?.fileId && getFileInfo();
  }, [params?.fileId]);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = GenerateRandomString().toString();

    try {
      await setDoc(doc(db, "uploadedFile", docId), {
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress.emailAddress,
        userName: user?.fullName,
        password: '',
        id: docId,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
      });

      setFileDocId(docId);

      // Navigate to another page
      router.push('/f/' + docId);
    } catch (error) {
      console.error("Error saving information:", error);
      // Handle the error as needed
    }
  };

  return (
    <div className='py-10 px-20'>
      <a href='/upload' className='flex gap-3'>
        <ArrowLeftSquare />Go to Upload
      </a>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
        <FileInfo file={file} />
        <FileShareForm file={file} onPasswordSave={(password) => onPasswordSave(password)} />
      </div>
    </div>
  );
}

export default FilePreview;


