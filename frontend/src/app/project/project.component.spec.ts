import { Store } from "@ngrx/store";
import { ProjectComponent } from "./project.component";
import { projectActions } from "../state/project/project.actions";

describe('ProjectComponent Spec', () => {
    let sut: ProjectComponent;
    const mockStore: Store = jasmine.createSpyObj('store', ['dispatch']);

    beforeEach(() => {
        sut = new ProjectComponent(mockStore);
    })

    it('should be able to toggle', () => {
        sut.expanded = false;
        sut.manualExpand();
        expect(sut.expanded).toBe(true);
    })

    it('should be call store dispatch', () => {
        sut.ngOnInit();
        expect(mockStore.dispatch).toHaveBeenCalled();
    })

});