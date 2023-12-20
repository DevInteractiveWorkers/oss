'use server'
import { getCurrentDate } from "@/app/utils/format";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { emailSignature } from './../../utils/requests';


export async function POST(req: NextRequest) {
    const data = await req.json()
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        },
        tls: {rejectUnauthorized: false}
    });

    const date = getCurrentDate()
    
    try {
        const mail = await transporter.sendMail({
            ...emailSignature,
            text:`${data.contactInfo.name} tried to contact you through ExSangelous.com contact form`,
            subject: `${data.contactInfo.name} tried to contact you through ExSangelous.com contact form`,
            html: `${data.quiz.length}`
        })
        return NextResponse.json({mail:mail.accepted, status:200, revalidated:true, now: Date.now()})
    } catch (error) {
        return NextResponse.json({status: 400, revalidated: true, now: Date.now(), error:error })
    }

}