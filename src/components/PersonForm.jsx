"use client";
import { useEffect, useState } from "react";
import { state_arr, s_a } from "@/utils/cities";
import {
  phoneValidate,
  emailValidate,
  firstNameValidate,
  lastNameValidate,
} from "@/utils/form-validate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "./Spinner";
import Link from "next/link";

const PersonForm = ({
  register,
  onSubmit,
  errors,
  control,
  loading,
  Controller,
  personData,
}) => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    if (personData) {
      setSelectedState(personData.state);
      const cityOptions =
        s_a[state_arr.indexOf(personData.state) + 1]?.split(" | ") || [];
      setCities(cityOptions);
    }
  }, [personData]);

  useEffect(() => {
    if (selectedState) {
      const cityOptions =
        s_a[state_arr.indexOf(selectedState) + 1].split(" | ");
      setCities(cityOptions);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const togglePhoneNumberVisibility = () => {
    setShowPhoneNumber((prevState) => !prevState);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 md:space-y-6 flex flex-col items-center "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        <div className="flex flex-col md:space-y-1">
          <label htmlFor="firstName" className="text-sm md:text-base px-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={personData && personData.firstName}
            placeholder="Enter your first name"
            {...register("firstName", firstNameValidate)}
            className="outline-none  bg-transparent border-b-2 rounded-md p-2 focus:border-[#318ce7] hover:border-[#318ce7]/40 w-[250px]  transition duration-250 "
          />
          {errors.firstName && (
            <p className="text-red-400 px-2 text-sm tracking-wider">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="flex flex-col md:space-y-1">
          <label htmlFor="lastName" className="text-sm md:text-base  px-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            defaultValue={personData && personData.lastName}
            {...register("lastName", lastNameValidate)}
            className="outline-none  bg-transparent border-b-2 rounded-md p-2 focus:border-[#318ce7] hover:border-[#318ce7]/40 w-[250px]  transition duration-250 "
          />
          {errors.lastName && (
            <p className="text-red-400 px-2 text-sm  tracking-wider">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        <div className="flex flex-col  md:space-y-1">
          <label htmlFor="email" className="text-sm md:text-base  px-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={personData && personData.email}
            placeholder="Enter your email"
            {...register("email", emailValidate)}
            className="outline-none  bg-transparent  border-b-2 rounded-md p-2 focus:border-[#318ce7] hover:border-[#318ce7]/40 w-[250px]  transition duration-250 "
          />
          {errors.email && (
            <p className="text-red-400 px-2 text-sm  tracking-wider">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col md:space-y-1 relative">
          <label htmlFor="phone" className="text-sm md:text-base px-2">
            Phone
          </label>
          <div className="relative">
            <input
              type={showPhoneNumber ? "text" : "password"}
              id="phone"
              name="phone"
              defaultValue={personData && personData.phone}
              placeholder="Enter 10 digit number"
              {...register("phone", phoneValidate)}
              mask="999-999-9999"
              className="outline-none bg-transparent border-b-2 rounded-md p-2 pr-10 focus:border-[#318ce7] hover:border-[#318ce7]/40 w-[250px] transition duration-250"
            />
            <button
              type="button"
              onClick={togglePhoneNumberVisibility}
              className="absolute top-2 right-2 text-gray-500 focus:outline-none"
              aria-label={
                showPhoneNumber ? "Hide phone number" : "Show phone number"
              }
            >
              {showPhoneNumber ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </button>
          </div>
          {errors.phone && (
            <p className="text-sm text-red-400 px-2  tracking-wider">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        <div className="relative flex flex-col  md:space-y-1">
          <label htmlFor="state" className="text-sm md:text-base px-2">
            State
          </label>
          <Controller
            name="state"
            control={control}
            defaultValue={personData ? personData.state : ""}
            rules={{ required: true }}
            render={({ field }) => (
              <select
                {...field}
                id="state"
                className="outline-none bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.08)] cursor-pointer border-b-2 rounded-md p-2 focus:border-[#318ce7] hover:border-[#318ce7]/40 w-[250px] transition duration-300"
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  field.onChange(e.target.value);
                }}
              >
                <option value="" className="bg-[rgba(36,36,36,0.9)]">
                  Select State
                </option>
                {state_arr.map((stateName) => (
                  <option
                    key={stateName}
                    value={stateName}
                    className="bg-[rgba(36,36,36,0.9)]"
                  >
                    {stateName}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.state && (
            <p className="text-red-400 text-sm px-2  tracking-wider">
              State is required.
            </p>
          )}
        </div>

        <div className="relative flex flex-col  md:space-y-1">
          <label htmlFor="city" className="text-sm md:text-base px-2">
            City
          </label>
          <Controller
            name="city"
            control={control}
            rules={{ required: true }}
            defaultValue={personData ? personData.city : ""}
            render={({ field }) => (
              <select
                {...field}
                id="city"
                className="outline-none bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.08)] cursor-pointer border-b-2 rounded-md p-2 focus:border-[#318ce7] hover:border-[#318ce7]/40 w-[250px] transition duration-300"
              >
                <option value="" className="bg-[rgba(36,36,36,0.9)]">
                  {selectedState ? "Select City" : "Select State"}
                </option>
                {cities.map((cityName) => (
                  <option
                    key={cityName}
                    value={cityName}
                    className="bg-[rgba(36,36,36,0.9)]"
                  >
                    {cityName}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.city && (
            <p className="text-red-400 px-2 text-sm  tracking-wider">
              City is required.
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center gap-8 w-full">
        {personData && (
          <Link href="/list">
            <button
              type="button"
              className="bg-red-500 mt-4 w-fit md:w-[200px] text-white text-sm md:text-base py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              disabled={loading}
            >
              Cancel
            </button>
          </Link>
        )}
        <button
          type="submit"
          className="bg-blue-700 w-fit md:w-[200px] text-white py-2 px-8 text-sm md:text-base rounded-md hover:bg-blue-600 transition duration-300 mt-4"
          disabled={loading}
        >
          {loading ? (
            <LoadingSpinner w="43px" h="25px" />
          ) : personData ? (
            "Edit"
          ) : (
            "Add Person"
          )}
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
