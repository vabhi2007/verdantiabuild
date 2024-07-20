import React, { useState, ChangeEvent } from "react";

interface myProps {
    job: string;
    onClose: () => void;
    onSubmit: (formData: JobApplicationFormData) => void;
}

interface JobApplicationFormData {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    zipCode: string;
}

const JobApplicationPopUp: React.FC<myProps> = ({ job, onClose, onSubmit }) => {
    const [formData, setFormData] = useState<JobApplicationFormData>({
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        zipCode: "",
    });

    const [formErrors, setFormErrors] = useState<string[]>([]); // State to hold form validation errors

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const errors: string[] = [];

        // Check each field for validity
        if (formData.firstName === "") {
            errors.push("First Name is required");
        }
        if (formData.lastName === "") {
            errors.push("Last Name is required");
        }
        if (formData.email === "") {
            errors.push("Email is required");
        }
        if (formData.zipCode === "") {
            errors.push("Zip Code is required");
        }
        if (formData.address === "") {
            errors.push("Address is required");
        }

        // If there are errors, display them and prevent form submission
        if (errors.length > 0) {
            setFormErrors(errors);
        } else {
            // If no errors, submit the form
            onSubmit(formData);
            onClose(); // Close the popup after submission
        }
    };

    return (
        <main>
            <div className={"inline-flex flex-col items-start gap-[1vw] p-[2vw] relative bg-white w-fit border border-solid border-[#b2b2b2] shadow-[0px_4px_4px_#00000040] rounded-[1vw]"}>
                <div className="inline-flex flex-col items-start relative">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Bellota_Text',Helvetica] text-black text-[2.5vw] tracking-[0] leading-[normal]">
                        Job Application
                    </div>
                    <div className="relative w-fit [font-family:'Bellota_Text',Helvetica] text-[#53975dab] text-[1.5vw] tracking-[0] leading-[normal]">
                        {job}
                    </div>
                    {/* Error message display */}
                </div>
                <div className={"inline-flex flex-col items-start gap-[1vw] relative"}>
                    <div className="flex flex-row items-start justify-center gap-[1vw] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start gap-[1vw] w-full">
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                First Name <span className="text-red-600">*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full h-fit p-[0.8vw] rounded-[0.5vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                Email <span className="text-red-600">*</span>
                            </div>
                            <input
                                type="email"
                                placeholder="Enter"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                Zip Code <span className="text-red-600">*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                required
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            {formErrors.length > 0 && (
                        <div className="text-red-600 mt-2">
                            Please make sure all required fields are completed.
                        </div>
                    )}
                            {/* Placeholder for error message */}
                    <div className="mt-2 invisible">
                        Please make sure all required fields are completed.
                    </div>
                    {/* Actual error message display */}
                    

                            <div className="flex items-center justify-between w-full gap-[1vw]">
                                <button
                                    onClick={handleSubmit}
                                    className="mt-[0.75vw] flex items-center justify-center py-[0.7vw] w-1/2 bg-[#53975d] rounded-[0.5vw] overflow-hidden"
                                >
                                    <div className="text-white text-[1vw] leading-27.6">
                                        Submit
                                    </div>
                                </button>
                                <button
                                    onClick={onClose}
                                    className="mt-[0.75vw] flex items-center justify-center py-[0.7vw] w-1/2 bg-[#53975d] rounded-[0.5vw] overflow-hidden"
                                >
                                    <div className="text-white text-[1vw] leading-27.6">
                                        Close
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-[1vw] w-full">
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                Last Name <span className="text-red-600">*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full h-fit p-[0.8vw] rounded-[0.5vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                Address <span className="text-red-600">*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                Upload Resume <span className="text-red-600">*</span>
                            </div>
                            <input className={"rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"} type="file"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default JobApplicationPopUp;