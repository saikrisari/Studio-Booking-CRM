import Link from "next/link";

export default function Home() {
  return <main>
    Home
    <Link href="/clients">Clients</Link>
    <Link href="/dashboard">Dashboard</Link>
    <Link href="/services">Services</Link>
    <Link href="/appointments">Appointments</Link>
  </main>;
}