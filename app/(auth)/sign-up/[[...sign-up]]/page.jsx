import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return ( <div className="flex h-screen">
        {/* Left side image area */}
        <div
          className="w-1/2 bg-cover bg-center relative"
          style={{ backgroundImage: 'url("/signinpage.jpg")' }}
        >
          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Expense Tracker 🌟</h1>
            <p className="max-w-md">      
Take control of your finances effortlessly. Track your spending, manage your savings, and reach your financial goals — all in one place. Join us and make every penny count!
            </p>
          </div>
        </div>
  
        {/* Right side sign-in component */}
        <div className="w-1/2 flex items-center justify-center bg-gray-50">
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <SignUp/>
          </div>
        </div>
      </div>
    
    );
}
