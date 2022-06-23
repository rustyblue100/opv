import { useRouter } from "next/router";
import Link from "next/link";

export const LanguageSwitcher = () => {
  const locales = useRouter().locales;

  console.log(locales);

  return (
    <ul className="flex">
      <li className="self-start p-1 text-lg text-gray-400 hover:text-opv-pink-500">
        <Link href="/">
          <a> FR</a>
        </Link>{" "}
        |{" "}
        <Link href={"en"}>
          <a>EN</a>
        </Link>
      </li>
    </ul>
  );
};

export default LanguageSwitcher;
