describe("Validate Category Filter", () => {
  it("Validate filter categories by hand tools", () => {
    cy.request({
      method: "GET",
      url: "https://api.practicesoftwaretesting.com/categories/tree?by_category_slug=hand-tools",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body[0].sub_categories[0].name).to.equal("Hammer");
      expect(response.body[0].sub_categories[1].name).to.equal("Hand Saw");
      expect(response.body[0].sub_categories[2].name).to.equal("Wrench");
      expect(response.body[0].sub_categories[3].name).to.equal("Screwdriver");
      expect(response.body[0].sub_categories[4].name).to.equal("Pliers");
      expect(response.body[0].sub_categories[5].name).to.equal("Chisels");
      expect(response.body[0].sub_categories[6].name).to.equal("Measures");
    });
  });


  it("Validate filter categories by power tools", () => {
    cy.request({
      method: "GET",
      url: "https://api.practicesoftwaretesting.com/categories/tree?by_category_slug=power-tools",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body[0].sub_categories[0].name).to.equal("Grinder");
      expect(response.body[0].sub_categories[1].name).to.equal("Sander");
      expect(response.body[0].sub_categories[2].name).to.equal("Saw");
      expect(response.body[0].sub_categories[3].name).to.equal("Drill");
    });
  });

  it("Validate filter categories by other", () => {
    cy.request({
      method: "GET",
      url: "https://api.practicesoftwaretesting.com/categories/tree?by_category_slug=other",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body[0].sub_categories[0].name).to.equal("Tool Belts");
      expect(response.body[0].sub_categories[1].name).to.equal(
        "Storage Solutions"
      );
      expect(response.body[0].sub_categories[2].name).to.equal("Workbench");
      expect(response.body[0].sub_categories[3].name).to.equal("Safety Gear");
      expect(response.body[0].sub_categories[4].name).to.equal("Fasteners");
    });
  });

it("Validate filter categories by special tools", () => {
  cy.request({
    method: "GET",
    url: "https://api.practicesoftwaretesting.com/categories/tree?by_category_slug=power-special-tools",
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).is.empty;
  });
});


it("Validate filter categories by rentals", () => {
  cy.request({
    method: "GET",
    url: "https://api.practicesoftwaretesting.com/products?is_rental=true",
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.data[0].name).to.equal("Combination Pliers");
    expect(response.body.data[1].name).to.equal("Pliers");
    expect(response.body.data[2].name).to.equal("Bolt Cutters");
    expect(response.body.data[3].name).to.equal("Long Nose Pliers");
    expect(response.body.data[4].name).to.equal("Slip Joint Pliers");
     expect(response.body.data[5].name).to.equal(
       "Claw Hammer with Shock Reduction Grip"
     );
     expect(response.body.data[6].name).to.equal("Hammer");
     expect(response.body.data[7].name).to.equal("Claw Hammer");
      expect(response.body.data[8].name).to.equal("Thor Hammer");
  });
});


});
