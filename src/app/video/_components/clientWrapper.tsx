'use client';
import dynamic from "next/dynamic";

const CondenseVideo = dynamic(
  () => import("./condenceVideo"),
  {
    ssr: false,
  }
);

export const ClientWrapper = () => {
  return <CondenseVideo />;
};