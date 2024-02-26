import { NzModalRef } from 'ng-zorro-antd/modal';
export class DeleteIssueModel { //? for what?
    constructor(public issueId: string, public deleteModelRef: NzModalRef) {}
}