import Link from "next/link";
import './login.css';

export default function Login() {
  return (
    <div className="login-container">
      <div className="logo-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/1/12/Indian_Institute_of_Technology%2C_Jammu_Logo.png" // Replace with the actual logo path
          alt="Pragyaan Logo"
        />
        <h1>PRAGYAAN</h1>
      </div>
      <div className="links-section">
        <Link href="/login/leader">
          Login Leader
        </Link>
        <Link href="/login/school">
          Login School
        </Link>
        <Link href="/login/admin">
          Login Admin
        </Link>
      </div>
    </div>
  );
}
