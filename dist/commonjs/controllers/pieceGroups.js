"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pim_base_1 = require('../pim-base');
var PieceGroupsController = (function (_super) {
    __extends(PieceGroupsController, _super);
    function PieceGroupsController() {
        _super.apply(this, arguments);
    }
    PieceGroupsController.Create = function (data) {
        return this.put("api/piecegroups", data);
    };
    PieceGroupsController.Delete = function (id) {
        return this.delete("api/piecegroups", null);
    };
    PieceGroupsController.Get = function (id) {
        return this.get("api/piecegroups/" + id);
    };
    PieceGroupsController.GetAll = function () {
        return this.get("api/piecegroups");
    };
    PieceGroupsController.GetByCode = function (code) {
        return this.get("api/piecegroups/by-code/" + code);
    };
    PieceGroupsController.Update = function (data) {
        return this.patch("api/piecegroups", data);
    };
    return PieceGroupsController;
}(pim_base_1.PimBase.ApiController));
exports.PieceGroupsController = PieceGroupsController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpZWNlR3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLHlCQUFzQixhQUFhLENBQUMsQ0FBQTtBQUdwQztJQUEyQyx5Q0FBcUI7SUFBaEU7UUFBMkMsOEJBQXFCO0lBeUJoRSxDQUFDO0lBeEJpQiw0QkFBTSxHQUFwQixVQUFxQixJQUFxQjtRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRWEsNEJBQU0sR0FBcEIsVUFBcUIsRUFBVTtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRWEseUJBQUcsR0FBakIsVUFBa0IsRUFBVTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsRUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVhLDRCQUFNLEdBQXBCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRWEsK0JBQVMsR0FBdkIsVUFBd0IsSUFBWTtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBMkIsSUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVhLDRCQUFNLEdBQXBCLFVBQXFCLElBQXFCO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTCw0QkFBQztBQUFELENBekJBLEFBeUJDLENBekIwQyxrQkFBTyxDQUFDLGFBQWEsR0F5Qi9EO0FBekJZLDZCQUFxQix3QkF5QmpDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvcGllY2VHcm91cHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZFxyXG5cclxuICAgVmVyc2lvbjogREVWXHJcbiAgIERhdGU6ICAgNC84LzIwMTYgMTQ6MjU6MzNcclxuKi9cclxuXHJcbi8qIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLiAqL1xyXG5cclxuaW1wb3J0IHtQaW1CYXNlfSBmcm9tICcuLi9waW0tYmFzZSc7XHJcbmltcG9ydCB7SVBpZWNlR3JvdXBEYXRhfSBmcm9tICcuLi9waW0tZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VHcm91cHNDb250cm9sbGVyIGV4dGVuZHMgUGltQmFzZS5BcGlDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGRhdGE6IElQaWVjZUdyb3VwRGF0YSk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGBhcGkvcGllY2Vncm91cHNgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIERlbGV0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKGBhcGkvcGllY2Vncm91cHNgLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldChpZDogbnVtYmVyKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZWdyb3Vwcy8ke2lkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QWxsKCk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGFwaS9waWVjZWdyb3Vwc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QnlDb2RlKGNvZGU6IHN0cmluZyk6IFByb21pc2U8SVBpZWNlR3JvdXBEYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBhcGkvcGllY2Vncm91cHMvYnktY29kZS8ke2NvZGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoZGF0YTogSVBpZWNlR3JvdXBEYXRhKTogUHJvbWlzZTxJUGllY2VHcm91cERhdGE+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRjaChgYXBpL3BpZWNlZ3JvdXBzYCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLyogRW5kIG9mIGZpbGUgKi9cclxuXHJcbi8qIEVuZCBvZiBmaWxlICovXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
