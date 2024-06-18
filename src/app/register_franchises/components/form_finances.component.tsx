import React from "react";

/**
 * Form_finances component
 *
 * @param {Object} props - Component properties
 * @param {function} props.onChangeMonthlyRevenue - Callback for when the monthly revenue input changes
 * @param {function} props.onChangeUnitinBrazil - Callback for when the unit in Brazil input changes
 * @param {function} props.onChangeHeadquarters - Callback for when the headquarters input changes
 * @param {function} props.onChangeReturnonInvestmenFrom - Callback for when the investment return (from) input changes
 * @param {function} props.onChangeReturnonInvestmenUntil - Callback for when the investment return (until) input changes
 * @returns {JSX.Element} The rendered component
 */

const Form_finances = ({
  onChangeMonthlyRevenue,
  onChangeUnitinBrazil,
  onChangeHeadquarters,
  onChangeReturnonInvestmenFrom,
  onChangeReturnonInvestmenUntil,
}) => {
  return (
    <React.Fragment>
      <div>
        <div className="container-finance-info">
          <div className="container-finance-info--item">
            <label htmlFor="franchise-finance-fatmed" className="label_text">
              Faturamento Médio Mensal
            </label>

            <input
              type="number"
              id="franchise-finance-fatmed"
              name="franchise-finance-fatmed"
              placeholder="0,00"
              onChange={onChangeMonthlyRevenue}
            />
          </div>

          <div className="container-finance-info--item">
            <label htmlFor="franchise-finance-unit" className="label_text">
              Unidade no Brasil
            </label>
            <input
              type="text"
              id="franchise-finance-unit"
              name="franchise-finance-unit"
              onChange={onChangeUnitinBrazil}
            />
          </div>

          <div className="container-finance-info--item">
            <label htmlFor="franchise-finance-sede" className="label_text">
              Sede
            </label>
            <input
              type="text"
              id="franchise-finance-sede"
              name="franchise-finance-sede"
              placeholder=""
              onChange={onChangeHeadquarters}
            />
          </div>
        </div>

        <div className="container-finance-info--item--finance_return">
          <div className="container-finance-info--item">
            <label
              htmlFor="franchise-finance-investreturn-begin"
              className="label_text"
            >
              Retorno de Investimento &#x24D8;
            </label>
            <input
              type="text"
              id="franchise-finance-investreturn-begin"
              name="franchise-finance-investreturn-begin"
              placeholder=""
              onChange={onChangeReturnonInvestmenFrom}
            />
          </div>

          <div className="container-finance-info--item">
            <label
              htmlFor="franchise-finance-investreturn-begin"
              className="label_text"
            >
              {" "}
            </label>
            <input
              type="text"
              id="franchise-finance-investreturn-until"
              name="franchise-finance-investreturn-until"
              placeholder=""
              onChange={onChangeReturnonInvestmenUntil}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        label {
          display: block;
          margin-top: 10px;
          color: #666;
          font-family: var(--font_primary);
          font-size: 0.8rem;
        }
        .label_text {
          margin-top: 45px;
          padding-left: 0.5rem;
          margin-bottom: 0.2rem;
        }
        input[type="text"],
        input[type="number"] {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          box-sizing: border-box;
        }
        .container-finance-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: auto;
          align-items: flex-end;
        }
        .container-finance-info--item {
          width: 30%;
        }
        .container-finance-info--item--finance_return {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin-top: auto;
          align-items: flex-end;
        }
        #franchise-finance-investreturn-until {
          margin-left: 2rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Form_finances;
