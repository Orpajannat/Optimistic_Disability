// "use client"
// import Image from 'next/image'
// import React, { useState} from 'react'
// import { CircleAlert, Mail, Phone } from 'lucide-react';

// export default function DonateVolunteer () {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [phone, setPhone] = useState("")
//     const [age, setAge] = useState("")
//     const [occupation, setOccupation] = useState("")
//     const [city, setCity] = useState("")
//     const [availability, setAvailability] = useState("")
//     const [reason, setReason] = useState("")
//     const [error, setError] = useState("")

//     function handleSubmit (){
//         if (name === "") {
//            setError("Name is required")
//         } else if (email === "") {
//            setError("Email is required")
//         }else if (phone === "") {
//            setError("Phone is required")
//         }else if (age === "") {
//            setError("Age is required")
//         }else if (ocupation === "") {
//            setError("Ocupation is required")
//         }else if (city === "") {
//            setError("City is required")
//         }else if (availability === "") {
//            setError("Availability is required")
//         }else if (reason === "") {
//            setError("Reason is required")
//         } else {
//            setError("Submission Successful!")
//         }
//     }
//   return (
//     <div className='flex flex-col xl:flex-row items-baseline justify-self-center gap-10 container mx-auto px-5 lg:px-10 pb-5 lg:pb-0'>
//         <div className='bg-orange-100/30 flex flex-col gap-5 p-10 rounded-lg xl:rounded-t-lg'>
//             <h1 className='text-lg md:text-xl text-black font-bold'>Donate Now</h1>
//             <div className='border-t-3 border-orange-400 rounded-full w-12'></div>
//             <p className='text-sm text-neutral-500 text-wrap'>Your generosity helps us provide education, accessibility support, community programs,<br className='hidden lg:block'/> awareness campaigns, and skill development opportunities for persons with disabilities.</p>
//             <div className='flex flex-col'>
//                 <h1 className='text-sm font-semibold text-orange-400'>Mobile Banking</h1>
//                 <div className='p-3 flex flex-col lg:flex-row gap-5'>
//                     <div className='border-2 rounded-lg px-5 flex flex-col items-center justify-center gap-2 pb-5 bg-white'>
//                         <Image src="/images/bkash-logo.png" alt="bkashLogo" width={110} height={110}/>
//                             <div className='text-left'>
//                                 <p className='text-neutral-500'>Number</p>
//                                 <p className='text-black'>01111111111</p>
//                             </div>
//                             <div className='text-left'>
//                                 <p className='text-neutral-500'>Type</p>
//                                 <p className='text-black'>Send Money</p>
//                             </div>
                    
//                     </div>
//                     <div className='border-2 rounded-lg px-5 flex flex-col items-center justify-center gap-2 pb-5 bg-white'>
//                         <Image src="/images/nagad-logo.png" alt="bkashLogo" width={80} height={20} className='h-fit w-30 py-9'/>
//                             <div className='text-left'>
//                                 <p className='text-neutral-500'>Number</p>
//                                 <p className='text-black'>01111111111</p>
//                             </div>
//                             <div className='text-left'>
//                                 <p className='text-neutral-500'>Type</p>
//                                 <p className='text-black'>Send Money</p>
//                             </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex flex-col gap-5'>
//                 <h1 className='text-sm font-semibold text-orange-400'>Bank Transfer</h1>
//                 <div className='text-base text-black flex flex-col'>
//                     <p><b>Bank Name:</b> Dutch-Bangla Bank PLC</p>
//                     <p><b>Account Name:</b> Optimistic Disability Services</p>
//                     <p><b>Account Number:</b> 1234567890123</p>
//                     <p><b>Branch:</b> Dhanmondi Branch</p>
//                     <p><b>Routing Number:</b> XXXXXXXXX</p>
//                     <p><b>Swift Code (Optional):</b> DBBLBDDH</p>
//                 </div>
//             </div>
//             <div className='flex flex-row items-center gap-2 text-wrap bg-orange-100 border border-orange-200 w-fit p-2 rounded-lg'>
//                 <CircleAlert color="#ff751a" size={25}/>
//                 <p className='text-black'>After sending your donation, please email or message us with your transaction ID so we can acknowledge your contribution.</p>
//             </div>
//             <div className='flex flex-col md:flex-row items-center justify-start gap-5 md:gap-10 text-sm text-black'>
//                 <div className='flex md:flex-row items-center justify-start gap-2'>
//                     <Mail size={15}/>
//                     <p>Email:<br className='block md:hidden'/> <b>donate@optimistic.org</b></p>
//                 </div>
//                 <div className='flex flex-row items-center justify-start gap-2'>
//                     <Phone size={15}/>
//                     <p>Phone: <b>+8801XXXXXXXXX</b></p>
//                 </div>
//             </div>
//         </div>
//         <div className='bg-green-100/40 border border-green-200 flex flex-col rounded-lg gap-5 p-10'>
//             <h1 className='text-lg md:text-xl text-black font-bold'>Become a Volunteer</h1>
//             <div className='border-t-3 border-green-600 rounded-full w-12'></div>
//             <p className='text-sm text-neutral-500 text-wrap'>We welcome students, professionals, organizations, and anyone passionate about creating an inclusive society.</p>
//             <form className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
//                 <div className='flex flex-col'>
//                     <p className='text-black'>Full Name <span className='text-red-400'>*</span></p>
//                     <input
//                     value={name}
//                     onChange={(e)=> setName(e.target.value)}
//                     type="text"
//                     placeholder='Enter Your Full Name'
//                     className='p-1 w-fit border bg-white rounded-lg outline-none'>
//                     </input>
//                 </div>
//                 <div className='flex flex-col'>
//                     <p className='text-black'>Email Address <span className='text-red-400'>*</span></p>
//                     <input
//                     value={email}
//                     onChange={(e)=> setEmail(e.target.value)}
//                     type="text"
//                     placeholder='Enter Your Full Name'
//                     className='p-1 w-fit border bg-white rounded-lg outline-none'>
//                     </input>
//                 </div>
//                 <div className='flex flex-col'>
//                     <p className='text-black'>Phone Number <span className='text-red-400'>*</span></p>
//                     <input
//                     value={phone}
//                     onChange={(e)=> setPhone(e.target.value)}
//                     type="text"
//                     placeholder='Enter Your Full Name'
//                     className='p-1 w-fit border bg-white rounded-lg outline-none'>
//                     </input>
//                 </div>
//                 <div className='flex flex-col'>
//                     <p className='text-black'>Age <span className='text-red-400'>*</span></p>
//                     <input
//                     value={age}
//                     onChange={(e)=> setAge(e.target.value)}
//                     type="text"
//                     placeholder='Enter Your Full Name'
//                     className='p-1 w-fit border bg-white rounded-lg outline-none'>
//                     </input>
//                 </div>
//                 <div className='flex flex-col'>
//                     <p className='text-black'>Occupation <span className='text-red-400'>*</span></p>
//                     <input
//                     value={occupation}
//                     onChange={(e)=> setOccupation(e.target.value)}
//                     type="text"
//                     placeholder='Enter Your Full Name'
//                     className='p-1 w-fit border bg-white rounded-lg outline-none'>
//                     </input>
//                 </div>
//                 <div className='flex flex-col'>
//                     <p className='text-black'>City <span className='text-red-400'>*</span></p>
//                     <input
//                     value={city}
//                     onChange={(e)=> setCity(e.target.value)}
//                     type="text"
//                     placeholder='Enter Your Full Name'
//                     className='p-1 w-fit border bg-white rounded-lg outline-none'>
//                     </input>
//                 </div>
//             </form>

//             <div className='flex flex-col gap-3 text-black py-5'>
//                 <p>Availability <span className='text-red-400'>*</span></p>

//                 <div className='flex flex-col md:flex-row gap-5'>
//                     <label className='flex flex-row items-center gap-2'>
//                        <input
//                        type="radio"
//                        value="Weekdays"
//                        checked={availability === "Weekdays"}
//                        onChange={(e) => setAvailability(e.target.value)}
//                        />
//                        Weekdays
//                     </label>

//                     <label className='flex items-center gap-2'>
//                         <input
//                         type="radio"
//                         value="Weekends"
//                         checked={availability === "Weekends"}
//                         onChange={(e) => setAvailability(e.target.value)}
//                         />
//                         Weekends
//                     </label>

//                     <label className='flex items-center gap-2'>
//                         <input
//                         type="radio"
//                         value="Flexible"
//                         checked={availability === "Flexible"}
//                         onChange={(e) => setAvailability(e.target.value)}
//                         />
//                         Flexible
//                     </label>
//                 </div>
//             </div>

//             <div className='text-black'>
//                 <p>Tell us why you would like to volunteer <span className='text-red-400'>*</span></p>
//                 <textarea
//                 value={reason}
//                 onChange={(e)=> setReason(e.target.value)}
//                 type="text"
//                 placeholder='Write your motivation here....'
//                 className='bg-white w-full rounded-lg p-1'
//                 >
//                 </textarea>
//             </div>

//             <button onClick={handleSubmit} className='bg-green-700 hover:bg-green-800 p-1 rounded-lg'>
//                 Submit Application
//             </button>
//             {error &&
//             <p className='text-red-500 text-center'>{error}</p>}
//         </div>
//     </div>
//   )
// }

"use client"
import Image from 'next/image'
import { useState } from 'react'
import { CircleAlert, Mail, Phone } from 'lucide-react'

export default function DonateVolunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    occupation: '',
    city: '',
    availability: '',
    reason: '',
  })
  const [status, setStatus] = useState(null) // { type: 'error' | 'success', message: string }

  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const requiredFields = [
      ['name', 'Full name'],
      ['email', 'Email'],
      ['phone', 'Phone number'],
      ['age', 'Age'],
      ['occupation', 'Occupation'],
      ['city', 'City'],
      ['availability', 'Availability'],
      ['reason', 'Reason for volunteering'],
    ]

    for (const [field, label] of requiredFields) {
      if (!formData[field]) {
        setStatus({ type: 'error', message: `${label} is required` })
        return
      }
    }

    // TODO: replace with real API submission
    setStatus({ type: 'success', message: 'Submission successful! We will be in touch soon.' })
  }

  return (
    <section className="flex flex-col xl:flex-row items-stretch gap-10 container mx-auto px-5 lg:px-10 py-10">

      {/* Donate panel */}
      <div className="bg-orange-100/30 flex flex-col gap-5 p-8 sm:p-10 rounded-lg w-full xl:w-1/2">
        <h2 className="text-lg md:text-xl text-black font-bold">Donate Now</h2>
        <div className="border-t-[3px] border-orange-400 rounded-full w-12" />
        <p className="text-sm text-neutral-500 max-w-md">
          Your generosity helps us provide education, accessibility support, community programs, awareness campaigns, and skill development opportunities for persons with disabilities.
        </p>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-orange-500">Mobile Banking</h3>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="border-2 border-slate-200 rounded-lg px-5 py-5 flex flex-col items-center gap-2 bg-white flex-1">
              <Image src="/images/bkash-logo.png" alt="bKash" width={110} height={50} className="h-30 w-auto" />
              <div className="text-left w-full">
                <p className="text-neutral-500 text-sm">Number</p>
                <p className="text-black font-medium">01111111111</p>
              </div>
              <div className="text-left w-full">
                <p className="text-neutral-500 text-sm">Type</p>
                <p className="text-black font-medium">Send Money</p>
              </div>
            </div>

            <div className="border-2 border-slate-200 rounded-lg px-5 py-5 flex flex-col items-center gap-2 bg-white flex-1 pt-15">
              <Image src="/images/nagad-logo.png" alt="Nagad" width={110} height={40} className="h-10 w-auto"/>
              <div className="text-left w-full">
                <p className="text-neutral-500 text-sm">Number</p>
                <p className="text-black font-medium">01111111111</p>
              </div>
              <div className="text-left w-full">
                <p className="text-neutral-500 text-sm">Type</p>
                <p className="text-black font-medium">Send Money</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-orange-500">Bank Transfer</h3>
          <div className="text-sm sm:text-base text-black flex flex-col gap-1 bg-white/60 rounded-lg p-4 border border-orange-200">
            <p><span className="font-semibold">Bank Name:</span> Dutch-Bangla Bank PLC</p>
            <p><span className="font-semibold">Account Name:</span> Optimistic Disability Services</p>
            <p><span className="font-semibold">Account Number:</span> 1234567890123</p>
            <p><span className="font-semibold">Branch:</span> Dhanmondi Branch</p>
            <p><span className="font-semibold">Routing Number:</span> XXXXXXXXX</p>
            <p><span className="font-semibold">Swift Code (Optional):</span> DBBLBDDH</p>
          </div>
        </div>

        <div className="flex flex-row items-start gap-2 bg-orange-100 border border-orange-200 p-3 rounded-lg">
          <CircleAlert className="text-orange-500 shrink-0 mt-0.5" size={20} />
          <p className="text-black text-sm">
            After sending your donation, please email or message us with your transaction ID so we can acknowledge your contribution.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-sm text-black pt-2">
          <a href="mailto:donate@optimistic.org" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
            <Mail size={16} />
            <span>donate@optimistic.org</span>
          </a>
          <a href="tel:+8801XXXXXXXXX" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
            <Phone size={16} />
            <span>+8801XXXXXXXXX</span>
          </a>
        </div>
      </div>

      {/* Volunteer panel */}
      <div className="bg-green-100/40 border border-green-200 flex flex-col rounded-lg gap-5 p-8 sm:p-10 w-full xl:w-1/2">
        <h2 className="text-lg md:text-xl text-black font-bold">Become a Volunteer</h2>
        <div className="border-t-[3px] border-green-600 rounded-full w-12" />
        <p className="text-sm text-neutral-500">
          We welcome students, professionals, organizations, and anyone passionate about creating an inclusive society.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Full Name" required>
              <input
                id="name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                type="text"
                placeholder="Enter your full name"
                className={inputClass}
              />
            </Field>

            <Field label="Email Address" required>
              <input
                id="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                type="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </Field>

            <Field label="Phone Number" required>
              <input
                id="phone"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                type="tel"
                placeholder="01XXXXXXXXX"
                className={inputClass}
              />
            </Field>

            <Field label="Age" required>
              <input
                id="age"
                value={formData.age}
                onChange={(e) => updateField('age', e.target.value)}
                type="number"
                min="0"
                placeholder="Enter your age"
                className={inputClass}
              />
            </Field>

            <Field label="Occupation" required>
              <input
                id="occupation"
                value={formData.occupation}
                onChange={(e) => updateField('occupation', e.target.value)}
                type="text"
                placeholder="Enter your occupation"
                className={inputClass}
              />
            </Field>

            <Field label="City" required>
              <input
                id="city"
                value={formData.city}
                onChange={(e) => updateField('city', e.target.value)}
                type="text"
                placeholder="Enter your city"
                className={inputClass}
              />
            </Field>
          </div>

          <fieldset className="flex flex-col gap-3 text-black">
            <legend className="mb-1">
              Availability <span className="text-red-500">*</span>
            </legend>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {['Weekdays', 'Weekends', 'Flexible'].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="availability"
                    value={option}
                    checked={formData.availability === option}
                    onChange={(e) => updateField('availability', e.target.value)}
                    className="accent-green-700"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <Field label="Tell us why you would like to volunteer" required>
            <textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => updateField('reason', e.target.value)}
              placeholder="Write your motivation here..."
              rows={4}
              className={`${inputClass} w-full resize-none`}
            />
          </Field>

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            Submit Application
          </button>

          {status && (
            <p
              role="status"
              className={`text-center text-sm font-medium ${
                status.type === 'error' ? 'text-red-500' : 'text-green-700'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

const inputClass =
  'p-2.5 w-full border border-slate-300 bg-white rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow'

function Field({ label, required, children }) {
  const id = children.props.id
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-black text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  )
}