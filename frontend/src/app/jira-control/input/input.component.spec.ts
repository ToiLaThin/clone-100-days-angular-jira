import { InputComponent } from "./input.component";

describe('InputComponent Spec', () => {
    let sut: InputComponent;

    beforeEach(() => {
        sut = new InputComponent();
    });

    it('should be able to init and have control', () => {
        sut.ngOnInit();
        expect(sut).toBeDefined();
        expect(sut).toBeInstanceOf(InputComponent);
        expect(sut).toBeTruthy();
        expect(sut.control).toBeTruthy();
    });

    it('should be able to get the right icon size and container with by default', () => {
        const iconSize = 16;
        expect(sut.iconSize).toBe(16);
        expect(sut.iconContainerWidth).toBe(32);
    });

    it('should be able to get return is Show Clear Button false by default no enableClearButton Input', () => {
        expect(sut.isShowClearButton).toBe(false);
    });

    it('should be able to clear control value', () => {
        sut.ngOnInit();
        spyOn(sut.control, 'patchValue').and.callThrough(); //call it real , callFake provide a fake function
        sut.clear()
        expect(sut.control.value).toBe('');
        expect(sut.control.patchValue).toHaveBeenCalled();
    });
    
});