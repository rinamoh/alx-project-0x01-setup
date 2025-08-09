import { UserData, UserModalProps } from "@/interfaces";
import React, {useState} from "react";

const UserModal:React.FC<UserModalProps> = ({onClose, onSubmit , initialUser}) => {

    const [user, setUser] = useState<UserData> ( initialUser ?? {
    
         id: 1,
          name: "",
          username: "",
          email: "",
          address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                lat: "",
                lng: "",
                },
            },
          phone: "",
          website: "",
            company: {
                name: "",
                catchPhrase: "",
                bs: "",
            },


    });

    const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const {name, value} = e.target;
       if (name.includes(".")) {
      const keys = name.split(".");
      // Let's safely update nested object dynamically
            setUser((prev) => {
                let updated = { ...prev } as any;
                let current = updated;

                for (let i = 0; i < keys.length - 1; i++) {
                current[keys[i]] = { ...current[keys[i]] };
                current = current[keys[i]];
                }
                current[keys[keys.length - 1]] = value;
                return updated;
            });
            } else {
            setUser((prev) => ({ ...prev, [name]: value }));
            }
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

   return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          {initialUser ? "Edit User" : "Add New User"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name & Username */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block font-semibold mb-1 text-gray-700"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="username"
                className="block font-semibold mb-1 text-gray-700"
              >
                Username *
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
                placeholder="Username"
                required
                className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block font-semibold mb-1 text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="phone"
                className="block font-semibold mb-1 text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label
              htmlFor="website"
              className="block font-semibold mb-1 text-gray-700"
            >
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              placeholder="Website URL"
              className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Address Section */}
          <fieldset className="border rounded p-4">
            <legend className="font-bold text-gray-800 mb-3">Address</legend>

            <div className="flex flex-col gap-4">
              {inputField("address.street", "Street", user.address.street, handleChange, true)}
              {inputField("address.suite", "Suite", user.address.suite, handleChange, false)}
              {inputField("address.city", "City", user.address.city, handleChange, true)}
              {inputField("address.zipcode", "Zipcode", user.address.zipcode, handleChange, true)}

              {/* Geo coords inputs */}
              <div className="flex gap-4">
                {inputField("address.geo.lat", "Latitude", user.address.geo.lat, handleChange, false, "flex-1")}
                {inputField("address.geo.lng", "Longitude", user.address.geo.lng, handleChange, false, "flex-1")}
              </div>
            </div>
          </fieldset>

          {/* Company Section */}
          <fieldset className="border rounded p-4">
            <legend className="font-bold text-gray-800 mb-3">Company</legend>

            <div className="flex flex-col gap-4">
              {inputField("company.name", "Company Name", user.company.name, handleChange, false)}
              {inputField("company.catchPhrase", "Catch Phrase", user.company.catchPhrase, handleChange, false)}
              {inputField("company.bs", "BS", user.company.bs, handleChange, false)}
            </div>
          </fieldset>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {initialUser ? "Save Changes" : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Helper to render labeled inputs consistently
function inputField(
  name: string,
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required = false,
  extraClass = ""
) {
  return (
    <div className={extraClass}>
      <label
        htmlFor={name}
        className="block font-semibold mb-1 text-gray-700"
      >
        {label} {required && "*"}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default UserModal;