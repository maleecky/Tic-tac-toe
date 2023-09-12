import {
  SAVE_TOGGLE,
  DIFFICULTY_LEVEL_TOGGLE,
  THEME_TOGGLE,
} from "../../../../redux/actions/GlobalActions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuOptions from "../MenuOptions";

export default function Header() {
  const [isOptionVisible, setisOptionVisible] = useState(false);
  const dispatch = useDispatch();
  const saveState = useSelector((state) => state.saveToggleReducer);
  const difficultyState = useSelector((state) => state.difficultLevelToggle);
  const isLightTheme = useSelector((state) => state.themeToggle);

  useEffect(() => {}, [dispatch]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const save = localStorage.getItem("savePreference");

    if (save === "ON") {
      dispatch({
        type: SAVE_TOGGLE,
      });

      if (theme === "dark") {
        dispatch({
          type: THEME_TOGGLE,
        });
      }
    }
  }, [dispatch]);

  function showOptions() {
    setisOptionVisible(true);
  }
  function hideOptions() {
    setisOptionVisible(false);
  }
  return (
    <header className="flex w-full items-center justify-between ">
      <div>
        <h1 className="font-medium">
          <Link to={"/"}>
            Tic-tac-toe<span className="text-h1CrlMix">.com</span>
          </Link>
        </h1>
      </div>
      <div>
        <svg
          className="w-12 hidden md:block"
          width="70"
          height="80"
          viewBox="0 0 70 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 61.5L14.7 44.52L3.72 28.5H10.08L16.62 38.7C16.9 39.14 17.16 39.62 17.4 40.14C17.68 40.66 17.9 41.08 18.06 41.4C18.18 41.08 18.36 40.66 18.6 40.14C18.88 39.62 19.16 39.14 19.44 38.7L26.04 28.5H32.34L21.36 44.58L33 61.5H26.64L19.56 50.7C19.28 50.26 19 49.76 18.72 49.2C18.48 48.6 18.26 48.12 18.06 47.76C17.9 48.12 17.66 48.6 17.34 49.2C17.06 49.76 16.76 50.26 16.44 50.7L9.3 61.5H3Z"
            fill="black"
          />
          <path
            d="M3 61.5L2.17655 60.9326L1.09655 62.5H3V61.5ZM14.7 44.52L15.5234 45.0874L15.9134 44.5215L15.5249 43.9547L14.7 44.52ZM3.72 28.5V27.5H1.82227L2.89515 29.0653L3.72 28.5ZM10.08 28.5L10.9218 27.9602L10.6267 27.5H10.08V28.5ZM16.62 38.7L17.4637 38.1631L17.4618 38.1602L16.62 38.7ZM17.4 40.14L16.492 40.5591L16.5049 40.587L16.5195 40.6141L17.4 40.14ZM18.06 41.4L17.1656 41.8472L18.1911 43.8983L18.9963 41.7511L18.06 41.4ZM18.6 40.14L17.7195 39.6659L17.7049 39.693L17.692 39.7209L18.6 40.14ZM19.44 38.7L18.6004 38.1567L18.5963 38.1631L19.44 38.7ZM26.04 28.5V27.5H25.496L25.2004 27.9567L26.04 28.5ZM32.34 28.5L33.1658 29.0639L34.2337 27.5H32.34V28.5ZM21.36 44.58L20.5342 44.0161L20.1477 44.5821L20.5361 45.1468L21.36 44.58ZM33 61.5V62.5H34.9017L33.8239 60.9332L33 61.5ZM26.64 61.5L25.8037 62.0483L26.0998 62.5H26.64V61.5ZM19.56 50.7L18.7163 51.2369L18.7237 51.2482L19.56 50.7ZM18.72 49.2L17.7915 49.5714L17.807 49.61L17.8256 49.6472L18.72 49.2ZM18.06 47.76L18.9342 47.2744L17.9605 45.5217L17.1462 47.3539L18.06 47.76ZM17.34 49.2L16.4576 48.7294L16.4515 48.741L16.4456 48.7528L17.34 49.2ZM16.44 50.7L15.6313 50.1118L15.6181 50.1299L15.6058 50.1485L16.44 50.7ZM9.3 61.5V62.5H9.83767L10.1342 62.0515L9.3 61.5ZM3.82345 62.0674L15.5234 45.0874L13.8766 43.9526L2.17655 60.9326L3.82345 62.0674ZM15.5249 43.9547L4.54485 27.9347L2.89515 29.0653L13.8751 45.0853L15.5249 43.9547ZM3.72 29.5H10.08V27.5H3.72V29.5ZM9.23818 29.0398L15.7782 39.2398L17.4618 38.1602L10.9218 27.9602L9.23818 29.0398ZM15.7763 39.2369C16.0301 39.6356 16.269 40.0758 16.492 40.5591L18.308 39.7209C18.051 39.1642 17.7699 38.6444 17.4637 38.1631L15.7763 39.2369ZM16.5195 40.6141C16.7974 41.1301 17.012 41.5401 17.1656 41.8472L18.9544 40.9528C18.788 40.6199 18.5626 40.1899 18.2805 39.6659L16.5195 40.6141ZM18.9963 41.7511C19.1039 41.4643 19.2724 41.0695 19.508 40.5591L17.692 39.7209C17.4476 40.2505 17.2561 40.6957 17.1237 41.0489L18.9963 41.7511ZM19.4805 40.6141C19.7504 40.1127 20.0183 39.6539 20.2837 39.2369L18.5963 38.1631C18.3017 38.6261 18.0096 39.1273 17.7195 39.6659L19.4805 40.6141ZM20.2796 39.2432L26.8796 29.0433L25.2004 27.9567L18.6004 38.1567L20.2796 39.2432ZM26.04 29.5H32.34V27.5H26.04V29.5ZM31.5142 27.9361L20.5342 44.0161L22.1858 45.1439L33.1658 29.0639L31.5142 27.9361ZM20.5361 45.1468L32.1761 62.0668L33.8239 60.9332L22.1839 44.0132L20.5361 45.1468ZM33 60.5H26.64V62.5H33V60.5ZM27.4763 60.9517L20.3963 50.1517L18.7237 51.2482L25.8037 62.0483L27.4763 60.9517ZM20.4037 50.1631C20.1453 49.7572 19.882 49.2879 19.6144 48.7528L17.8256 49.6472C18.118 50.2321 18.4147 50.7628 18.7163 51.2369L20.4037 50.1631ZM19.6485 48.8286C19.4005 48.2088 19.1628 47.6858 18.9342 47.2744L17.1858 48.2456C17.3572 48.5542 17.5595 48.9912 17.7915 49.5714L19.6485 48.8286ZM17.1462 47.3539C17.0004 47.6819 16.7732 48.1378 16.4576 48.7294L18.2224 49.6706C18.5468 49.0622 18.7996 48.5581 18.9738 48.1661L17.1462 47.3539ZM16.4456 48.7528C16.1866 49.2707 15.9145 49.7224 15.6313 50.1118L17.2487 51.2882C17.6055 50.7976 17.9334 50.2493 18.2344 49.6472L16.4456 48.7528ZM15.6058 50.1485L8.46582 60.9485L10.1342 62.0515L17.2742 51.2515L15.6058 50.1485ZM9.3 60.5H3V62.5H9.3V60.5Z"
            fill={isLightTheme ? "#1e1e1e" : "#fdfdfd"}
          />
          <path
            d="M3 61.5L2.17655 60.9326L1.09655 62.5H3V61.5ZM14.7 44.52L15.5234 45.0874L15.9134 44.5215L15.5249 43.9547L14.7 44.52ZM3.72 28.5V27.5H1.82227L2.89515 29.0653L3.72 28.5ZM10.08 28.5L10.9218 27.9602L10.6267 27.5H10.08V28.5ZM16.62 38.7L17.4637 38.1631L17.4618 38.1602L16.62 38.7ZM17.4 40.14L16.492 40.5591L16.5049 40.587L16.5195 40.6141L17.4 40.14ZM18.06 41.4L17.1656 41.8472L18.1911 43.8983L18.9963 41.7511L18.06 41.4ZM18.6 40.14L17.7195 39.6659L17.7049 39.693L17.692 39.7209L18.6 40.14ZM19.44 38.7L18.6004 38.1567L18.5963 38.1631L19.44 38.7ZM26.04 28.5V27.5H25.496L25.2004 27.9567L26.04 28.5ZM32.34 28.5L33.1658 29.0639L34.2337 27.5H32.34V28.5ZM21.36 44.58L20.5342 44.0161L20.1477 44.5821L20.5361 45.1468L21.36 44.58ZM33 61.5V62.5H34.9017L33.8239 60.9332L33 61.5ZM26.64 61.5L25.8037 62.0483L26.0998 62.5H26.64V61.5ZM19.56 50.7L18.7163 51.2369L18.7237 51.2482L19.56 50.7ZM18.72 49.2L17.7915 49.5714L17.807 49.61L17.8256 49.6472L18.72 49.2ZM18.06 47.76L18.9342 47.2744L17.9605 45.5217L17.1462 47.3539L18.06 47.76ZM17.34 49.2L16.4576 48.7294L16.4515 48.741L16.4456 48.7528L17.34 49.2ZM16.44 50.7L15.6313 50.1118L15.6181 50.1299L15.6058 50.1485L16.44 50.7ZM9.3 61.5V62.5H9.83767L10.1342 62.0515L9.3 61.5ZM3.82345 62.0674L15.5234 45.0874L13.8766 43.9526L2.17655 60.9326L3.82345 62.0674ZM15.5249 43.9547L4.54485 27.9347L2.89515 29.0653L13.8751 45.0853L15.5249 43.9547ZM3.72 29.5H10.08V27.5H3.72V29.5ZM9.23818 29.0398L15.7782 39.2398L17.4618 38.1602L10.9218 27.9602L9.23818 29.0398ZM15.7763 39.2369C16.0301 39.6356 16.269 40.0758 16.492 40.5591L18.308 39.7209C18.051 39.1642 17.7699 38.6444 17.4637 38.1631L15.7763 39.2369ZM16.5195 40.6141C16.7974 41.1301 17.012 41.5401 17.1656 41.8472L18.9544 40.9528C18.788 40.6199 18.5626 40.1899 18.2805 39.6659L16.5195 40.6141ZM18.9963 41.7511C19.1039 41.4643 19.2724 41.0695 19.508 40.5591L17.692 39.7209C17.4476 40.2505 17.2561 40.6957 17.1237 41.0489L18.9963 41.7511ZM19.4805 40.6141C19.7504 40.1127 20.0183 39.6539 20.2837 39.2369L18.5963 38.1631C18.3017 38.6261 18.0096 39.1273 17.7195 39.6659L19.4805 40.6141ZM20.2796 39.2432L26.8796 29.0433L25.2004 27.9567L18.6004 38.1567L20.2796 39.2432ZM26.04 29.5H32.34V27.5H26.04V29.5ZM31.5142 27.9361L20.5342 44.0161L22.1858 45.1439L33.1658 29.0639L31.5142 27.9361ZM20.5361 45.1468L32.1761 62.0668L33.8239 60.9332L22.1839 44.0132L20.5361 45.1468ZM33 60.5H26.64V62.5H33V60.5ZM27.4763 60.9517L20.3963 50.1517L18.7237 51.2482L25.8037 62.0483L27.4763 60.9517ZM20.4037 50.1631C20.1453 49.7572 19.882 49.2879 19.6144 48.7528L17.8256 49.6472C18.118 50.2321 18.4147 50.7628 18.7163 51.2369L20.4037 50.1631ZM19.6485 48.8286C19.4005 48.2088 19.1628 47.6858 18.9342 47.2744L17.1858 48.2456C17.3572 48.5542 17.5595 48.9912 17.7915 49.5714L19.6485 48.8286ZM17.1462 47.3539C17.0004 47.6819 16.7732 48.1378 16.4576 48.7294L18.2224 49.6706C18.5468 49.0622 18.7996 48.5581 18.9738 48.1661L17.1462 47.3539ZM16.4456 48.7528C16.1866 49.2707 15.9145 49.7224 15.6313 50.1118L17.2487 51.2882C17.6055 50.7976 17.9334 50.2493 18.2344 49.6472L16.4456 48.7528ZM15.6058 50.1485L8.46582 60.9485L10.1342 62.0515L17.2742 51.2515L15.6058 50.1485ZM9.3 60.5H3V62.5H9.3V60.5Z"
            fill={isLightTheme ? "#1e1e1e" : "#fdfdfd"}
            fillOpacity="0.2"
          />
          <path
            d="M52.6034 64.02C50.2808 64.02 48.2528 63.5693 46.5194 62.668C44.8208 61.732 43.5034 60.432 42.5674 58.768C41.6314 57.0693 41.1634 55.0933 41.1634 52.84V36.2C41.1634 33.912 41.6314 31.936 42.5674 30.272C43.5034 28.608 44.8208 27.3253 46.5194 26.424C48.2528 25.488 50.2808 25.02 52.6034 25.02C54.9608 25.02 56.9888 25.488 58.6874 26.424C60.3861 27.3253 61.7034 28.608 62.6394 30.272C63.5754 31.936 64.0434 33.912 64.0434 36.2V52.84C64.0434 55.0933 63.5754 57.0693 62.6394 58.768C61.7034 60.432 60.3688 61.732 58.6354 62.668C56.9368 63.5693 54.9261 64.02 52.6034 64.02ZM52.6034 60.016C54.6834 60.016 56.3474 59.3573 57.5954 58.04C58.8781 56.688 59.5194 54.9547 59.5194 52.84V36.2C59.5194 34.0853 58.8781 32.3693 57.5954 31.052C56.3474 29.7 54.6834 29.024 52.6034 29.024C50.5234 29.024 48.8421 29.7 47.5594 31.052C46.3114 32.3693 45.6874 34.0853 45.6874 36.2V52.84C45.6874 54.9547 46.3114 56.688 47.5594 58.04C48.8421 59.3573 50.5234 60.016 52.6034 60.016ZM52.6034 47.588C51.6674 47.588 50.9048 47.2933 50.3154 46.704C49.7608 46.1147 49.4834 45.3347 49.4834 44.364C49.4834 43.428 49.7608 42.6827 50.3154 42.128C50.9048 41.5387 51.6674 41.244 52.6034 41.244C53.5394 41.244 54.2848 41.5387 54.8394 42.128C55.4288 42.6827 55.7234 43.428 55.7234 44.364C55.7234 45.3347 55.4288 46.1147 54.8394 46.704C54.2848 47.2933 53.5394 47.588 52.6034 47.588Z"
            fill="black"
          />
          <path
            d="M46.5194 62.668L46.0368 63.5438L46.0474 63.5497L46.0581 63.5552L46.5194 62.668ZM42.5674 58.768L41.6915 59.2506L41.6958 59.2583L42.5674 58.768ZM42.5674 30.272L41.6958 29.7817L42.5674 30.272ZM46.5194 26.424L46.9881 27.3074L46.9946 27.3039L46.5194 26.424ZM58.6874 26.424L58.2048 27.2998L58.2117 27.3036L58.2187 27.3073L58.6874 26.424ZM62.6394 30.272L63.511 29.7817L62.6394 30.272ZM62.6394 58.768L63.511 59.2583L63.5153 59.2506L62.6394 58.768ZM58.6354 62.668L59.1041 63.5514L59.1106 63.5479L58.6354 62.668ZM57.5954 58.04L56.87 57.3517L56.8695 57.3523L57.5954 58.04ZM57.5954 31.052L56.8606 31.7303L56.8697 31.7401L56.8789 31.7496L57.5954 31.052ZM47.5594 31.052L46.834 30.3637L46.8335 30.3643L47.5594 31.052ZM47.5594 58.04L46.8246 58.7183L46.8337 58.7281L46.8429 58.7376L47.5594 58.04ZM50.3154 46.704L49.5872 47.3894L49.5976 47.4004L49.6083 47.4111L50.3154 46.704ZM50.3154 42.128L51.0225 42.8351L50.3154 42.128ZM54.8394 42.128L54.1112 42.8134L54.132 42.8354L54.1541 42.8562L54.8394 42.128ZM54.8394 46.704L54.1323 45.9969L54.1216 46.0076L54.1112 46.0186L54.8394 46.704ZM52.6034 63.02C50.4112 63.02 48.547 62.5952 46.9808 61.7808L46.0581 63.5552C47.9585 64.5434 50.1503 65.02 52.6034 65.02V63.02ZM47.002 61.7922C45.4636 60.9445 44.2822 59.7768 43.439 58.2777L41.6958 59.2583C42.7246 61.0872 44.1779 62.5195 46.0368 63.5438L47.002 61.7922ZM43.4433 58.2854C42.601 56.7569 42.1634 54.9521 42.1634 52.84H40.1634C40.1634 55.2346 40.6618 57.3818 41.6916 59.2506L43.4433 58.2854ZM42.1634 52.84V36.2H40.1634V52.84H42.1634ZM42.1634 36.2C42.1634 34.0497 42.6024 32.2495 43.439 30.7623L41.6958 29.7817C40.6604 31.6225 40.1634 33.7743 40.1634 36.2H42.1634ZM43.439 30.7623C44.2804 29.2664 45.4573 28.1196 46.9881 27.3073L46.0507 25.5406C44.1842 26.531 42.7264 27.9496 41.6958 29.7817L43.439 30.7623ZM46.9946 27.3039C48.5578 26.4597 50.4169 26.02 52.6034 26.02V24.02C50.1446 24.02 47.9477 24.5163 46.0443 25.5441L46.9946 27.3039ZM52.6034 26.02C54.8281 26.02 56.6827 26.4611 58.2048 27.2998L59.17 25.5482C57.2948 24.5149 55.0934 24.02 52.6034 24.02V26.02ZM58.2187 27.3073C59.7495 28.1196 60.9264 29.2664 61.7678 30.7623L63.511 29.7817C62.4804 27.9496 61.0227 26.531 59.1561 25.5406L58.2187 27.3073ZM61.7678 30.7623C62.6044 32.2495 63.0434 34.0497 63.0434 36.2H65.0434C65.0434 33.7743 64.5464 31.6225 63.511 29.7817L61.7678 30.7623ZM63.0434 36.2V52.84H65.0434V36.2H63.0434ZM63.0434 52.84C63.0434 54.9521 62.6058 56.7569 61.7636 58.2854L63.5153 59.2506C64.545 57.3818 65.0434 55.2346 65.0434 52.84H63.0434ZM61.7678 58.2777C60.9276 59.7716 59.7329 60.9389 58.1603 61.7881L59.1106 63.5479C61.0046 62.5251 62.4793 61.0924 63.511 59.2583L61.7678 58.2777ZM58.1667 61.7847C56.6395 62.595 54.7964 63.02 52.6034 63.02V65.02C55.0558 65.02 57.234 64.5437 59.1041 63.5513L58.1667 61.7847ZM52.6034 61.016C54.914 61.016 56.8563 60.2742 58.3214 58.7277L56.8695 57.3523C55.8386 58.4404 54.4528 59.016 52.6034 59.016V61.016ZM58.3209 58.7283C59.8039 57.1651 60.5194 55.1735 60.5194 52.84H58.5194C58.5194 54.7358 57.9523 56.2109 56.87 57.3517L58.3209 58.7283ZM60.5194 52.84V36.2H58.5194V52.84H60.5194ZM60.5194 36.2C60.5194 33.867 59.8038 31.8867 58.3119 30.3544L56.8789 31.7496C57.9523 32.852 58.5194 34.3037 58.5194 36.2H60.5194ZM58.3302 30.3737C56.8673 28.7888 54.9223 28.024 52.6034 28.024V30.024C54.4445 30.024 55.8276 30.6111 56.8606 31.7303L58.3302 30.3737ZM52.6034 28.024C50.2842 28.024 48.3283 28.7886 46.834 30.3637L48.2849 31.7403C49.3558 30.6114 50.7626 30.024 52.6034 30.024V28.024ZM46.8335 30.3643C45.3806 31.8978 44.6874 33.8748 44.6874 36.2H46.6874C46.6874 34.2959 47.2422 32.8409 48.2854 31.7397L46.8335 30.3643ZM44.6874 36.2V52.84H46.6874V36.2H44.6874ZM44.6874 52.84C44.6874 55.1658 45.3807 57.154 46.8246 58.7183L48.2942 57.3617C47.2422 56.222 46.6874 54.7435 46.6874 52.84H44.6874ZM46.8429 58.7376C48.3393 60.2744 50.2923 61.016 52.6034 61.016V59.016C50.7545 59.016 49.3449 58.4403 48.2759 57.3424L46.8429 58.7376ZM52.6034 46.588C51.897 46.588 51.4005 46.3749 51.0225 45.9969L49.6083 47.4111C50.409 48.2118 51.4378 48.588 52.6034 48.588V46.588ZM51.0436 46.0186C50.6973 45.6506 50.4834 45.1338 50.4834 44.364H48.4834C48.4834 45.5355 48.8242 46.5787 49.5872 47.3894L51.0436 46.0186ZM50.4834 44.364C50.4834 43.6383 50.691 43.1667 51.0225 42.8351L49.6083 41.4209C48.8305 42.1987 48.4834 43.2177 48.4834 44.364H50.4834ZM51.0225 42.8351C51.4005 42.4571 51.897 42.244 52.6034 42.244V40.244C51.4378 40.244 50.409 40.6202 49.6083 41.4209L51.0225 42.8351ZM52.6034 42.244C53.3109 42.244 53.7756 42.4568 54.1112 42.8134L55.5676 41.4426C54.7939 40.6206 53.768 40.244 52.6034 40.244V42.244ZM54.1541 42.8562C54.5106 43.1918 54.7234 43.6565 54.7234 44.364H56.7234C56.7234 43.1995 56.3469 42.1735 55.5248 41.3998L54.1541 42.8562ZM54.7234 44.364C54.7234 45.1166 54.5032 45.626 54.1323 45.9969L55.5465 47.4111C56.3543 46.6033 56.7234 45.5527 56.7234 44.364H54.7234ZM54.1112 46.0186C53.7756 46.3752 53.3109 46.588 52.6034 46.588V48.588C53.768 48.588 54.7939 48.2114 55.5676 47.3894L54.1112 46.0186Z"
            fill={isLightTheme ? "black" : "#fdfdfd"}
          />
        </svg>
      </div>
      <div className="flex items-center ">
        <div
          onMouseEnter={showOptions}
          onMouseLeave={hideOptions}
          className="relative hidden md:block"
        >
          <button className="mr-[40px]">
            <svg
              className="w-[65px]"
              width="73"
              height="42"
              viewBox="0 0 73 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.9807 24.3037C37.4958 24.3037 41.306 25.0692 41.306 28.0224C41.306 30.9768 37.4708 31.7151 32.9807 31.7151C28.4666 31.7151 24.6553 30.9497 24.6553 27.9964C24.6553 25.042 28.4906 24.3037 32.9807 24.3037ZM32.9807 10C36.0393 10 38.49 12.5559 38.49 15.7448C38.49 18.9337 36.0393 21.4907 32.9807 21.4907C29.9231 21.4907 27.4714 18.9337 27.4714 15.7448C27.4714 12.5559 29.9231 10 32.9807 10Z"
                fill={isLightTheme ? "#1e1e1e" : "#fdfdfd"}
              />
              <path
                style={
                  isOptionVisible
                    ? { transform: `rotate(180deg)` }
                    : { transform: `rotate(0deg)` }
                }
                className="transform-origin"
                d="M42.6057 17.46C42.5543 17.4168 42.3347 17.2539 42.154 17.1022C41.0175 16.2125 39.1574 13.8918 38.5896 12.6771C38.4984 12.4926 38.3053 12.0262 38.2929 11.777C38.2929 11.5383 38.3567 11.3107 38.486 11.0935C38.6667 10.8227 38.951 10.6055 39.2867 10.4865C39.5197 10.4099 40.2168 10.2909 40.2292 10.2909C40.9918 10.1718 42.231 10.1064 43.6004 10.1064C44.9052 10.1064 46.0939 10.1718 46.868 10.2693C46.8804 10.2804 47.7467 10.3995 48.0435 10.5296C48.5856 10.7684 48.9221 11.2348 48.9221 11.7339V11.777C48.9089 12.1021 48.5723 12.7857 48.5599 12.7857C47.9912 13.9349 46.2223 16.2021 45.0469 17.1133C45.0469 17.1133 44.7449 17.37 44.5562 17.4815C44.2851 17.6556 43.9494 17.7419 43.6137 17.7419C43.239 17.7419 42.8901 17.6444 42.6057 17.46Z"
                fill={isLightTheme ? "#1e1e1e" : "#fdfdfd"}
              />
              <rect
                x="1.21994"
                y="1"
                width="71"
                height="40"
                rx="20"
                stroke={isLightTheme ? "#1e1e1e" : "#fdfdfd"}
              />
            </svg>
          </button>
          {isOptionVisible && (
            <ul
              className={`absolute ${
                isLightTheme ? "bg-white" : "bg-slight-black"
              } shadow p-4  right-2.5 space-y-2 transition-all ease-in-out duration-300 rounded green-shadow-text-child z-50`}
              style={{ width: "150px" }}
            >
              <li>
                Save mode:{" "}
                <button
                  onClick={() => {
                    dispatch({
                      type: SAVE_TOGGLE,
                    });
                    localStorage.setItem(
                      "savePreference",
                      !saveState ? "ON" : "OFF"
                    );
                  }}
                >
                  {saveState ? "ON" : "OFF"}
                </button>
              </li>
              <li className="">
                Difficulty level
                <div
                  className="flex items-center w-full"
                  style={{ justifyContent: "space-between" }}
                >
                  <p>{difficultyState ? "Easy" : "Difficulty"}</p>
                  <button
                    className="rounded shadow-ms px-2 text-center"
                    style={{
                      color: isLightTheme ? "#fdfdfd" : "#1e1e1e",
                      background: isLightTheme ? "#1e1e1e" : "#fdfdfd",
                    }}
                    onClick={() => {
                      dispatch({
                        type: DIFFICULTY_LEVEL_TOGGLE,
                      });
                    }}
                  >
                    {">"}
                  </button>
                </div>
              </li>
              <li></li>
            </ul>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({
                type: THEME_TOGGLE,
              });
              if (saveState) {
                localStorage.setItem("theme", !isLightTheme ? "light" : "dark");
              }
            }}
            className={`${
              isLightTheme ? "bg-black" : "dark-theme-bg hover-crl"
            } py-2 px-6 rounded hover:bg-slate-600  ease-in-out duration-300 hidden md:flex `}
          >
            <div>
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.21997 1.12497C4.42997 2.27497 3.21997 4.30497 3.21997 6.62497C3.21997 8.94497 4.42997 10.975 6.24997 12.125C3.17997 12.125 0.719971 9.66497 0.719971 6.62497C0.719971 5.16628 1.29943 3.76733 2.33088 2.73588C3.36233 1.70443 4.76128 1.12497 6.21997 1.12497ZM17.79 2.62497L19.22 4.05497L3.64997 19.625L2.21997 18.195L17.79 2.62497ZM11.61 5.05497L10.13 4.12497L8.68997 5.12497L9.10997 3.42497L7.71997 2.36497L9.46997 2.24497L10.05 0.594971L10.72 2.22497L12.45 2.25497L11.1 3.38497L11.61 5.05497ZM8.30997 8.66497L7.14997 7.93497L6.02997 8.71497L6.36997 7.39497L5.27997 6.56497L6.63997 6.47497L7.08997 5.18497L7.59997 6.45497L8.95997 6.48497L7.90997 7.35497L8.30997 8.66497ZM17.72 12.625C17.72 14.0837 17.1405 15.4826 16.1091 16.5141C15.0776 17.5455 13.6787 18.125 12.22 18.125C11 18.125 9.86997 17.725 8.95997 17.055L16.65 9.36497C17.32 10.275 17.72 11.405 17.72 12.625ZM13.32 19.205L16.09 18.055L15.85 21.405L13.32 19.205ZM17.65 16.505L18.8 13.735L21 16.275L17.65 16.505ZM18.8 11.545L17.66 8.76497L21 9.00497L18.8 11.545ZM8.34997 18.055L11.12 19.205L8.58997 21.395L8.34997 18.055Z"
                  fill={isLightTheme ? "white" : "#1e1e1e"}
                />
              </svg>
            </div>
            <span
              className={`${
                isLightTheme ? "text-white" : "text-black"
              } ml-[15px] text-sm`}
            >
              {isLightTheme ? "Dark" : "Light"}
            </span>
          </button>
          <div className="block md:hidden">
            <button onClick={showOptions}>
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33333 9.33335C2.06971 9.33335 2.66667 8.7364 2.66667 8.00002C2.66667 7.26364 2.06971 6.66669 1.33333 6.66669C0.596954 6.66669 0 7.26364 0 8.00002C0 8.7364 0.596954 9.33335 1.33333 9.33335Z"
                  fill={isLightTheme ? "#1e1e1e" : "#fdfdfd"}
                />
                <path
                  d="M22.7468 6.66669H6.58683C5.89463 6.66669 5.3335 7.22782 5.3335 7.92002V8.08002C5.3335 8.77222 5.89463 9.33335 6.58683 9.33335H22.7468C23.439 9.33335 24.0002 8.77222 24.0002 8.08002V7.92002C24.0002 7.22782 23.439 6.66669 22.7468 6.66669Z"
                  fill={isLightTheme ? "#1e1e1e" : "#fdfdfd"}
                />
                <path
                  d="M22.7467 13.3333H1.25333C0.561136 13.3333 0 13.8944 0 14.5866V14.7466C0 15.4388 0.561136 16 1.25333 16H22.7467C23.4389 16 24 15.4388 24 14.7466V14.5866C24 13.8944 23.4389 13.3333 22.7467 13.3333Z"
                  fill={isLightTheme ? "#1e1e1e" : "#fdfdfd"}
                />
                <path
                  d="M22.7467 0H1.25333C0.561136 0 0 0.561136 0 1.25333V1.41333C0 2.10553 0.561136 2.66667 1.25333 2.66667H22.7467C23.4389 2.66667 24 2.10553 24 1.41333V1.25333C24 0.561136 23.4389 0 22.7467 0Z"
                  fill={isLightTheme ? "#1e1e1e" : "#fdfdfd"}
                />
              </svg>
            </button>
            {isOptionVisible && <MenuOptions hideOptions={hideOptions} />}
          </div>
        </div>
      </div>
    </header>
  );
}