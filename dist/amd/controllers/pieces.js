var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../pim-base'], function (require, exports, pim_base_1) {
    "use strict";
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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBVUE7UUFBc0Msb0NBQWE7UUFBbkQ7WUFBc0MsOEJBQWE7UUE2Qm5ELENBQUM7UUE1QmlCLHNCQUFLLEdBQW5CLFVBQW9CLElBQXdCO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRWEsdUJBQU0sR0FBcEIsVUFBcUIsSUFBZ0I7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFYSx1QkFBTSxHQUFwQixVQUFxQixFQUFVO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRWEscUJBQUksR0FBbEIsVUFBbUIsSUFBd0I7WUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFYSxvQkFBRyxHQUFqQixVQUFrQixFQUFVO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFjLEVBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFYSwwQkFBUyxHQUF2QixVQUF3QixJQUFZO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUFzQixJQUFNLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRWEsdUJBQU0sR0FBcEIsVUFBcUIsSUFBZ0I7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFTCx1QkFBQztJQUFELENBN0JBLEFBNkJDLENBN0JxQyx3QkFBYSxHQTZCbEQ7SUE3Qlksd0JBQWdCLG1CQTZCNUIsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9waWVjZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgVmVyc2lvbjogREVWXHJcbiAgIERhdGU6ICAgIDQvMTEvMjAxNiAxMTowNDoxM1xyXG4qL1xyXG5cclxuaW1wb3J0IHtBcGlDb250cm9sbGVyfSBmcm9tICcuLi9waW0tYmFzZSc7XHJcbmltcG9ydCB7SVBhZ2VkUmVzdWx0RGF0YSwgSVBpZWNlRGF0YSwgSVBpZWNlU2VsZWN0b3JEYXRhfSBmcm9tICdwaW0tZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VzQ29udHJvbGxlciBleHRlbmRzIEFwaUNvbnRyb2xsZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBDb3VudChkYXRhOiBJUGllY2VTZWxlY3RvckRhdGEpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQoYGFwaS9waWVjZXNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZShkYXRhOiBJUGllY2VEYXRhKTogUHJvbWlzZTxJUGllY2VEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvcGllY2VzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBEZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZShgYXBpL3BpZWNlc2AsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEZpbmQoZGF0YTogSVBpZWNlU2VsZWN0b3JEYXRhKTogUHJvbWlzZTxJUGFnZWRSZXN1bHREYXRhPElQaWVjZURhdGE+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdChgYXBpL3BpZWNlc2AsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0KGlkOiBudW1iZXIpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZXMvJHtpZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJ5Q29kZShjb2RlOiBzdHJpbmcpOiBQcm9taXNlPElQaWVjZURhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZXMvYnktY29kZS8ke2NvZGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoZGF0YTogSVBpZWNlRGF0YSk6IFByb21pc2U8SVBpZWNlRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGNoKGBhcGkvcGllY2VzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBFbmQgb2YgZmlsZSAqL1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
