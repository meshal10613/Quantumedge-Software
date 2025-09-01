import React, { useState } from 'react';
import { FaApple, FaFacebookF, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import design from '../assets/navbar-design.png'
import { RxCross2 } from 'react-icons/rx';

const Register = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, confirmPassword } = Object.fromEntries(formData.entries());
        setError("");
        if(password !== confirmPassword){
            return setError("Password & Confirm Password didn't match!");
        };
        console.log(email, password, confirmPassword)
    };

    return (
    <div className="flex items-center justify-center my-20">
        <div className="bg-black/95 text-white w-[900px] rounded-2xl shadow-lg flex overflow-hidden relative p-5">
            {/* Left Side - Form */}
            <div className="w-1/2 p-10 flex flex-col justify-center z-10">
                <h2 className="text-2xl font-bold mb-2">Open your account</h2>
                <p className="mb-6 text-sm">
                    Already have an account?{" "}
                    <Link to='/login' href="#" className="text-primary hover:underline">
                    Sign in
                    </Link>
                </p>
                <form onSubmit={handleRegister} className='space-y-4'>
                    {/* Email */}
                    <div className="form-control">
                        <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="input input-bordered w-full bg-transparent text-white border border-primary rounded-3xl"
                        required
                        />
                    </div>

                    {/* Password */}
                    <div className='space-y-1'>
                        <div className="form-control relative">
                            <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full bg-transparent text-white border border-primary rounded-3xl pr-10 z-0"
                            required
                            />
                            <button
                            type="button"
                            className="absolute right-3 top-[10px] text-gray-400 cursor-pointer z-20"
                            onClick={() => setShowPassword(!showPassword)}
                            >
                            {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                            </button>
                        </div>
                        <p className='text-red-500 text-xs ml-2'>{error}</p>
                    </div>

                    {/* Confirm Password */}
                    <div className='space-y-1'>
                        <div className="form-control relative">
                            <input
                            type={showConfirm ? "text" : "password"}
                            name='confirmPassword'
                            placeholder="Confirm Password"
                            className="input input-bordered w-full bg-transparent text-white border border-primary rounded-3xl pr-10 z-0"
                            required
                            />
                            <button
                            type="button"
                            className="absolute right-3 top-[10px] text-gray-400 cursor-pointer z-20"
                            onClick={() => setShowConfirm(!showConfirm)}
                            >
                            {showConfirm ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                            </button>
                        </div>
                        <p className='text-red-500 text-xs ml-2'>{error}</p>
                    </div>
                    <button type='submit' className="btn bg-primary text-white w-full rounded-full border-none text-center">
                        Create Account
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-2 my-6">
                    <div className="flex-1 border-t border-gray-600"></div>
                    <span className="text-gray-400 text-sm">or</span>
                    <div className="flex-1 border-t border-gray-600"></div>
                </div>

                {/* Socials */}
                <div className="flex justify-center gap-4">
                    <button className="btn btn-circle bg-[#1E1E1E] border-none w-32">
                    <FaFacebookF className="text-xl text-accent" />
                    </button>
                    <button className="btn btn-circle bg-[#1E1E1E] border-none w-32">
                    <FaApple className="text-xl text-accent" />
                    </button>
                    <button className="btn btn-circle bg-[#1E1E1E] border-none w-32">
                    <FaXTwitter className="text-xl text-accent" />
                    </button>
                </div>

                {/* Terms */}
                <p className="text-[12px] mt-6 text-gray-400 text-center">
                    By joining, you agree to the Fiverr{" "}
                    <a href="#" className="text-primary hover:underline">
                    Terms of Service
                    </a>{" "}
                    and to occasionally receive emails from us. Please read our{" "}
                    <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                    </a>{" "}
                    to learn how we use your personal data.
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="w-1/2 z-10 relative">
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                    alt="Team working"
                    className="w-full h-full object-cover rounded-2xl"
                />
                <div className='absolute top-0 right-0 bg-black text-primary z-20 rounded-full p-1 m-2 cursor-pointer'>
                    <RxCross2 size={20} />
                </div>
            </div>

            <img src={design} alt="" className='absolute top-2/7 left-2/7 z-0' />
        </div>
    </div>
    );
};

export default Register;