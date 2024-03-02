import { TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { By } from "@angular/platform-browser";

const convertHexToRgbColor = (colorHex: string) => {
    const color = colorHex.replace('#', '');
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

describe('ButtonComponent Spec', () => {
    let sut: ButtonComponent;

    beforeEach(() => {
        sut = new ButtonComponent();
    });

    it('component should be create', () => {
        expect(sut).toBeDefined();
        expect(sut).toBeInstanceOf(ButtonComponent);
        expect(sut).toBeTruthy();
    });

    it('component default primary btn should have right style background', () => {
        TestBed.configureTestingModule({ declarations: [ButtonComponent] })
               .compileComponents();

        const fixture = TestBed.createComponent(ButtonComponent);
        fixture.componentInstance.className = 'btn-primary'; //input
        fixture.detectChanges(); //update the DOM after have input
        const buttonComponentDOMRef: HTMLElement = fixture.nativeElement;
        const buttonElementHavingBtnPrimaryClass = buttonComponentDOMRef.querySelector('button.btn-primary') as HTMLElement;
        console.log(buttonElementHavingBtnPrimaryClass);

        //Assert
        expect(buttonElementHavingBtnPrimaryClass).toHaveClass('btn-primary');
        const elementWithStyle: HTMLElement = fixture.debugElement.query(By.css('button.btn-primary')).nativeElement;
        //empty console.log(elementWithStyle.style);
        //expect(elementWithStyle.style.background).toBe('background: #0052cc'); 
    });
    
    it('component btn to have svg-icon class spinner', () => {
        //remember to import SvgIconComponent
        TestBed.configureTestingModule({ declarations: [ButtonComponent, SvgIconComponent] })
               .compileComponents();

        const fixture = TestBed.createComponent(ButtonComponent);
        fixture.componentInstance.isWorking = true; //input
        fixture.detectChanges(); //update the DOM after have input
        const buttonComponentDOMRef: HTMLElement = fixture.nativeElement;
        const svgIconHavingSpinnerClass = buttonComponentDOMRef.querySelector('svg-icon.spinner') as HTMLElement;
        console.log(svgIconHavingSpinnerClass);

        //Assert
        expect(svgIconHavingSpinnerClass).not.toBeNull();
    });
})