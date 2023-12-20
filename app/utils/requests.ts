import { Answer, ContactForm } from '@/app/utils/types';


export const sendMail = async (emailContent:{quiz:Answer[], contactInfo:ContactForm})=>{
    return await fetch('/api/sendMail',
    {
        method:"POST",
        body: JSON.stringify(emailContent),
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    }).then( async (res)=>{
        const fullfilled = await res.json()        
        return fullfilled
    })
}

export const emailSignature = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_USER
}