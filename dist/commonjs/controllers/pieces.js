"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_base_1 = require('../pim-base');
var PiecesController = (function (_super) {
    __extends(PiecesController, _super);
    function PiecesController() {
        _super.apply(this, arguments);
    }
    PiecesController.Count = function (data) {
        return this.head("api/pieces", data);
    };
    PiecesController.Create = function (data) {
        return this.put("api/pieces", data);
    };
    PiecesController.Delete = function (id) {
        return this.delete("api/pieces", id);
    };
    PiecesController.Find = function (data) {
        return this.post("api/pieces", data);
    };
    PiecesController.Get = function (id) {
        return this.get("api/pieces/" + id);
    };
    PiecesController.GetByCode = function (code) {
        return this.get("api/pieces/by-code/" + code);
    };
    PiecesController.Update = function (data) {
        return this.patch("api/pieces", data);
    };
    return PiecesController;
}(pim_base_1.ApiController));
exports.PiecesController = PiecesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFPQSx5QkFBNEIsYUFBYSxDQUFDLENBQUE7QUFHMUM7SUFBc0Msb0NBQWE7SUFBbkQ7UUFBc0MsOEJBQWE7SUE2Qm5ELENBQUM7SUE1QmlCLHNCQUFLLEdBQW5CLFVBQW9CLElBQXdCO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRWEsdUJBQU0sR0FBcEIsVUFBcUIsSUFBZ0I7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFYSx1QkFBTSxHQUFwQixVQUFxQixFQUFVO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRWEscUJBQUksR0FBbEIsVUFBbUIsSUFBd0I7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFYSxvQkFBRyxHQUFqQixVQUFrQixFQUFVO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFjLEVBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFYSwwQkFBUyxHQUF2QixVQUF3QixJQUFZO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUFzQixJQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRWEsdUJBQU0sR0FBcEIsVUFBcUIsSUFBZ0I7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTCx1QkFBQztBQUFELENBN0JBLEFBNkJDLENBN0JxQyx3QkFBYSxHQTZCbEQ7QUE3Qlksd0JBQWdCLG1CQTZCNUIsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9waWVjZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgVmVyc2lvbjogREVWXHJcbiAgIERhdGU6ICAgIDQvMTEvMjAxNiAxMTowNDoxM1xyXG4qL1xyXG5cclxuaW1wb3J0IHtBcGlDb250cm9sbGVyfSBmcm9tICcuLi9waW0tYmFzZSc7XHJcbmltcG9ydCB7SVBhZ2VkUmVzdWx0RGF0YSwgSVBpZWNlRGF0YSwgSVBpZWNlU2VsZWN0b3JEYXRhfSBmcm9tICdwaW0tZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VzQ29udHJvbGxlciBleHRlbmRzIEFwaUNvbnRyb2xsZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBDb3VudChkYXRhOiBJUGllY2VTZWxlY3RvckRhdGEpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQoYGFwaS9waWVjZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZShkYXRhOiBJUGllY2VEYXRhKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvcGllY2VzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBEZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZShgYXBpL3BpZWNlc2AsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEZpbmQoZGF0YTogSVBpZWNlU2VsZWN0b3JEYXRhKTogUHJvbWlzZTxJUGFnZWRSZXN1bHREYXRhPElQaWVjZURhdGE+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdChgYXBpL3BpZWNlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0KGlkOiBudW1iZXIpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZXMvJHtpZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJ5Q29kZShjb2RlOiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZXMvYnktY29kZS8ke2NvZGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoZGF0YTogSVBpZWNlRGF0YSk6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvcGllY2VzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
