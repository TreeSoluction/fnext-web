import RegisterHeader from "../components/RegisterHeader";
import RegisterBox from "../components/RegisterBox";

export default function Home() {
  return (
    <div>
      <RegisterHeader />
      <div className="flex justify-center items-center">
        <RegisterBox />
      </div>
    </div>
  );
}
