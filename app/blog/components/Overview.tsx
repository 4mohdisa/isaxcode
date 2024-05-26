import Image from 'next/image';
import Link from 'next/link';

export default function Overview() {
    return (
      <div className="bg-black p-8 m-auto">
        <h1 className="text-5xl font-bold text-center mb-12">Overview</h1>
        <div className="grid grid-cols-3 gap-4">
          <div
            className="col-span-2 row-span-2 bg-cover bg-center rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/placeholder.svg')",
            }}
          >
            <div className="flex flex-col justify-between h-full p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="text-white">
                <div className="text-sm uppercase">Research</div>
                <div className="text-xs">May 13, 2024</div>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <span className="font-bold text-lg">Hello GPT-40</span>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-center rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/placeholder.svg')",
            }}
          >
            <div className="flex flex-col justify-between h-full p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="text-white">
                <div className="text-sm uppercase">Company</div>
                <div className="text-xs">May 8, 2024</div>
              </div>
              <div className="text-white">
                <span className="font-bold">Introducing the Model Spec</span>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-center rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/placeholder.svg')",
            }}
          >
            <div className="flex flex-col justify-between h-full p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="text-white">
                <div className="text-sm uppercase">Product</div>
                <div className="text-xs">May 13, 2024</div>
              </div>
              <div className="text-white">
                <span className="font-bold">Introducing GPT-40 and more tools to ChatGPT free users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }