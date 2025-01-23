const controller = require("../controllers/guestbookControllers.js");
describe("test routes", () => {
  test("responds to /peter", () => {
    const req = {};
    const res = {
      text: "",
      send: function (input) {
        this.text = input;
      },
    };
    controller.peters_entries(req, res);
    expect(res.text).toEqual(
      "<h1>Processing Peter's Entries, see terminal</h1>"
    );
  });
  test("basic landing page renders", () => {
    const req = {};
    const res = { render: jest.fn() };
    controller.basic_landing_page(req, res);
    expect(res.render.mock.calls[0][0]).toBe("entries");
  });
  test("responds to /about", () => {
    const req = {};
    const res = { status: jest.fn(), redirect: jest.fn() };
    controller.about_page(req, res);
    expect(res.redirect.mock.calls[0][0]).toBe("/about.html");
    expect(res.status.mock.calls[0][0]).toBe(200);
  });
  test("404 handler renders", () => {
    const req = {};
    const res = { status: jest.fn(), type: jest.fn(), send: jest.fn() };
    controller.not_found(req, res);
    expect(res.status.mock.calls[0][0]).toBe(404);
    expect(res.type.mock.calls[0][0]).toBe("text/plain");
    expect(res.send.mock.calls[0][0]).toEqual("404 Not found.");
  });
  test("500 handler renders", () => {
    const err = new Error("some error");
    const req = {};
    const res = { status: jest.fn(), type: jest.fn(), send: jest.fn() };
    const next = jest.fn();
    controller.server_error(err, req, res, next);
    expect(res.status.mock.calls[0][0]).toBe(500);
    expect(res.type.mock.calls[0][0]).toBe("text/plain");
    expect(res.send.mock.calls[0][0]).toEqual("Internal Server Error.");
  });



});
