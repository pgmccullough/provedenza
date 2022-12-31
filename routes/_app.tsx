import Header from "../components/Header/Header.tsx";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="../style/app.module.css" />
      <Header />
      {children}
    </>
  );
}
