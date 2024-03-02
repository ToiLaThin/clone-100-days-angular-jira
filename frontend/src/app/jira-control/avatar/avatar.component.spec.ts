import { AvatarComponent } from './avatar.component';
import { TestBed } from '@angular/core/testing';

describe('AvatarComponent Spec', () => {
    //Arrange
    let sut: AvatarComponent;
    
    beforeEach(() => {
        sut = new AvatarComponent();
    });

    //Act & Assert
    //Test case 1
    it('should be able to get styles', () => {
        expect(sut.style.width).toEqual('12px');
        expect(sut.style.height).toEqual('12px');
    });

    it('should be able to get correct styles when input changed', () => {
        sut.size = 24; //input
        expect(sut.style.width).toEqual('24px');
        expect(sut.style.height).toEqual('24px');
    });

    it('should be able to get background image with avatarUrl', () => {
        sut.avatarUrl = 'http://avatar.com'; //input
        expect(sut.style['background-image']).toEqual('url(http://avatar.com)');
    });

    // it('should be able to have input className', () => {
    //     //Arrange
    //     TestBed.configureTestingModule({ declarations: [AvatarComponent] }).compileComponents();
    //     const fixture = TestBed.createComponent(AvatarComponent);
    //     fixture.componentInstance.className = 'avatar-class'; //input        
    //     fixture.detectChanges(); //update the DOM after have input
    //     const avatarComponentDOMRef: HTMLElement = fixture.nativeElement;
    //     const divAvatarContainer = avatarComponentDOMRef.querySelector('div.avatar-container');
    //     console.log(divAvatarContainer);

    //     //Assert
    //     expect(divAvatarContainer).toHaveClass('avatar-class');
    // });

    
    it('should be able to have rounded border if rouded input is true', () => {
        sut.rounded = true; //input
        expect(sut.style['border-radius']).toEqual('100%');
    });
});
