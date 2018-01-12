import { AuthService } from './auth.service';


describe('Service:Auth', () => {

    let authService: AuthService;

    beforeAll(() => {
        authService = new AuthService();
    })

    it('Should return true to us', () => {

        expect(authService.isAuthenticated()).toBeTruthy();
    });

    it('Should return true to us', () => {

        expect(authService.isAuthenticated()).toBeFalsy();
    });

    afterAll(() => {
        authService = null;
    });
}
);