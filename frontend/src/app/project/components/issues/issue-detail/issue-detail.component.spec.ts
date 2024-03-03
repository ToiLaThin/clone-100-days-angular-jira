import { Store } from "@ngrx/store";
import { IssueDetailComponent } from "./issue-detail.component";
import { IssuePriority, IssueStatus, IssueType } from "../../../../interface/issue";

describe('IssueDetailComponent Spec', () => {
    let sut: IssueDetailComponent;

    const mockStore: Store = jasmine.createSpyObj('store', ['dispatch']);

    const mockNzModalService:any = {
        create: jasmine.createSpy('create').and.callThrough()
    } //obj represent the modal service, but not of type NzModalService  (any) so we can pass in component

    beforeEach(() => {
        sut = new IssueDetailComponent(mockStore, mockNzModalService);
        sut.issue = {
            id: '',
            title: '',
            type: IssueType.TASK,
            status: IssueStatus.BACKLOG,
            priority: IssuePriority.LOW,
            listPosition: 0,
            description: '',
            estimate: 0,
            timeSpent: 0,
            timeRemaining: 0,
            createdAt: '',
            updatedAt: '',
            reporterId: '',
            userIds: [],
            comments: [],
            projectId: '',
        }
    });

    it('should be able to open Delete Issue Modal', () => {
        sut.openDeleteIssueModal();
        expect(mockNzModalService.create).toHaveBeenCalled();
    });

    it('should be able to Close Modal', () => {
        spyOn(sut.onClosedModal, 'emit').and.callThrough();
        sut.closeModal();
        expect(sut.onClosedModal.emit).toHaveBeenCalled();
    });

    it('should be able to open Issue Full Detail', () => {
        spyOn(sut.onOpenedIssueFullDetail, 'emit').and.callThrough();
        sut.openIssueFullDetail();
        expect(sut.onOpenedIssueFullDetail.emit).toHaveBeenCalled();
    });
});