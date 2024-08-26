/**
 * @jest-environment jsdom
 */

import {screen, waitFor} from "@testing-library/dom"
import BillsUI from "../views/BillsUI.js"
import { bills } from "../fixtures/bills.js"
import { ROUTES_PATH} from "../constants/routes.js";
import {localStorageMock} from "../__mocks__/localStorage.js";

import { screen, waitFor } depuis « @testing-library/dom »;
import userEvent à partir de « @testing-library/user-event »;
importer mockStore à partir de ".. /__mocks__/store.js";

importer BillsUI à partir de ".. /vues/BillsUI.js";
importer  { factures } à partir de ".. /fixtures/bills.js";
import { ROUTES, ROUTES_PATH } de ".. /constantes/routes.js";
import { localStorageMock } à partir de ".. /__mocks__/localStorage.js";

importer routeur à partir de ".. /app/Router.js";
importer des factures de ".. /conteneurs/Bills.js";

plaisanterie.mock(".. /app/store", () => mockStore);

describe(« Quand je suis sur la page des factures mais qu’elle est en cours de chargement », () => {
  test(« Ensuite, la page de chargement doit être rendue », () => {
    document.corps.innerHTML = BillsUI({ loading : true });
    expect(screen.getAllByText(« Chargement... »)).toBeTruthy();
  });
});
describe(« Étant donné que je suis lié en tant qu’employé », () => {


import router from "../app/Router.js";

describe("Given I am connected as an employee", () => {
  describe("When I am on Bills Page", () => {
    test("Then bill icon in vertical layout should be highlighted", async () => {

      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.Bills)
      await waitFor(() => screen.getByTestId('icon-window'))
      const windowIcon = screen.getByTestId('icon-window')
      //to-do write expect expression

    })
    test("Then bills should be ordered from earliest to latest", () => {
      document.body.innerHTML = BillsUI({ data: bills })
      const dates = screen.getAllByText(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i).map(a => a.innerHTML)
      const antiChrono = (a, b) => ((a < b) ? 1 : -1)
      const datesSorted = [...dates].sort(antiChrono)
      expect(dates).toEqual(datesSorted)
    })
  })
})
