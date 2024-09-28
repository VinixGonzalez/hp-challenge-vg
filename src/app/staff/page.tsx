"use client";

import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useStaff } from "@/hooks/useStaff";
import Link from "next/link";
import Image from "next/image";
import { CgSpinner } from "react-icons/cg";

const StaffPage = () => {
  const { staff, loading, error } = useStaff();

  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <h2>Try Refresh the page!</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex gap-8 h-full items-center justify-center">
        <p>Loading...</p>
        <CgSpinner size={32} className="animate-spin" />
      </div>
    );
  }

  return (
    <main className="bg-bkg flex flex-col items-center justify-start p-4 sm:px-8 flex-1">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col gap-4 mb-12">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Staff" }]}
          />
          <h1 className="font-hp text-5xl text-center">Staff</h1>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {staff
              .filter((staff) => staff.image)
              .map((staff) => (
                <li
                  key={staff.id}
                  className="bg-white rounded shadow transform transition duration-200 hover:scale-105"
                >
                  <Link
                    href={`/characters/${staff.id}`}
                    className="flex flex-col items-center justify-center p-4 transition"
                  >
                    {staff.image && (
                      <Image
                        src={staff.image}
                        alt={staff.name}
                        width={150}
                        height={200}
                        className="rounded mb-2"
                      />
                    )}
                    <h2 className="text-lg font-semibold">{staff.name}</h2>
                    {staff.house && (
                      <p className="text-sm text-gray-600">
                        House: {staff.house}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default StaffPage;
