import { NavigationBar } from "../../components/NavigationBar";
import SignUpForm from "../SignUp/SignUp";

export function Home() {
  return (
    <>
      <NavigationBar />
      <div
        className="flex flex-col md:flex-row"
        style={{ height: `calc(100vh - 82px)` }}
      >
        <div
          className="md:flex-1 flex items-center justify-center  p-8"
          style={{ backgroundColor: "#0D2F56" }}
        >
          <img
            src="./images/Rectangle17.png"
            alt="Profile"
            className="rounded-full"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
        <div className="md:flex-1 flex items-center justify-center">
          <div className="w-full max-w-md p-8">
            <h1 className="text-center text-blue-950 text-2xl font-normal font-['Lato'] mb-10">
              Sign up to test MINDy™
            </h1>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
}
