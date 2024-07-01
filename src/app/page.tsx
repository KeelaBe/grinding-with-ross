"use client";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	const handleClick = () => {
	console.log('Hello');
	router.push('/blog');
  };

  return (
    <>
      <div className="text-lime-400">Home</div>
      <button onClick={handleClick}>Go Blog</button>
    </>

  )
}
