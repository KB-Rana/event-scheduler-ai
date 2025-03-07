"use client";
import Link from "next/link"


export default function Privacybtn() {
  const openbtn = () => {
    window.open(
      "https://docs.google.com/document/d/1CqFhNf0PGhyQl4KrE28IhRhUVjTBDHskdA6RjF5diS4/edit?tab=t.0",
      "_blank"
    );
  };
  return (
    <>
      <div className="fixed bottom-4 right-4 mr-4">
        <div>
        <Link href="/privacy-policy">

          <button
            className=" text-gray-900  bg-white text-md border border-spacing-0 border-gray-950 p-2"  
            >
            Privacy Policy
          </button>
            </Link>
        </div>
      </div>
    </>
  );
}
