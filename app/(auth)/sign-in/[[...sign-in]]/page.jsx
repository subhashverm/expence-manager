import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return ( <div className="flex h-screen">
      {/* Left side image area */}
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/signinpage.jpg")' }}
      >
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Manage Your Money Smarter 💸</h1>
          <p className="max-w-md">
          Welcome to Expense Tracker — your partner in building better financial habits. Stay on top of your expenses, save more, and plan your future with confidence.
          </p>
        </div>
      </div>

      {/* Right side sign-in component */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <SignIn />
        </div>
      </div>
    </div>
  
  );
}
