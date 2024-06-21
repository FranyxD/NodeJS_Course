import { characters } from '../../src/js-foundation/02-destructuring';

describe('Probadno 02-desestructuring file', () => {

    test('characters should contain flash, superman', () => {
        
        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman');

    });

    test('first character should be Flash, and second superman', () => {
        
        const [flash, superman] = characters;

        expect( flash ).toBe('Flash');
        expect( superman ).toBe('Superman');

    })

})