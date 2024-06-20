"use client";

import React from "react";
import Header from "../../../components/Header";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { loadMercadoPago } from "@mercadopago/sdk-js";

export default function Plans() {
  async function GenerateCardToken() {
    await loadMercadoPago();
    const mp = new (window as any).MercadoPago(
      process.env.NEXT_PUBLIC_MERCADOPAGO_TOKEN || ""
    );

    const cardNumberElement = mp.fields
      .create("cardNumber", {
        placeholder: "Card Number",
      })
      .mount("form-checkout__cardNumber");
    const expirationDateElement = mp.fields
      .create("expirationDate", {
        placeholder: "MM/YY",
      })
      .mount("form-checkout__expirationDate");
    const securityCodeElement = mp.fields
      .create("securityCode", {
        placeholder: "Security Code",
      })
      .mount("form-checkout__securityCode");

    const token = await mp.fields.createCardToken({
      cardholderName: "GUILHERME VIANNA",
      identificationType: "CPF",
      identificationNumber: "15918390766",
    });
    console.log(token);
  }

  return (
    <div>
      <Header>
        <a className="flex gap-2 items-center font-bold text-white " href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-left-fill"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <p>Voltar</p>
        </a>
      </Header>
      <form id="form-checkout" action="/process_payment" method="POST">
        <div id="form-checkout__cardNumber" className="container"></div>
        <div id="form-checkout__expirationDate" className="container"></div>
        <div id="form-checkout__securityCode" className="container"></div>
        <input
          type="text"
          id="form-checkout__cardholderName"
          placeholder="Cardholder"
        />
        <select id="form-checkout__issuer" name="issuer">
          <option value="" disabled selected>
            Issuing Bank
          </option>
        </select>
        <select id="form-checkout__installments" name="installments">
          <option value="" disabled selected>
            Plots
          </option>
        </select>
        <select
          id="form-checkout__identificationType"
          name="identificationType"
        >
          <option value="" disabled selected>
            Document type
          </option>
        </select>
        <input
          type="text"
          id="form-checkout__identificationNumber"
          name="identificationNumber"
          placeholder="Document number"
        />
        <input
          type="email"
          id="form-checkout__email"
          name="email"
          placeholder="Email"
        />

        <input id="token" name="token" type="hidden"></input>
        <input
          id="paymentMethodId"
          name="paymentMethodId"
          type="hidden"
        ></input>
        <input
          id="transactionAmount"
          name="transactionAmount"
          type="hidden"
          value="100"
        ></input>
        <input
          id="description"
          name="description"
          type="hidden"
          value="Product Name"
        ></input>

        <button
          type="submit"
          id="form-checkout__submit"
          onClick={GenerateCardToken}
        >
          {" "}
          Pay
        </button>
      </form>
    </div>
  );
}
