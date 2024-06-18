import Image from "next/image";
import React from "react";

/**
 * Form_busca component
 *
 * This component renders a search form with an input field, a search button, and a list of suggestions.
 *
 * @param {Object} props - The component props
 * @param {string} props.holder - The placeholder text for the input field
 * @param {string} props.message - The message to display in the alert
 * @param {string} [props.label=""] - The label text for the input field
 * @param {function} props.onChange - The function to call when the input value changes
 * @param {string} props.value - The current value of the input field
 * @param {string} props.classValue - The class name for the alert div
 * @param {Array<string>} props.segments - The list of suggestion options
 *
 * @returns {JSX.Element} The rendered component
 */
const Form_busca = ({
  holder,
  message,
  label = "",
  onChange,
  value,
  classValue,
  segments,
}) => {
  return (
    <React.Fragment>
      <label htmlFor="txtBusca">{label}</label>
      <div id="divBusca">
        <div className="busca_img">
          <Image
            width={20}
            height={20}
            src="/img/form_franchise/lupa.png"
            alt="lupa busca"
          />
        </div>

        <input
          type="text"
          id="txtBusca"
          placeholder={holder}
          name="txtBusca"
          autoComplete="on"
          list="textBusca_sugestion"
          onChange={onChange}
          value={value}
        />
        <button id="btnBusca">Buscar</button>

        <datalist
          className="w-60 my-2 rounded-md bg-PASTEL p-2 border-none"
          id="textBusca_sugestion"
        >
          {segments.map((options, index) => (
            <option key={index} value={options}>
              {options}
            </option>
          ))}
        </datalist>
      </div>

      <div className={`segment-atribute-alert ${classValue}`} role="alert">
        {message}
      </div>

      <div className="w-8/12"></div>
      <style jsx>{`
        .segment-atribute-alert {
          margin-top: 2rem;
        }

        #divBusca {
          display: flex;
          background-color: #ffffff;
          border: 1px solid #ddd;
          border-radius: 5px;
          width: 100%;
          height: 2.4remm;

          box-sizing: border-box;
        }

        #txtBusca {
          background-color: transparent;
          padding-left: 1rem;
          font-size: 18px;
          border: none;
          height: 2.4rem;
          width: 80%;
        }

        #btnBusca {
          border-left: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          float: right;
          width: 20%;
          height: 2.4rem;
          border-radius: 0 7px 3.5px 0;

          font-weight: bold;
          background: #ffffff;
          color: var(--color_text_secundary);
        }
        .busca_img {
          margin: 10px;
        }

        input[type="text"] {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          box-sizing: border-box;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Form_busca;
