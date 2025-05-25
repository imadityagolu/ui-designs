import { Antenna  } from 'lucide-react';

function NoPageFound() {

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Antenna className="h-15 sm:h-15 w-15 sm:w-15 text-red-500" />
      <p className="text-red-500 text-2xl font-bold"> Error 404 : Page Not Found</p>
    </div>
    </>
  )
}

export default NoPageFound
