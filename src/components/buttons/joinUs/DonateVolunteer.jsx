"use client"
import Image from 'next/image'
import React, { useState} from 'react'
import { CircleAlert, Mail, Phone } from 'lucide-react';

export default function DonateVolunteer () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")
    const [occupation, setOccupation] = useState("")
    const [city, setCity] = useState("")
    const [availability, setAvailability] = useState("")
    const [reason, setReason] = useState("")
    const [error, setError] = useState("")

    function handleSubmit (){
        if (name === "") {
           setError("Name is required")
        } else if (email === "") {
           setError("Email is required")
        }else if (phone === "") {
           setError("Phone is required")
        }else if (age === "") {
           setError("Age is required")
        }else if (ocupation === "") {
           setError("Ocupation is required")
        }else if (city === "") {
           setError("City is required")
        }else if (availability === "") {
           setError("Availability is required")
        }else if (reason === "") {
           setError("Reason is required")
        } else {
           setError("Submission Successful!")
        }
    }
  return (
    <div className='flex flex-col xl:flex-row items-baseline justify-self-center gap-10 container mx-auto px-5 lg:px-10 pb-5 lg:pb-0'>
        <div className='bg-orange-100/30 flex flex-col gap-5 p-10 rounded-lg xl:rounded-t-lg'>
            <h1 className='text-lg md:text-xl text-black font-bold'>Donate Now</h1>
            <div className='border-t-3 border-orange-400 rounded-full w-12'></div>
            <p className='text-sm text-neutral-500 text-wrap'>Your generosity helps us provide education, accessibility support, community programs,<br className='hidden lg:block'/> awareness campaigns, and skill development opportunities for persons with disabilities.</p>
            <div className='flex flex-col'>
                <h1 className='text-sm font-semibold text-orange-400'>Mobile Banking</h1>
                <div className='p-3 flex flex-col lg:flex-row gap-5'>
                    <div className='border-2 rounded-lg px-5 flex flex-col items-center justify-center gap-2 pb-5 bg-white'>
                        <Image src="/images/bkash-logo.png" alt="bkashLogo" width={110} height={110}/>
                            <div className='text-left'>
                                <p className='text-neutral-500'>Number</p>
                                <p className='text-black'>01111111111</p>
                            </div>
                            <div className='text-left'>
                                <p className='text-neutral-500'>Type</p>
                                <p className='text-black'>Send Money</p>
                            </div>
                    
                    </div>
                    <div className='border-2 rounded-lg px-5 flex flex-col items-center justify-center gap-2 pb-5 bg-white'>
                        <Image src="/images/nagad-logo.png" alt="bkashLogo" width={80} height={20} className='h-fit w-30 py-9'/>
                            <div className='text-left'>
                                <p className='text-neutral-500'>Number</p>
                                <p className='text-black'>01111111111</p>
                            </div>
                            <div className='text-left'>
                                <p className='text-neutral-500'>Type</p>
                                <p className='text-black'>Send Money</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-sm font-semibold text-orange-400'>Bank Transfer</h1>
                <div className='text-base text-black flex flex-col'>
                    <p><b>Bank Name:</b> Dutch-Bangla Bank PLC</p>
                    <p><b>Account Name:</b> Optimistic Disability Services</p>
                    <p><b>Account Number:</b> 1234567890123</p>
                    <p><b>Branch:</b> Dhanmondi Branch</p>
                    <p><b>Routing Number:</b> XXXXXXXXX</p>
                    <p><b>Swift Code (Optional):</b> DBBLBDDH</p>
                </div>
            </div>
            <div className='flex flex-row items-center gap-2 text-wrap bg-orange-100 border border-orange-200 w-fit p-2 rounded-lg'>
                <CircleAlert color="#ff751a" size={25}/>
                <p className='text-black'>After sending your donation, please email or message us with your transaction ID so we can acknowledge your contribution.</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-start gap-5 md:gap-10 text-sm text-black'>
                <div className='flex md:flex-row items-center justify-start gap-2'>
                    <Mail size={15}/>
                    <p>Email:<br className='block md:hidden'/> <b>donate@optimistic.org</b></p>
                </div>
                <div className='flex flex-row items-center justify-start gap-2'>
                    <Phone size={15}/>
                    <p>Phone: <b>+8801XXXXXXXXX</b></p>
                </div>
            </div>
        </div>
        <div className='bg-green-100/40 border border-green-200 flex flex-col rounded-lg gap-5 p-10'>
            <h1 className='text-lg md:text-xl text-black font-bold'>Become a Volunteer</h1>
            <div className='border-t-3 border-green-600 rounded-full w-12'></div>
            <p className='text-sm text-neutral-500 text-wrap'>We welcome students, professionals, organizations, and anyone passionate about creating an inclusive society.</p>
            <form className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                    <p className='text-black'>Full Name <span className='text-red-400'>*</span></p>
                    <input
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    type="text"
                    placeholder='Enter Your Full Name'
                    className='p-1 w-fit border bg-white rounded-lg outline-none'>
                    </input>
                </div>
                <div className='flex flex-col'>
                    <p className='text-black'>Email Address <span className='text-red-400'>*</span></p>
                    <input
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    type="text"
                    placeholder='Enter Your Full Name'
                    className='p-1 w-fit border bg-white rounded-lg outline-none'>
                    </input>
                </div>
                <div className='flex flex-col'>
                    <p className='text-black'>Phone Number <span className='text-red-400'>*</span></p>
                    <input
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                    type="text"
                    placeholder='Enter Your Full Name'
                    className='p-1 w-fit border bg-white rounded-lg outline-none'>
                    </input>
                </div>
                <div className='flex flex-col'>
                    <p className='text-black'>Age <span className='text-red-400'>*</span></p>
                    <input
                    value={age}
                    onChange={(e)=> setAge(e.target.value)}
                    type="text"
                    placeholder='Enter Your Full Name'
                    className='p-1 w-fit border bg-white rounded-lg outline-none'>
                    </input>
                </div>
                <div className='flex flex-col'>
                    <p className='text-black'>Occupation <span className='text-red-400'>*</span></p>
                    <input
                    value={occupation}
                    onChange={(e)=> setOccupation(e.target.value)}
                    type="text"
                    placeholder='Enter Your Full Name'
                    className='p-1 w-fit border bg-white rounded-lg outline-none'>
                    </input>
                </div>
                <div className='flex flex-col'>
                    <p className='text-black'>City <span className='text-red-400'>*</span></p>
                    <input
                    value={city}
                    onChange={(e)=> setCity(e.target.value)}
                    type="text"
                    placeholder='Enter Your Full Name'
                    className='p-1 w-fit border bg-white rounded-lg outline-none'>
                    </input>
                </div>
            </form>

            <div className='flex flex-col gap-3 text-black py-5'>
                <p>Availability <span className='text-red-400'>*</span></p>

                <div className='flex flex-col md:flex-row gap-5'>
                    <label className='flex flex-row items-center gap-2'>
                       <input
                       type="radio"
                       value="Weekdays"
                       checked={availability === "Weekdays"}
                       onChange={(e) => setAvailability(e.target.value)}
                       />
                       Weekdays
                    </label>

                    <label className='flex items-center gap-2'>
                        <input
                        type="radio"
                        value="Weekends"
                        checked={availability === "Weekends"}
                        onChange={(e) => setAvailability(e.target.value)}
                        />
                        Weekends
                    </label>

                    <label className='flex items-center gap-2'>
                        <input
                        type="radio"
                        value="Flexible"
                        checked={availability === "Flexible"}
                        onChange={(e) => setAvailability(e.target.value)}
                        />
                        Flexible
                    </label>
                </div>
            </div>

            <div className='text-black'>
                <p>Tell us why you would like to volunteer <span className='text-red-400'>*</span></p>
                <textarea
                value={reason}
                onChange={(e)=> setReason(e.target.value)}
                type="text"
                placeholder='Write your motivation here....'
                className='bg-white w-full rounded-lg p-1'
                >
                </textarea>
            </div>

            <button onClick={handleSubmit} className='bg-green-700 hover:bg-green-800 p-1 rounded-lg'>
                Submit Application
            </button>
            {error &&
            <p className='text-red-500 text-center'>{error}</p>}
        </div>
    </div>
  )
}
