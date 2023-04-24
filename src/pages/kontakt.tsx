import Paper from "@/components/Paper";
import { SiInstagram } from "react-icons/si";
import { MdPhoneAndroid, MdMailOutline } from "react-icons/md";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { IFormData } from "@/utils/types";

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

    return (
        <div className="flex flex-col justify-center items-center text-dark">
            <Paper className="w-3/4 md:w-1/2">
                <p className="text-center mb-4 text-3xl">Zapraszam do kontaktu</p>
                <div className="flex flex-wrap items-center justify-around p-4 max-w-[250px]">
                    <Link href="https://www.instagram.com/csimagic/" target="_blank">
                        <p className="mb-4 text-center ">
                            <SiInstagram className="m-auto w-8 h-8 text-main" /> @csimagic
                        </p>
                    </Link>
                    <p className="mb-4 text-center ">
                        <MdPhoneAndroid className="m-auto w-8 h-8 text-main" />
                        603 521 429
                    </p>
                    <p className="mb-4 text-center ">
                        <MdMailOutline className="m-auto w-8 h-8 text-main" /> kubaw.iluzja@gmail.com
                    </p>
                </div>
                {response && (
                    <div
                        className={`self-stretch text-center border-2 rounded-md p-4 m-4 opacity-90 ${
                            response.status === 200 ? "border-green-500 bg-green-700 text-white" : "border-red-500 bg-rose-800 text-white"
                        }`}>
                        {response.message}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col justify-around items-stretch w-full">
                    <label htmlFor="email" className="ml-4">
                        E-mail:
                    </label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        required
                        className="min-w-[250px] m-4 w  border  shadow-md shadow-light rounded-md p-2 outline-secondary  text-base"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label htmlFor="message" className="ml-4">
                        Wiadomość:
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows={10}
                        className="min-w-[250px] m-4 w border  shadow-md shadow-light rounded-md p-2 outline-secondary text-base resize-none"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <button
                        type="submit"
                        className="border-2 m-4 mt-6 bg-main border-white text-light hover:text-dark shadow-md shadow-light rounded-md p-2 outline-secondary text-base  hover:bg-secondary hover:-translate-y-2 active:translate-y-0 transition-all duration-300">
                        Wyślij
                    </button>
                </form>
            </Paper>
        </div>
    );
};

export default Contact;
