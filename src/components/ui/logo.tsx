import { DashboardIcon } from "@radix-ui/react-icons"



export default function Logo() {
  return (
    <div className="flex place-items-center align-items-center gap-1.5 text-2xl p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text ">
      <DashboardIcon className="aspect-square scale-110 text-cyan-500" />
      <span className="font-mono text-cyan-500">Blog</span>
    </div>
  )
}
