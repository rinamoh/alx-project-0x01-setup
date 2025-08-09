import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name} (@{username})</h2>
      <p className="text-gray-600 mb-2">Email: <a href={`mailto:${email}`} className="text-blue-600">{email}</a></p>
      <p className="text-gray-600 mb-2">Phone: {phone}</p>
      <p className="text-gray-600 mb-2">Website: <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">{website}</a></p>

      <div className="mt-4 bg-gray-100 p-4 rounded">
        <h3 className="font-semibold mb-1">Address</h3>
        <p>{address.street}, {address.suite}</p>
        <p>{address.city} - {address.zipcode}</p>
        <p>Coordinates: {address.geo.lat}, {address.geo.lng}</p>
      </div>

      <div className="mt-4 bg-gray-100 p-4 rounded">
        <h3 className="font-semibold mb-1">Company</h3>
        <p>{company.name}</p>
        <p className="italic text-sm">"{company.catchPhrase}"</p>
        <p className="text-sm">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
