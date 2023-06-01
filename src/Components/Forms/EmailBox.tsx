//@ts-nocheck
import validator from 'validator';
import axios from 'axios'

import { useState } from 'react';

export const EmailBox: React.FC = () => {

    const [valid, setValid] = useState(false);
    const [email, setEmail] = useState('');
    const [success, setEmailSuccess] = useState(false);

    return (
        <div className='justify-center text-center'>
            <form className="mt-10">
                {!valid && email.length > 0 && <p className="text-blue-300 text-sm mr-8 mb-2">
                    Please provide a valid email address.
                </p>}
                {valid && success && <p className="text-green-600 text-sm mr-8 mb-2">
                    Email received!
                </p>}
                <div className="h-10 w-64 grid grid-cols-1 mx-auto">
                    <div className=''>
                        <input onChange={(e) => checkEmail(e)} className="flex justify-center border bg-transparent w-full text-white px-2 ml-0 h-10 w-64 leading-tight focus:outline-none mr-4" type="email" placeholder="Email" aria-label="Full name" />
                    </div>
                    <button onClick={(e) => submitEmail(e)} className="h-10 w-24 mx-auto mt-2 flex-shrink-0 bg-orange-500 hover:bg-orange-300 text-sm border-1 text-white py-1 px-2 rounded" type="button">
                        Get updates!
                    </button>
                </div>
            </form>
        </div>
    )

    function checkEmail(e: React.FormEvent<HTMLInputElement>) {
        setEmail(e.target?.value);

        if (validator.isEmail(email)) {
            setValid(true);
            return;
        }

        setValid(false)
    }

    async function submitEmail(e: React.MouseEvent<HTMLButtonElement>) {
        if (valid) {
            const serverResponse = await axios.post('http://localhost:3000/mailing/add', {
                email
            })

            serverResponse ? setEmailSuccess(true) : setEmailSuccess(false)
        }
    }
}
