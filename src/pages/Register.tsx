import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

interface User {
  email: string;
  password: string;
}

function Register() {
  const [user, setUser] = useState<User>({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering with:", user);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="flex py-4 md:px-20 px-10 justify-between">
        <div><Logo size={'lg'}/></div>
        <a href='/login'><div className="bg-black rounded-md py-2 px-6 text-sm text-white">Login</div></a>
      </div>

      <section className="flex items-center justify-center min-h-[88vh] px-5 md:px-1">
        <main className="w-full max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" >
            Take notes with AI
            <br />
            share and study with friends
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="w-full flex flex-col space-y-4">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="rounded-md border border-gray-300 h-10 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Email"
                required
              />

              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
                className="rounded-md border border-gray-300 h-10 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Password"
                required
              />

              <button
                type="submit"
                className="rounded-md text-white bg-black h-10 text-sm font-medium hover:bg-gray-800 transition"
              >
                Create account
              </button>
            </div>

            <div className="text-sm text-gray-400 my-4">or</div>

            <div className="w-full space-y-3">
              <button
                type="button"
                className="w-full rounded-md border border-gray-300 h-10 flex items-center justify-center space-x-3 hover:bg-gray-100 transition"
              >
                <img
                  className="h-5 w-5"
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="Google logo"
                />
                <span className="text-sm font-medium">Continue with Google</span>
              </button>

              <button
                type="button"
                className="w-full rounded-md border border-gray-300 h-10 flex items-center justify-center space-x-3 hover:bg-gray-100 transition"
              >
                <FaApple className="text-xl" />
                <span className="text-sm font-medium">Continue with Apple</span>
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-6 max-w-sm">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-black hover:text-blue-600 underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-black hover:text-blue-600 underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </main>
      </section>
    </div>
  );
}

export default Register;