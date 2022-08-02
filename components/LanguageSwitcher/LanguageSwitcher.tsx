import { useRouter } from "next/router";
import Link from "next/link";

export const LanguageSwitcher = () => {
  const route = useRouter().asPath;

  return (
    <ul className="-ml-1 flex	 list-none p-0 no-underline">
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
