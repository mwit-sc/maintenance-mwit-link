import { Cog, Clock, Wrench } from "lucide-react"
import Image from "next/image"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 p-4 font-ibm-plex-sans-thai">
      <div className="relative w-full h-full absolute inset-0">
        <div className="absolute inset-0 bg-blueprint opacity-5"></div>
      </div>

      {/* Yellow decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-yellow-400/5 rounded-full blur-xl"></div>

      <div className="max-w-md w-full mx-auto bg-gray-900/80 backdrop-blur-sm rounded-xl border border-blue-500/20 shadow-2xl p-8 text-center space-y-8 relative z-10">
        {/* Yellow border accent */}
        <div className="absolute inset-0 rounded-xl border-2 border-yellow-400/20 -m-0.5"></div>

        {/* Logo with glowing effect */}
        <div className="relative flex items-center justify-center w-28 h-28 mx-auto">
          <div className="absolute w-full h-full rounded-full bg-blue-500/20 animate-pulse-slow"></div>
          <div className="absolute w-full h-full border-2 border-blue-500/50 rounded-full animate-spin-slow"></div>
          {/* Yellow glow behind logo */}
          <div className="absolute w-20 h-20 bg-yellow-400/20 rounded-full blur-md"></div>
          <div className="bg-blue-600 rounded-full p-3 shadow-lg shadow-blue-500/30 border-2 border-yellow-400/50">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20%281%29-UYO9K3sOHKEsm8yaFvQmQromdAA6ei.webp"
              alt="MWIT-LINK Logo"
              width={70}
              height={70}
              className="z-10"
            />
          </div>
        </div>

        {/* Maintenance text */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-yellow-400">ปรับปรุง</span>ระบบ
          </h1>
          <div className="flex items-center justify-center space-x-2 text-blue-400">
            <Cog className="w-5 h-5 animate-spin" />
            <span className="text-yellow-300">กำลังดำเนินการ</span>
            <Cog className="w-5 h-5 animate-spin-reverse" />
          </div>
          <p className="text-gray-300">ขณะนี้เรากำลังปรับปรุง MWIT-LINK เพื่อการใช้งานที่ดียิ่งขึ้น กรุณากลับมาใหม่ในภายหลัง</p>
        </div>

        {/* Progress bar with yellow */}
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-yellow-400 h-2.5 rounded-full w-3/4 animate-progress"></div>
        </div>

        {/* Estimated time with yellow accent */}
        <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
          <div className="flex items-center space-x-2 text-yellow-400 mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">เวลาที่คาดว่าจะเสร็จ</span>
          </div>
          <p className="text-sm text-gray-300">
            คาดว่าจะกลับมาใช้งานได้:
            <span className="font-semibold block text-white mt-1">1 พฤษภาคม 2567 เวลา 12:00 น.</span>
          </p>
        </div>

        {/* Contact info with yellow button */}
        <div className="text-sm text-gray-400 space-y-3">
          <p>หากต้องการความช่วยเหลือ กรุณาติดต่อ</p>
          <a
            href="mailto:support@mwit-link.com"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-medium px-4 py-2 rounded-md hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-500/20"
          >
            support@mwit-link.com
          </a>
        </div>

        {/* Tools with yellow accent */}
        <div className="flex justify-center items-center space-x-8 py-2">
          <div className="animate-bounce-slow">
            <Wrench className="w-6 h-6 text-blue-400" />
          </div>
          <div className="animate-pulse">
            <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
              <span className="text-yellow-400 font-bold">!</span>
            </div>
          </div>
          <div className="animate-bounce-slow delay-300">
            <Cog className="w-6 h-6 text-blue-400" />
          </div>
        </div>

        {/* Footer with yellow accent */}
        <div className="text-xs text-gray-500 pt-4 border-t border-gray-800">
          © 2025 MWIT. <span className="text-yellow-500/70">คณะกรรมการสภานักเรียน รุ่นที่ 33</span>
        </div>
      </div>
    </div>
  )
}
