import { TestBed } from "@angular/core/testing";
import { ProjectModule } from "./project.module";

describe('ProjectModule Spec', () => {
    let testingModule: ProjectModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ProjectModule]
        });
        testingModule = TestBed.inject(ProjectModule);
    });

    it('should be have imported Project Module', () => {
        expect(testingModule).toBeTruthy();
        //truthy means not null or undefined, false, 0, '', NaN, and null are all falsy
    });
});