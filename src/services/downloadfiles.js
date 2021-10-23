import firebase from './firebase';
import axios from 'axios';
import files from '../utils/files';

import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';

const downloadFile = async (ref, id, obj) => {
    let gsReference = firebase.storage().refFromURL(ref);
    console.log('El id es', id);
    try {
        const firebaseUrl = await gsReference.getDownloadURL();

        // const options = {
        //     url: firebaseUrl,
        //     method: 'GET',
        //     responseType: 'blob',
        // };

        // const response = await axios(options)
        // console.log(response);
        // console.log(new Blob([response.data]));
        // const url = window.URL.createObjectURL(new Blob([response.data]));
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', files[id].name); //or any other extension
        // document.body.appendChild(link);
        // link.click();

        PizZipUtils.getBinaryContent(firebaseUrl, (error, content) => {
            if (error) {
                console.log('There was an error: ', error);
            }

            const zip = new PizZip(content);
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });

            try {
                if (obj) {
                    doc.render(obj);
                } else {
                    doc.render(files[id].fields);
                }
            } catch (error) {
                console.log(error)
            }

            const out = doc.getZip().generate({
                type: "blob",
                mimeType:
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });
            saveAs(out, files[id].name);
        });


    } catch (error) {
        console.log(error);
    }
}

export default downloadFile