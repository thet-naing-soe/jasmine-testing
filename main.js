// Test Suite

describe(`${User.name} Class`, () => {
    it("exists", () => {
      // assert
      expect(User).toBeDefined()
    })
    let model;
    
    beforeEach(() => {
        model = new User();
    });
    describe("additional matchers examples", () => {
      it("gets full name pieces", () => {
        // arrange
        const firstName = 'Dylan'
        const lastName = "Christopher"
        const middleName = "Israel"

        // act
        model = new User({firstName, middleName, lastName})

        // assert
        expect(model.fullNamePieces).toEqual([firstName, middleName, lastName])
      })
    })
})
