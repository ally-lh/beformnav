"use client";
import React from "react";
import Link from "next/link";

interface FormRenderProps {
  title: string;
  description: string | null;
  id: string;
}

export default function FormRender(props: FormRenderProps) {
  return (
    <Link
      href={`/form/${props.id} `}
      className="overflow-hidden bg-white shadow sm:rounded-lg"
    >
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {props.title}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {props.description}
        </p>
      </div>
    </Link>
  );
}
