import React from "react";
import {
  SAVE_TOGGLE,
  DIFFICULTY_LEVEL_TOGGLE,
  THEME_TOGGLE,
} from "../../../redux/actions/GlobalActions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function MenuOptions({ hideOptions }) {
  const dispatch = useDispatch();
  const saveState = useSelector((state) => state.saveToggleReducer);
  const difficultyState = useSelector((state) => state.difficultLevelToggle);
  const isLightTheme = useSelector((state) => state.themeToggle);
  return (
    <div className="absolute left-0 top-0 w-full h-full ">
      <ul
        className={`absolute ${
          isLightTheme ? "bg-white" : "bg-slight-black"
        } shadow p-4  space-y-4 transition-all ease-in-out text-lg pt-[30vh] duration-300 green-shadow-text-child z-50 flex flex-col items-center`}
        style={{ width: "100%", height: "100%" }}
      >
        <li>
          <button
            onClick={hideOptions}
            className="absolute right-8 font-bold text-xl top-2 z-50"
          >
            X
          </button>
        </li>
        <li>
          <Link to={"/about"} onClick={hideOptions}>
            About
          </Link>
        </li>
        <li>
          <Link to={"/privacy"} onClick={hideOptions}>
            Privacy
          </Link>
        </li>
        <li>
          <Link to={"/blog"} onClick={hideOptions}>
            What is tac-tic-toe?
          </Link>
        </li>
        <ul className="space-y-6">
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
                hideOptions();
              }}
            >
              {saveState ? "ON" : "OFF"}
            </button>
          </li>
          <li>
            <div className="flex items-center justify-center w-full mx-2  space-x-2">
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
                  hideOptions();
                }}
              >
                {">"}
              </button>
            </div>
          </li>
          <li className="w-full flex justify-center">
            <button
              onClick={() => {
                dispatch({
                  type: THEME_TOGGLE,
                });
                if (saveState) {
                  localStorage.setItem(
                    "theme",
                    !isLightTheme ? "light" : "dark"
                  );
                  hideOptions();
                }
              }}
              className={`${
                isLightTheme ? "bg-black" : "dark-theme-bg hover-crl"
              } px-4 py-2 rounded hover:bg-slate-600  ease-in-out duration-300 flex  `}
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
          </li>
        </ul>
      </ul>
    </div>
  );
}
