"use server"
import { Resend } from "resend"
import { validateString } from "@/lib/utils"
import { getErrorMessage } from "@/lib/utils"


const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async(formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  console.log(senderEmail)

  //server side validation
  if(!validateString(senderEmail, 100)){
    return {
      error: "Invalid sender email"
    }
  }
  if(!validateString(message, 5000)){
    return{
      error: "Invalid message"
    }
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact Form<onboarding@resend.dev>',
      to: 'chatterjee.aritra@protonmail.com',
      subject: 'Message from Portfolio website',
      reply_to: senderEmail as string,
      text: message as string,
    })
  } catch (error: unknown) {
      return {
        error: getErrorMessage(error)
      }
  }
}
