// app/page.tsx (Main route "/")

import { redirect } from "next/navigation";

export default function Main() {
  const isAuthenticated = true; // authentication check

  if (isAuthenticated) {
    redirect("/home");
  } else {
    redirect("/login");
  }

  return null;
}
