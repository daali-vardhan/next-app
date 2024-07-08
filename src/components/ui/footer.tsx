import { cn } from "@/lib/utils"
export default function footer({className}:{className?:string}) {
  return (
    <div className={cn(
      className,
      'w-full p-4 grid place-items-center bg-secondary'
    )}
    >footer</div>
  )
}
