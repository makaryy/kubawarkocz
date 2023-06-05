import Paper from "@/components/Paper";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { MdPhoneAndroid, MdMailOutline } from "react-icons/md";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { IFormData } from "@/utils/types";
import Page from "@/components/Page";
import data from "@/utils/data";

const { email: emailAddress, facebook, instagram, labels, phoneNumber, title, messagePlaceholder } = data.contact;

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState<IFormData | null>(null);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/message", { method: "POST", body: JSON.stringify({ email, message }) });
            const data: { message: string; status: number } = await res.json();
            setMessage("");
            setEmail("");
            setResponse(data);
            setTimeout(() => {
                setResponse(null);
            }, 2500);
        } catch (error) {
            setResponse({ status: 500, message: "Something went wrong" });
            setTimeout(() => {
                setResponse(null);
            }, 2500);
        }
    };

    // TODO: validation

    return (
        <Page>
            <div className="flex flex-col justify-center items-center text-dark">
                <Paper className="w-3/4 lg:w-1/2">
                    <p className="text-center mb-4 text-3xl">{title}</p>
                    <div className="flex flex-wrap items-center justify-around p-4 gap-4">
                        <Link href={instagram.href} target="_blank">
                            <p className="mb-4 text-center ">
                                <SiInstagram className="m-auto w-8 h-8 text-main text-rose-800" /> {instagram.label}
                            </p>
                        </Link>
                        <Link href={facebook.href} target="_blank">
                            <p className="mb-4 text-center ">
                                <SiFacebook className="m-auto w-8 h-8 text-main text-rose-800" /> {facebook.label}
                            </p>
                        </Link>
                        <p className="mb-4 text-center ">
                            <MdPhoneAndroid className="m-auto w-8 h-8 text-main text-rose-800" />
                            {phoneNumber}
                        </p>
                        <p className="mb-4 text-center ">
                            <MdMailOutline className="m-auto w-8 h-8 text-main text-rose-800" /> {emailAddress}
                        </p>
                    </div>
                    {response && (
                        <div
                            className={`self-stretch text-center border-2 rounded-md p-4 m-4 opacity-90 ${
                                response.status === 200
                                    ? "border-green-500 bg-green-700 text-white"
                                    : "border-red-500 bg-rose-800 text-white"
                            }`}
                        >
                            {response.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="flex flex-col justify-around items-stretch w-full">
                        <label htmlFor="email" className="ml-4 ">
                            {labels.email}
                        </label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            required
                            className="m-4  shadow-md shadow-neutral-900 rounded-md p-2 text-base border-transparent outline-none border-2 border-neutral-600  bg-neutral-600 focus:border-rose-800 placeholder:text-neutral-300/40"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder={emailAddress}
                        />
                        <label htmlFor="message" className="ml-4 ">
                            {labels.message}
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows={10}
                            className=" m-4 shadow-md shadow-neutral-900 rounded-md p-2 text-base border-transparent resize-none outline-none border-2 border-neutral-600  bg-neutral-600 focus:border-rose-800 placeholder:text-neutral-300/40"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            placeholder={messagePlaceholder}
                        />
                        <button
                            type="submit"
                            className="m-4 mt-6 bg-main hover:text-dark shadow-md shadow-neutral-900 rounded-md p-2 text-base hover:-translate-y-2 active:translate-y-0 transition-all duration-300 bg-rose-800"
                        >
                            {labels.send}
                        </button>
                    </form>
                </Paper>
            </div>
        </Page>
    );
};

export default Contact;
