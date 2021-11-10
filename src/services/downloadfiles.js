import firebase from './firebase';
import axios from 'axios';
import files from '../utils/files';
// import xlsx from 'xlsx';
import Xlsxpopulate from 'xlsx-populate';
import printJS from 'print-js'; 

import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';

const blobToBase64 = async(blob) => {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}

const downloadFile = async (ref, id, obj, type = 'download') => {
    let gsReference = firebase.storage().refFromURL(ref);
    console.log('El id es', id);
    console.log('El type es', type)
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

        if (files[id].type === 'word') {
            PizZipUtils.getBinaryContent(firebaseUrl, async (error, content) => {
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
                if (type.includes('printFile')) {
                    console.log(out);
                    const b64 = await blobToBase64(out);
                    
                    printJS({printable: b64, type: 'pdf', base64: true});
                    // const blobURL = URL.createObjectURL(out);
                    // console.log('blobUrl', blobURL)
                    // printJS(blobURL);
                } else {
                    saveAs(out, files[id].name);
                }
            });
        } else {
            const response = await axios(firebaseUrl, { responseType: 'arraybuffer'});
            const data = new Uint8Array(response.data);
            const workbook = await Xlsxpopulate.fromDataAsync(data);

            for (const key in obj) {
                workbook.sheet(0).cell(key).value(obj[key]);
                console.log(`${key}: ${obj[key]}`);
            }

            const blob = await workbook.outputAsync();
            if (type.includes('printFile')) {
                console.log(blob);
                // const blobURL = URL.createObjectURL(blob);
                // console.log(blobURL);
                // printJS(blobURL);
                const b64 = await blobToBase64(blob);
                printJS({printable: b64, type: 'pdf', base64: true});
            } else {
                saveAs(blob, files[id].name);
            }
            

            // const base64 = await workbook.outputAsync("base64");
            // window.location.href = "data:" + Xlsxpopulate.MIME_TYPE + ";base64," + base64;


            // let wopts = { bookType:'xlsx', bookSST:false, type:'array' };
            // let wbout = xlsx.write(workbook, wopts);

            // /* the saveAs call downloads a file on the local machine */
            // saveAs(new Blob([wbout],{type:"application/octet-stream"}), "test.xlsx");

            // // const newData = await workbook.xlsx.writeBuffer();
            // // const blob = new Blob([newData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'});
            // // saveAs(blob, 'test.xlsx');
            // xlsx.writeFile(workbook, 'test2.xlsx');
        }

    } catch (error) {
        console.log(error);
    }
}

export default downloadFile