import { useRouter } from "next/router";
import Link from "next/link";

export const LanguageSwitcher = () => {
  const locales = useRouter().locales;
  const route = useRouter().asPath;

  console.log(useRouter());

  return (
    <ul className="flex">
      <li className="self-start p-1 text-lg text-gray-400 ">
        <Link href={`/${route}`} locale="fr">
          <a className="hover:text-opv-pink-500"> FR</a>
        </Link>{" "}
        |{" "}
        <Link href={`/en/${route}`}>
          <a className="hover:text-opv-pink-500">EN</a>
        </Link>
      </li>
    </ul>
  );
};

export default LanguageSwitcher;
